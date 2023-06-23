import React from "react";
import { Input, TextArea } from "~/components/Input";

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
        <button className={"heading--1"} type={"submit"}>
          ( Send )
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
