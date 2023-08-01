import { Input, TextArea } from "~/components/Input";
import { PrimaryCTAButton } from "~/components/CTA";
import { ValidatedForm } from "remix-validated-form";
import { useFetcher } from "@remix-run/react";
import type { validator as ValidatorType } from "~/routes/_layout.contact";

function ContactForm({ validator }: { validator: typeof ValidatorType }) {
  const fetcher = useFetcher();

  return (
    <ValidatedForm
      data-netlify={true}
      fetcher={fetcher}
      validator={validator}
      method={"post"}
      action={"/contact"}
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
        <PrimaryCTAButton dark size={"lg"} type={"submit"}>
          Send
        </PrimaryCTAButton>
      </div>
    </ValidatedForm>
  );
}

export default ContactForm;
