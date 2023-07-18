import React from "react";
import TextBlur from "~/components/TextBlur";

function Footer() {
  return (
    <footer
      className={
        "noise-background relative z-10 overflow-hidden bg-black text-white"
      }
    >
      <div className={"grid-container mb-10 md:mb-56 md:pt-11"}>
        <div className="col-span-4 py-20 md:order-last md:col-start-9 md:py-0">
          <h1 className={"heading--1 md:text-right"}>(Let’s Chat)</h1>
        </div>
        <div className="body--1 col-span-4 mr-10 md:col-span-6">
          If you are curious about some of our process or are interested in the
          details, we document much of what we do in Notion. We leave some of it
          public for those interested.
        </div>
      </div>

      <div className={"grid-container relative"}>
        <div className="col-span-2 flex flex-col justify-between border-l border-t border-white/20 pl-2.5 pt-3 md:h-[600px] md:pl-3">
          <div>
            <h3 className={"label--2 mb-24 md:mb-5"}>DOCUMENTATION</h3>
            <ul className={"body--3"}>
              <li className={"mb-5"}>Development</li>
              <li className={"mb-5"}>Design</li>
              <li className={"mb-5"}>Process</li>
            </ul>
          </div>

          <div className={"label--2 desktop-only mb-5"}>
            <ul>
              <li className={"mb-4"}>
                <a href={"#"}>PRIVACY POLICY</a>
              </li>
              <li className={"mb-4"}>
                <a href={"#"}>TERMS & CONDITIONS</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-between border-l border-t border-white/20 pl-2.5 pt-3 md:h-[600px] md:pl-3">
          <div>
            <h3 className={"label--2 mb-24 md:mb-5"}>SOCIAL</h3>
            <ul className={"body--3"}>
              <li className={"mb-5"}>Instagram</li>
              <li className={"mb-5"}>LinkedIn</li>
              <li className={"mb-5"}>Twitter</li>
            </ul>
          </div>

          <div className={"label--2 desktop-only mb-5"}>
            <ul>
              <li className={"mb-4"}>
                <a href={"#"}>©2023 Canvas LLC</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between border-l border-t border-white/20 pb-20 pl-3 pt-3 md:col-span-2 md:h-[600px] md:pb-0">
          <div>
            <h3 className={"label--2 mb-5"}>CONTACTS</h3>
            <ul className={"body--3"}>
              <li className={"mb-5"}>info@canvascreative.co</li>
              <li className={"mb-5"}>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          "grid-container select-none md:absolute md:bottom-4 md:mb-24"
        }
      >
        <div className="col-span-4 border-l border-l-white/20 md:col-span-5 md:border-0">
          <TextBlur>PROPERLY </TextBlur>
        </div>

        <div className="col-span-4 border-l border-l-white/20 md:col-start-9 md:border-0">
          <TextBlur>BALANCED</TextBlur>
        </div>

        <div className="col-span-4 border-l border-l-white/20 md:col-span-5 md:col-start-6 md:border-0">
          <TextBlur>
            FOR FEELING <span className={"desktop-only--inline"}>&</span>
          </TextBlur>
        </div>

        <div className="col-span-4 border-l border-l-white/20 pb-20 md:col-span-5 md:col-start-8 md:border-0 md:pb-0">
          <TextBlur>
            <span className={"mobile-only--inline"}>&</span> FUNCTION.
          </TextBlur>
        </div>
      </div>
      <div
        className={
          "grid-container mobile-only--grid select-none md:absolute md:bottom-4 "
        }
      >
        <div className={"col-span-2 border-l border-l-white/20 pl-2.5 md:pl-3"}>
          <ul className={"label--2"}>
            <li className={"mb-5"}>privacy policy</li>
            <li className={"mb-5"}>terms & Conditions</li>
          </ul>
        </div>

        <div className={"col-span-2 pl-2.5 md:pl-3"}>
          <ul className={"label--2"}>
            <li className={"mb-5"}>©2023 Canvas LLC</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
