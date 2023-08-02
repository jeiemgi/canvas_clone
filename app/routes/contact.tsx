import clsx from "clsx";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import { validationError } from "remix-validated-form";
import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "~/lib/constants";
import { LinkCTA } from "~/components/CTA";
import ContactForm from "~/slices/Contact/ContactForm";
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

const ContactPage = () => {
  const fetcher = useFetcher();

  return (
    <div
      className={
        "noise-background flex min-h-screen items-start bg-pure-black pt-header text-white md:items-center md:pt-headerDesk"
      }
    >
      <div className="grid-container w-full pb-24 pt-24">
        <div className="col-span-4 mb-5 border-t border-t-white/30 md:col-span-12"></div>

        <div className="col-span-4 mb-12 md:order-1 md:col-start-1 md:mb-0">
          <h1 className={"heading--2 py-6 md:mb-20 md:py-0"}>Let’s chat</h1>
        </div>

        <div
          className={
            "col-span-4 md:order-2 md:col-span-6 md:col-start-7 md:mb-20"
          }
        >
          <div className={"relative overflow-hidden"}>
            <div
              className={clsx(
                "absolute inset-0 transition delay-75 duration-300",
                fetcher.data?.ok || false
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[1rem] opacity-0"
              )}
            >
              <p className={"body--1"}>
                Your message has been sent, thank you! <br />
                Someone from our team will be reaching out to you shortly.
              </p>
            </div>

            <div
              className={clsx(
                "transition-transform duration-300",
                !fetcher.data ? "translate-y-0" : "-translate-y-full"
              )}
            >
              <p className={"body--1"}>
                We’re curious to learn about your company and how we could help.
                Fill out the form below or if you would prefer to email us hit
                us up at{" "}
                <a href="mailto:biz@canvascreative.co">biz@canvascreative.co</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 mb-14 md:order-3 md:col-span-6 md:col-start-7 md:mb-0">
          <ContactForm fetcher={fetcher} validator={validator} />
        </div>

        <div className={"col-span-4 md:order-2 md:col-start-1"}>
          <div className={"mb-7"}>
            <p className={"label--2"}>new business</p>
            <LinkCTA className={"body--3"} to="mailto:biz@canvascreative.co">
              biz@canvascreative.co
            </LinkCTA>
          </div>
          <div className={"mb-7"}>
            <p className={"label--2"}>careers</p>
            <LinkCTA
              className={"body--3"}
              to="mailto:careers@canvascreative.co"
            >
              careers@canvascreative.co
            </LinkCTA>
          </div>
          <div className={"mb-14"}>
            <p className={"label--2"}>general</p>
            <LinkCTA className={"body--3"} to="mailto:info@canvascreative.co">
              info@canvascreative.co
            </LinkCTA>
          </div>

          <div className={"flex gap-4 md:absolute md:bottom-0 md:pb-8"}>
            <LinkCTA className={"body--3"} target={"_blank"} to={INSTAGRAM_URL}>
              Instagram
            </LinkCTA>
            <LinkCTA className={"body--3"} target={"_blank"} to={LINKEDIN_URL}>
              LinkedIn
            </LinkCTA>
            <LinkCTA className={"body--3"} target={"_blank"} to={TWITTER_URL}>
              Twitter
            </LinkCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
