import { CanvasLogomark } from "~/svg";

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

export default HomePageHeroFooter;
