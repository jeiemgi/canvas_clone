import React from "react";
import TextBlur from "~/components/TextBlur";

function Footer(props) {
  return (
    <footer
      className={
        "footer-background relative bg-black text-white overflow-hidden"
      }
    >
      <div className={"grid-container pt-11 md:mb-56"}>
        <div className="col-span-6 body--1">
          If you are curious about some of our process or are interested in the
          details, we document much of what we do in Notion. We leave some of it
          public for those interested.
        </div>
      </div>

      <div className={"grid-container relative"}>
        <div className="col-span-2 border-opacity-20 border-white border-t border-l pl-3 pt-3 flex flex-col justify-between">
          <div>
            <h3 className={"label--2 mb-5"}>DOCUMENTATION</h3>
            <ul className={"body--3"}>
              <li>Development</li>
              <li>Design</li>
              <li>Process</li>
            </ul>
          </div>

          <div className={"label--2"}>
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
        <div className="h-[500px] col-span-2 border-opacity-20 border-white border-t border-l pl-3 pt-3 flex flex-col justify-between">
          <div>
            <h3 className={"label--2 mb-5"}>DOCUMENTATION</h3>
            <ul className={"body--3"}>
              <li>Development</li>
              <li>Design</li>
              <li>Process</li>
            </ul>
          </div>

          <div className={"label--2"}>
            <ul>
              <li className={"mb-4"}>
                <a href={"#"}>©2023 Canvas LLC</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[500px] col-span-2 border-opacity-20 border-white border-t border-l pl-3 pt-3 flex flex-col justify-between">
          <div>
            <h3 className={"label--2 mb-5"}>DOCUMENTATION</h3>
            <ul className={"body--3"}>
              <li>Development</li>
              <li>Design</li>
              <li>Process</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"select-none grid-container absolute bottom-4"}>
        <div className="col-span-4 md:col-span-5">
          <TextBlur>PROPERLY </TextBlur>
        </div>

        <div className="col-span-4 md:col-span-5 md:col-start-8">
          <TextBlur>BALANCED</TextBlur>
        </div>

        <div className="col-span-4 md:col-span-5 md:col-start-6">
          <TextBlur>FOR FEELING &</TextBlur>
        </div>

        <div className="col-span-4 md:col-span-5 md:col-start-6">
          <TextBlur>FUNCTION</TextBlur>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
