import { json } from "@remix-run/node";
import { LinkCTA } from "~/components/CTA";
import ContactForm from "~/slices/Contact/ContactForm";
import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "~/lib/constants";
import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import { validationError } from "remix-validated-form";
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

export const action = async ({ request }: DataFunctionArgs) => {
  const validation = await validator.validate(await request.formData());
  if (validation.error) return validationError(validation.error);

  return json({ validation, ok: true });
};

const ContactPage = () => {
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
          <p>
            Send us your ideas and lets collaborate on something cool together.
          </p>
        </div>

        <div className="col-span-4 mb-14 md:order-3 md:col-span-6 md:col-start-7 md:mb-0">
          <ContactForm validator={validator} />
        </div>

        <div className={"col-span-4 md:order-2 md:col-start-1"}>
          <div className={"mb-7"}>
            <p className={"label--2"}>new business</p>
            <a href="mailto:biz@canvascreative.co">biz@canvascreative.co</a>
          </div>
          <div className={"mb-7"}>
            <p className={"label--2"}>careers</p>
            <a href="mailto:careers@canvascreative.co">
              careers@canvascreative.co
            </a>
          </div>
          <div className={"mb-14"}>
            <p className={"label--2"}>general</p>
            <a href="mailto:info@canvascreative.co">info@canvascreative.co</a>
          </div>

          <div className={"flex gap-4 md:absolute md:bottom-0 md:pb-8"}>
            <LinkCTA to={INSTAGRAM_URL}>Instagram</LinkCTA>
            <LinkCTA to={LINKEDIN_URL}>LinkedIn</LinkCTA>
            <LinkCTA to={TWITTER_URL}>Twitter</LinkCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
