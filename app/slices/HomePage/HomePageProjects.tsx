import clsx from "clsx";
import { useEffect, useRef } from "react";
import { asText } from "@prismicio/richtext";
import { useLayoutEffect } from "~/hooks";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

function HomePageProject({
  data,
}: {
  data: HomepageDocumentDataBodyHomepageProjectSlice;
}) {
  return (
    <div
      className={clsx(
        "border-2 border-red bg-blue-500/50",
        "HomePageProjects--project",
        "relative flex flex-col justify-between overflow-hidden"
      )}
    >
      <div className="grid-container">
        <div
          className={
            "col-span-4 flex items-end justify-between pt-5 md:col-span-3 md:pt-8"
          }
        >
          <h3 className={"heading--3 text-white"}>
            {asText(data.primary.title)} <br /> CASE STUDY
          </h3>
          <h3 className={"desktop-only heading--3 text-white"}>1 / 5</h3>
        </div>
      </div>

      <div className={"mobile-only col-span-4"}>
        <h3 className={"heading--3 text-center text-white"}>{`( ${asText(
          data.primary.cta
        )} )`}</h3>
      </div>

      <div className="grid-container bottom-0 overflow-hidden pb-28 md:absolute md:pb-0">
        <div className="col-span-5 mb-11 self-end md:mb-0 md:py-8">
          <h3 className={"heading--3 text-white"}>
            {asText(data.primary.capabilities)}
          </h3>
        </div>
      </div>

      <div className="desktop-only--grid grid-container">
        <div
          className={
            "HomePageProject--slider relative col-span-4 pb-[50vh] pt-[50vh] md:col-start-9"
          }
        >
          <p className={"body--2 mb-5 max-w-[500px] text-white"}>
            {asText(data.primary.description)}
          </p>
          {data.items.map(({ slide }, index) => (
            <div
              data-lag={0.1 * index}
              key={`ProjectImage-${slide.url}-${index}`}
              className={"mb-5 w-full"}
            >
              {slide.url ? (
                <img
                  src={slide.url}
                  alt={slide.alt || ""}
                  className={"h-full w-full object-contain"}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface HomePageProjectsProps {
  data: HomepageDocumentDataBodyHomepageProjectSlice[];
}

function HomePageProjects({ data }: HomePageProjectsProps) {
  const container = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   console.log("scrollHeight");
  //
  //   const ctx = gsap.context((self) => {
  //     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  //
  //     if (!self.selector) return;
  //
  //     const bgContainer = self.selector(".HomePageProjects--bgContainer");
  //
  //     const backgroundItems = self.selector(
  //       ".HomePageProjects--bgItem"
  //     ) as HTMLDivElement[];
  //
  //     const projectItems = self.selector(
  //       ".HomePageProjects--project"
  //     ) as HTMLDivElement[];
  //
  //     ScrollTrigger.create({
  //       trigger: bgContainer,
  //       pin: true,
  //     });
  //
  //     backgroundItems.forEach((bgItem) => {
  //       ScrollTrigger.create({
  //         trigger: bgItem,
  //         start: "top top",
  //         end: `+=200%`,
  //         pin: true,
  //         markers: true,
  //       });
  //     });
  //   }, container);
  //
  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={container} className={"relative"}>
      <div
        className={
          "HomePageProjects--bgContainer h-screen overflow-hidden border-2 border-red"
        }
      >
        {data.map((project, index) => (
          <div
            key={`HomePageProject-bg-${project.id}`}
            className={"HomePageProjects--bgItem h-screen"}
          >
            <img
              alt=""
              className={"h-full w-full object-cover"}
              src={project.primary.background_image.url || ""}
            />
          </div>
        ))}
      </div>

      {/*<div className={"HomePageProject--wrapper"}>
        {data.map((project, index) => (
          <HomePageProject data={project} key={`HomePageProject-${index}`} />
        ))}
      </div>*/}
    </div>
  );
}

export default HomePageProjects;
