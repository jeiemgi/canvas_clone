import clsx from "clsx";
import {
  useIsSubmitting,
  ValidatedForm,
  useControlField,
} from "remix-validated-form";
import { Input, TextArea } from "~/components/Input";
import { PrimaryCTAButton } from "~/components/CTA";
import type { Validator } from "remix-validated-form";
import type { FetcherWithComponents } from "@remix-run/react";

type InputTypes = {
  fullName: string;
  email: string;
  message: string;
};

function ContactSubmitButton({
  submittedOk,
  isFilled,
}: {
  submittedOk: boolean;
  isFilled: boolean;
}) {
  const isSubmitting = useIsSubmitting("contact");
  return (
    <div className={"flex justify-end"}>
      {submittedOk ? (
        <h1 className={"heading--1"}>Sent</h1>
      ) : (
        <PrimaryCTAButton
          dark
          size={"lg"}
          type={"submit"}
          disabled={isSubmitting || !isFilled}
        >
          {isSubmitting ? "Sending" : "Send"}
        </PrimaryCTAButton>
      )}
    </div>
  );
}

function ContactForm({
  fetcher,
  validator,
}: {
  fetcher: FetcherWithComponents<{ ok: boolean }>;
  validator: Validator<InputTypes>;
}) {
  const submittedOk = fetcher.data?.ok || false;
  const isSubmitting = fetcher.state === "submitting";

  const [fullName, setFullName] = useControlField<string>(
    "fullName",
    "contactForm"
  );
  const [email, setEmail] = useControlField<string>("email", "contactForm");
  const [message, setMessage] = useControlField<string>(
    "message",
    "contactForm"
  );

  const isFilled = Boolean(fullName) && Boolean(email) && Boolean(message);

  return (
    <div className={"relative"}>
      <ValidatedForm
        method="post"
        fetcher={fetcher}
        validator={validator}
        id={"contactForm"}
      >
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
            value={fullName || ""}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            type="text"
            name={"email"}
            label={"Email*"}
            containerClassName={"mb-5"}
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextArea
            name={"message"}
            label={"Project Detail*"}
            containerClassName={"mb-10"}
            placeholder={
              "Let’s start with a brief overview of what you’re looking for, budget range, and timeline."
            }
            value={message || ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <ContactSubmitButton submittedOk={submittedOk} isFilled={isFilled} />
      </ValidatedForm>
    </div>
  );
}

export default ContactForm;
