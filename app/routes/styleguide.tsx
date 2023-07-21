import React from "react";
import PrimaryCTA from "~/components/CTA/PrimaryCTA";

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
      </div>
    </div>
  );
}

export default Styleguide;
