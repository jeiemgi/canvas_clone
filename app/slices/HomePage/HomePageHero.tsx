import { CanvasLogoGlow, CanvasLogomark } from "~/svg";
import HomePageQuote from "~/slices/HomePage/HomePageQuote";
import heroSample from "~/images/sample/canvas-logo-hero-sample.png";
import type { HomepageDocumentDataBodyHomepageHeroSlice } from "types.generated";

function HomePageHeroImage() {
  return (
    <div className={"grid-container h-full items-center"}>
      <div
        className={"mobile-only--flex col-span-4 items-center justify-center"}
      >
        <CanvasLogoGlow className={"w-[281px] md:w-[372px]"} />
      </div>

      <div
        className={"desktop-only--flex col-span-5 col-start-5 justify-center"}
      >
        <img className={"ml-[150px]"} src={heroSample} alt="" />
      </div>
    </div>
  );
}

function HomePageHeroFooter() {
  return (
    <div className={"grid-container pb-5"}>
      <div className="col-span-4 mb-2.5 border-t border-t-white/30 md:col-span-12"></div>
      <div className={"col-span-4 md:col-span-5"}>
        <h2 className={"heading--2 text-white"}>DESIGN, MOTION,</h2>
        <h2 className={"heading--2 flex justify-between text-white md:block"}>
          &
          <div className="block md:inline-block md:w-24" />
          DEVELOPMENT STUDIO
        </h2>
      </div>
      <div className={"hidden md:col-start-6 md:block"}>
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

      <div className={"desktop-only md:col-span-2 md:flex md:justify-end"}>
        <h2 className={"heading--2 text-white"}>2012—2023</h2>
      </div>

      <div
        className={
          "col-span-4 flex items-end justify-between md:col-span-2 md:hidden md:justify-end"
        }
      >
        <h2 className={"heading--2 text-white"}>2012—2023</h2>
        <h3 className={"heading--3 text-white"}>( scroll )</h3>
      </div>
    </div>
  );
}

interface Props {
  data?: HomepageDocumentDataBodyHomepageHeroSlice;
}

function HomePageHero(props: Props) {
  return (
    <section
      className={"texture-background w-full bg-black bg-cover bg-repeat-y"}
    >
      <div className={"relative flex h-screen w-full flex-col"}>
        <HomePageHeroImage />
        <HomePageHeroFooter />
      </div>
      <HomePageQuote />
    </section>
  );
}

export default HomePageHero;
