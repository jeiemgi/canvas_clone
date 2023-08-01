import { Input, TextArea } from "~/components/Input";
import { PrimaryCTAButton } from "~/components/CTA";
import { ValidatedForm } from "remix-validated-form";
import type { Validator } from "remix-validated-form";
import type { FetcherWithComponents } from "@remix-run/react";
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
  fetcher: FetcherWithComponents<{ ok: boolean }>;
  validator: Validator<InputTypes>;
}) {
  const submittedOk = fetcher.data?.ok || false;
  const isSubmitting = fetcher.state === "submitting";

  return (
    <div className={"relative"}>
      <ValidatedForm method="post" fetcher={fetcher} validator={validator}>
        <div
          className={clsx(
            "transition-opacity",
            isSubmitting || submittedOk
              ? "pointer-events-none select-none opacity-30"
              : "pointer-events-auto opacity-100"
          )}
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
        </div>
        <div className={"flex justify-end"}>
          {submittedOk ? (
            <h1 className={"heading--1"}>Sent</h1>
          ) : (
            <PrimaryCTAButton
              dark
              disabled={fetcher.state === "submitting"}
              size={"lg"}
              type={"submit"}
            >
              {isSubmitting ? "Sending" : "Send"}
            </PrimaryCTAButton>
          )}
        </div>
      </ValidatedForm>
    </div>
  );
}

export default ContactForm;
