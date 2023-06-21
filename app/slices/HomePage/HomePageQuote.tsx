import React from "react";
import TextBlur from "~/components/TextBlur";

const innerGrid = "md:grid md:grid-cols-12 md:gap-x-[20px]";

function HomePageQuote() {
  return (
    <section
      className={
        "mx-auto max-w-[375px] overflow-hidden pb-16 pt-16 md:max-w-none md:pb-56 md:pt-64"
      }
    >
      <div className="max-container">
        <TextBlur className={"mb-28 md:mb-56"}>
          <span className={innerGrid}>
            <span className={"md:col-span-12"}>CANVAS IS AN </span>
            <span className={"md:col-span-10 md:col-start-3"}>
              INTERACTIVE <span className={"desktop-only--inline"}>DESIGN</span>
            </span>
            <span className={"md:hidden"}>DESIGN &</span>
            <span className={"md:col-span-10 md:col-start-3"}>
              DEVELOP<span className={"mobile-only--inline"}>-</span>
              <br className={"mobile-only--inline"} />
              <span>
                MENT <br className={"mobile-only--inline"} />
                <span className={"block text-right md:inline-block"}>
                  STUDIO.
                </span>
              </span>
            </span>
          </span>
          <br />
        </TextBlur>

        <TextBlur>
          <span className={innerGrid}>
            <span
              className={
                "block text-right md:col-span-4 md:col-start-5 md:inline-block"
              }
            >
              WE CREATE
            </span>
            <span className={"md:col-span-7"}>
              STRATEGY-
              <br className={"mobile-only"} />
              FOCUSED <br className={"mobile-only"} />
            </span>
            <br className={"desktop-only"} />
            <span className={"md:col-span-7"}>
              <span className={"block text-right md:inline-block"}>
                & DESIGN-
              </span>
              <span className={"block text-right md:inline-block"}>DRIVEN</span>
            </span>

            <span className={"md:col-span-8"}>
              DIGITAL <br className={"mobile-only--inline"} />
              EXPERIENCES.
            </span>
          </span>
        </TextBlur>
      </div>
    </section>
  );
}

export default HomePageQuote;
