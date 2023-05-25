import { CanvasLogoGlow, CanvasLogomark } from "~/svg";
import heroSample from "public/img/sample/canvas-logo-hero-sample.png";
import React from "react";

function HomePageHeroImage() {
  return (
    <div className={"grid-container h-full items-center"}>
      <div
        className={"col-span-4 flex items-center justify-center md:col-start-5"}
      >
        <CanvasLogoGlow className={"w-[281px] md:w-[372px]"} />
      </div>

      {/* <div className={'hidden md:block md:col-span-5 md:col-start-5'}>
                <img className={'object-contain'} src={heroSample} alt=""/>
            </div>*/}
    </div>
  );
}

function HomePageHeroFooter() {
  return (
    <div className={"grid-container border-t border-t-white py-2"}>
      <div className={"col-span-4 md:col-span-5"}>
        <h2 className={"heading--2 text-white"}>DESIGN, MOTION,</h2>
        <h2 className={"heading--2 flex justify-between text-white md:block"}>
          &
          <div className="block md:inline-block md:w-24" />
          DEVELOPMENT STUDIO
        </h2>
      </div>
      <div className={"hidden md:col-start-6"}>
        <CanvasLogomark />
      </div>
      <div
        className={"col-span-4 hidden md:col-span-4 md:col-start-7 md:block"}
      >
        <h2 className={"heading--2 text-white"}>PROPERLY BALANCE</h2>
        <h2 className={"heading--2 text-white"}>
          FOR <div className="inline-block w-10" /> FEELING & FUNCTION
        </h2>
      </div>

      <div className={"md-block hidden md:col-span-2 md:flex md:justify-end"}>
        <h2 className={"heading--2 text-white"}>2012—2023</h2>
      </div>

      <div
        className={
          "col-span-4 flex justify-between md:col-span-2 md:flex md:hidden md:justify-end"
        }
      >
        <h2 className={"heading--2 text-white"}>2012—2023</h2>
        <h3 className={"heading--3 text-white"}>( scroll )</h3>
      </div>
    </div>
  );
}

function HomePageHero() {
  return (
    <section className={"relative flex h-screen w-full flex-col"}>
      <HomePageHeroImage />
      <HomePageHeroFooter />
    </section>
  );
}

export default HomePageHero;
