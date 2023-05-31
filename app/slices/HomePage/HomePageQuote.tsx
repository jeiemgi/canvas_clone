import React from "react";
import TextBlur from "~/components/TextBlur";

const innerGrid = "grid grid-cols-4 md:grid-cols-12 md:gap-x-[20px]";

function HomePageQuote() {
  return (
    <section className={"overflow-hidden pb-16 pt-16 md:pb-56 md:pt-64"}>
      <div className="max-container">
        <TextBlur className={"mb-28 md:mb-56"}>
          <span className={innerGrid}>
            <span className={"col-span-4 md:col-span-12"}>CANVAS IS AN</span>
            <span className={"col-span-4 md:col-span-10 md:col-start-3"}>
              INTERACTIVE <span className={"desktop-only--auto"}>DESIGN</span>
            </span>
            <span className={"col-span-3 col-start-2 md:hidden"}>DESIGN &</span>
            <span className={"md:col-span-10 md:col-start-3"}>
              DEVELOP<span className={"mobile-only"}>-</span>
              MENT STUDIO.
            </span>
          </span>
          <br />
        </TextBlur>

        <TextBlur>
          <span>
            WE CREATE
            <br />
            STRATEGY-
            <br className={"mobile-only"} />
            FOCUSED <br className={"mobile-only"} />
            <br className={"desktop-only"} />& DESIGN-
            <br className={"mobile-only"} />
            DRIVEN <br />
            DIGITAL <br className={"mobile-only"} />
            EXPERIENCES.
          </span>
        </TextBlur>
      </div>
    </section>
  );
}

export default HomePageQuote;
