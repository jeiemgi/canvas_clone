import React from "react";
import { Input, TextArea } from "~/components/Input";
import { PrimaryCTALink } from "~/components/CTA";

interface Props {}

function ContactForm(props: Props) {
  return (
    <form>
      <Input
        label={"Full Name*"}
        type="text"
        id={"full-name"}
        containerClassName={"mb-5"}
      />
      <Input
        label={"Email*"}
        type="text"
        id={"email"}
        containerClassName={"mb-5"}
      />
      <TextArea
        label={"Project Detail*"}
        type="textarea"
        id={"project-detail"}
        placeholder={
          "Let’s start with a brief overview of what you’re looking for, budget range, and timeline."
        }
        containerClassName={"mb-10"}
      />
      <div className={"flex justify-end"}>
        <PrimaryCTALink dark to={"#"} size={"lg"}>
          Send
        </PrimaryCTALink>
      </div>
    </form>
  );
}

export default ContactForm;
