import { useState } from "react";
import { Input, TextArea } from "~/components/Input";
import { PrimaryCTAButton } from "~/components/CTA";

interface Props {}

function ContactForm(props: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const isDisabled =
    !name || name !== "" || !email || email !== "" || !text || text !== "";

  return (
    <form>
      <Input
        value={name}
        // @ts-ignore
        onChange={(e) => setName(e.target.value)}
        label={"Full Name*"}
        type="text"
        id={"full-name"}
        containerClassName={"mb-5"}
      />
      <Input
        value={email}
        // @ts-ignore
        onChange={(e) => setEmail(e.target.value)}
        label={"Email*"}
        type="text"
        id={"email"}
        containerClassName={"mb-5"}
      />
      <TextArea
        value={text}
        // @ts-ignore
        onChange={(e) => setText(e.target.value)}
        label={"Project Detail*"}
        type="textarea"
        id={"project-detail"}
        placeholder={
          "Let’s start with a brief overview of what you’re looking for, budget range, and timeline."
        }
        containerClassName={"mb-10"}
      />
      <div className={"flex justify-end"}>
        <PrimaryCTAButton disabled={isDisabled} dark size={"lg"}>
          Send
        </PrimaryCTAButton>
      </div>
    </form>
  );
}

export default ContactForm;
