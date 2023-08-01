import { Fetcher, useFetcher } from "@remix-run/react";
import { Input, TextArea } from "~/components/Input";
import { PrimaryCTAButton } from "~/components/CTA";
import { ValidatedForm } from "remix-validated-form";
import type { Validator } from "remix-validated-form";
import clsx from "clsx";

type InputTypes = {
  fullName: string;
  email: string;
  message: string;
};

function ContactForm({
  fetcher,
  validator,
}: {
  fetcher: Fetcher;
  validator: Validator<InputTypes>;
}) {
  const submittedOk = fetcher.data?.ok || false;
  const isSubmitting = fetcher.state === "submitting";
  console.log(submittedOk);

  return (
    <div className={"relative"}>
      <div
        className={clsx(
          "absolute inset-0 transition",
          submittedOk
            ? "translate-y-0 opacity-100"
            : "translate-y-[5rem] opacity-0"
        )}
      >
        <h1 className={"body--1"}>
          Your message has been sent, thank you! <br />
          Someone from our team will be reaching out to you shortly.
        </h1>
      </div>
      <ValidatedForm
        className={clsx(
          "transition-opacity",
          isSubmitting
            ? "pointer-events-none opacity-30"
            : submittedOk
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100"
        )}
        method="post"
        fetcher={fetcher}
        validator={validator}
      >
        <Input
          type="text"
          name={"fullName"}
          label={"Full Name*"}
          containerClassName={"mb-5"}
        />
        <Input
          type="text"
          name={"email"}
          label={"Email*"}
          containerClassName={"mb-5"}
        />
        <TextArea
          name={"message"}
          label={"Project Detail*"}
          containerClassName={"mb-10"}
          placeholder={
            "Let’s start with a brief overview of what you’re looking for, budget range, and timeline."
          }
        />
        <div className={"flex justify-end"}>
          <PrimaryCTAButton
            dark
            disabled={fetcher.state === "submitting"}
            size={"lg"}
            type={"submit"}
          >
            {isSubmitting ? "Sending ..." : "Send"}
          </PrimaryCTAButton>
        </div>
      </ValidatedForm>
    </div>
  );
}

export default ContactForm;
