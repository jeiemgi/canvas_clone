import React from "react";
import TextBlur from "~/components/TextBlur";
import { LinkCTA, PrimaryCTALink } from "~/components/CTA";
import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "~/lib/constants";
import clsx from "clsx";

function Footer() {
  return (
    <footer
      className={clsx(
        "transition-transform",
        "noise-background relative z-10 overflow-hidden bg-black text-white"
      )}
    >
      <div className={"grid-container mb-10 md:mb-56 md:pt-11"}>
        <div className="col-span-4 py-20 md:order-last md:col-start-9 md:py-0">
          <h1 className={"heading--1 md:text-right"}>
            <PrimaryCTALink to={"contact"} dark size={"lg"}>
              Let's Chat
            </PrimaryCTALink>
          </h1>
        </div>
        <div className="body--1 col-span-4 mr-10 md:col-span-6">
          If you are curious about some of our process or are interested in the
          details, we document much of what we do in Notion. We leave some of it
          public for those interested.
        </div>
      </div>

      <div className={"grid-container relative"}>
        <div className="col-span-2 flex flex-col justify-between border-l border-t border-white/20 pl-2.5 pt-3 md:h-[700px] md:pl-3">
          <div>
            <h3 className={"label--2 mb-24 md:mb-10"}>DOCUMENTATION</h3>
            <ul className={"body--3"}>
              <li className={"mb-5"}>Development</li>
              <li className={"mb-5"}>Design</li>
              <li className={"mb-5"}>Process</li>
            </ul>
          </div>

          <div className={"label--2 desktop-only mb-5"}>
            <ul>
              <li className={"mb-4"}>
                <LinkCTA to={"#"}>PRIVACY POLICY</LinkCTA>
              </li>
              <li className={"mb-4"}>
                <LinkCTA to={"#"}>TERMS & CONDITIONS</LinkCTA>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-between border-l border-t border-white/20 pl-2.5 pt-3 md:h-[700px] md:pl-3">
          <div>
            <h3 className={"label--2 mb-24 md:mb-10"}>SOCIAL</h3>

            <ul className={"body--3"}>
              <li className={"mb-5"}>
                <LinkCTA to={INSTAGRAM_URL}>Instagram</LinkCTA>
              </li>
              <li className={"mb-5"}>
                <LinkCTA to={LINKEDIN_URL}>LinkedIn</LinkCTA>
              </li>
              <li className={"mb-5"}>
                <LinkCTA to={TWITTER_URL}>Twitter</LinkCTA>
              </li>
            </ul>
          </div>

          <div className={"label--2 desktop-only mb-5"}>
            <ul>
              <li className={"mb-4"}>©2023 Canvas LLC</li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between border-l border-t border-white/20 pb-20 pl-3 pt-3 md:col-span-2 md:h-[700px] md:pb-0">
          <div>
            <h3 className={"label--2 mb-5 md:mb-10"}>CONTACTS</h3>
            <ul className={"body--3"}>
              <li className={"mb-5"}>info@canvascreative.co</li>
              <li className={"mb-5"}>
                <LinkCTA className={"body--3"} to={"#"}>
                  Careers
                </LinkCTA>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          "grid-container pointer-events-none select-none md:absolute md:bottom-4 md:mb-24"
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
