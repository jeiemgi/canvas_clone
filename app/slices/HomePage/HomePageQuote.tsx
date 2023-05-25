import React from "react";
import TextBlur from "~/components/TextBlur";

function HomePageQuote() {
  return (
    <div className={"pt-16 pb-16 md:pt-64 md:pb-56 overflow-hidden"}>
      <div className="grid-container">
        <div className={"col-span-4 md:col-span-5"}>
          <TextBlur>CANVAS IS AN</TextBlur>
        </div>
        <div className={"desktop-only col-span-8 md:col-start-2 md:mb-80"}>
          <TextBlur>INTERACTIVE DESIGN & DEVELOPMENT STUDIO.</TextBlur>
        </div>
        <div className={"desktop-only col-span-4 md:col-span-7"}>
          <TextBlur align={"right"}>WE CREATE</TextBlur>
          <TextBlur>
            strategy-focused & design-driven digital experiences.
          </TextBlur>
        </div>

        <div className={"mobile-only col-span-4"}>
          <TextBlur>INTERACTIVE</TextBlur>
          <TextBlur align={"right"}>DESIGN &</TextBlur>
          <TextBlur>
            DEVELOP-
            <br />
            MENT.
          </TextBlur>
          <div className={"mb-28"}>
            <TextBlur align={"right"}> STUDIO</TextBlur>
          </div>
          <TextBlur align={"right"}>WE CREATE</TextBlur>
          <TextBlur>
            strategy-
            <br /> focused
          </TextBlur>
          <TextBlur align={"right"}>
            & design- <br />
            driven
          </TextBlur>
          <TextBlur>digital experiences.</TextBlur>
        </div>
      </div>
    </div>
  );
}

export default HomePageQuote;
