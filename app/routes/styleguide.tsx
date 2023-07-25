import LinkCTA from "~/components/CTA/LinkCTA";
import { PrimaryCTAButton, PrimaryCTALink } from "~/components/CTA/PrimaryCTA";
import { SecondaryCTA } from "~/components/CTA/SecondaryCTA";

function Styleguide() {
  return (
    <div className={"flex min-h-screen"}>
      <div
        className={"flex w-1/2 flex-col items-center justify-center bg-black"}
      >
        <div className={"my-2"}>
          <PrimaryCTAButton dark>{"CONTACT"}</PrimaryCTAButton>
          <PrimaryCTALink to={"#"} dark>
            {"CONTACT"}
          </PrimaryCTALink>
        </div>
        <div className={"my-2"}>
          <PrimaryCTALink to={"#"} size={"lg"} dark>
            {"CONTACT"}
          </PrimaryCTALink>
        </div>

        <div className="my-4">
          <SecondaryCTA>See Project Details</SecondaryCTA>
        </div>

        <div className="my-4">
          <LinkCTA to={"#"}>This is a link</LinkCTA>
        </div>
      </div>
      <div
        className={"flex w-1/2 flex-col items-center justify-center bg-white"}
      >
        <div className={"my-2"}>
          <PrimaryCTALink to={"#"}>{"CONTACT"}</PrimaryCTALink>
        </div>
        <div className={"my-2"}>
          <PrimaryCTALink to={"#"} size={"lg"}>
            {"CONTACT"}
          </PrimaryCTALink>
        </div>

        <div className="my-4">
          <SecondaryCTA border>See Project Details</SecondaryCTA>
        </div>

        <div className="my-4">
          <LinkCTA dark to={"#"}>
            This is a link
          </LinkCTA>
        </div>
      </div>
    </div>
  );
}

export default Styleguide;
