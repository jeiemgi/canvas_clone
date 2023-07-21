import PrimaryCTA from "~/components/CTA/PrimaryCTA";
import SecondaryCTA from "~/components/CTA/SecondaryCTA";
import LinkCTA from "~/components/CTA/LinkCTA";

function Styleguide() {
  return (
    <div className={"flex min-h-screen"}>
      <div
        className={"flex w-1/2 flex-col items-center justify-center bg-black"}
      >
        <div className={"my-2"}>
          <PrimaryCTA dark>{"CONTACT"}</PrimaryCTA>
        </div>
        <div className={"my-2"}>
          <PrimaryCTA size={"lg"} dark>
            {"CONTACT"}
          </PrimaryCTA>
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
          <PrimaryCTA>{"CONTACT"}</PrimaryCTA>
        </div>
        <div className={"my-2"}>
          <PrimaryCTA size={"lg"}>{"CONTACT"}</PrimaryCTA>
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
