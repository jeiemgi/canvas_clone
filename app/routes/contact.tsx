import { z } from "zod";
import { json } from "@remix-run/node";
import { withZod } from "@remix-validated-form/with-zod";
import { validationError } from "remix-validated-form";
import ContactPage from "~/slices/Contact/ContactPage";
import type { DataFunctionArgs } from "@remix-run/node";

export const validator = withZod(
  z.object({
    message: z.string().min(1, { message: "This field is required" }),
    fullName: z.string().min(1, { message: "This field is required" }),
    email: z
      .string()
      .min(1, { message: "This field is required" })
      .email("Please enter a valid email address (e.g. email@domain.com)."),
  })
);

/**
 * https://www.youtube.com/watch?v=mlM7L9fgRMc
 * https://github.com/brittneypostma/netlify-forms-with-remix/tree/main
 * https://docs.netlify.com/forms/setup/#work-with-javascript-rendered-forms
 * https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
 * @param request
 */
export const action = async ({ request }: DataFunctionArgs) => {
  const data = await request.formData();
  const validation = await validator.validate(data);

  if (validation.error) return validationError(validation.error);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("form-name", "contact");
  urlencoded.append("fullName", validation.data.fullName);
  urlencoded.append("message", validation.data.message);
  urlencoded.append("email", validation.data.email);

  const response = fetch("https://main--canvas-v4-prod.netlify.app/form", {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  })
    .then((response) => response.json())
    .catch((error) => error);

  return json({ ok: true, response });
};

const Page = () => {
  return <ContactPage />;
};

export default Page;
