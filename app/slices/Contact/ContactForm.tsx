import { Input, TextArea } from "~/components/Input";
import { PrimaryCTAButton } from "~/components/CTA";
import { ValidatedForm } from "remix-validated-form";
import { useFetcher } from "@remix-run/react";
import type { validator as ValidatorType } from "~/routes/_layout.contact";

function ContactForm({ validator }: { validator: typeof ValidatorType }) {
  const fetcher = useFetcher();

  return (
    <div className={"h-full"}>
      {fetcher.data?.ok ? (
        <h1 className={"body--1"}>
          Your message has been sent, thank you! <br />
          Someone from our team will be reaching out to you shortly.
        </h1>
      ) : (
        <ValidatedForm
          name="contact"
          method="POST"
          data-netlify="true"
          fetcher={fetcher}
          validator={validator}
          action={"/contact"}
        >
          <input type="hidden" name="form-name" value="contact" />
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
            <PrimaryCTAButton dark size={"lg"} type={"submit"}>
              Send
            </PrimaryCTAButton>
          </div>
        </ValidatedForm>
      )}
    </div>
  );
}

export default ContactForm;
