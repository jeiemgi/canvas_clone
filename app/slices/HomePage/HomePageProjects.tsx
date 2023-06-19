import clsx from "clsx";
import { useRef } from "react";
import { asText } from "@prismicio/richtext";
import { useLayoutEffect } from "~/hooks";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

interface HomePageProjectItemProps {
  className?: string;
  data: HomepageDocumentDataBodyHomepageProjectSlice;
}

function HomePageProjectItem({ className, data }: HomePageProjectItemProps) {
  return (
    <div
      className={clsx(
        className,
        "HomePageProjects--project",
        "relative flex flex-col justify-between overflow-hidden"
      )}
    >
      {/*<div className={"mobile-only col-span-4"}>*/}
      {/*  <h3 className={"heading--3 text-center text-white"}>*/}
      {/*    {`( ${asText(data.primary.cta)} )`}*/}
      {/*  </h3>*/}
      {/*</div>*/}

      {/*<div className="grid-container bottom-0 overflow-hidden pb-28 md:absolute md:pb-0">
        <div className="col-span-5 mb-11 self-end md:mb-0 md:py-8">
          <h3 className={"heading--3 text-white"}>
            {asText(data.primary.capabilities)}
          </h3>
        </div>
      </div>*/}
      <div className="desktop-only--grid grid-container">
        <div className={"col-span-4 pb-[50vh] pt-[25vh] md:col-start-9"}>
          <p data-lag={0.2} className={"body--2 mb-5 max-w-[500px] text-white"}>
            {asText(data.primary.description)}
          </p>
          {data.items.map(({ slide }, index) => (
            <div
              data-lag={0.2 * index}
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

const openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
const closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

function HomePageProjects({ data }: HomePageProjectsProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.defaults({ ease: "expo.inOut" });

      if (!self.selector) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

      //------------------------------
      // Pin the background container for the whole scroll.
      const bgContainer = self.selector(
        ".gsap-bg--container"
      )[0] as HTMLDivElement;
      const scrollContainer = self.selector(".gsap-scroll--container")[0];
      ScrollTrigger.create({
        trigger: container.current,
        pin: bgContainer,
        pinSpacing: false,
        end: `+=${scrollContainer.scrollHeight}`,
      });

      //------------------------------
      // Animate each bg clip path on scroll
      const bgItems = self.selector(".gsap-bg--item") as HTMLDivElement[];
      const scrollItems = self.selector(
        ".gsap-scroll--item"
      ) as HTMLDivElement[];

      bgItems.forEach((bgItem, _index) => {
        const scrollItem = scrollItems[_index];
        gsap.to(bgItem, {
          clipPath: openPath,
          immediateRender: false,
          ease: "linear",
          scrollTrigger: {
            trigger: scrollItem,
            start: "top bottom",
            end: "+=100%",
            scrub: true,
          },
        });
      });

      //------------------------------
      // Pin the title container for the whole scroll.
      const titleContainer = self.selector(".gsap-title--container")[0];
      ScrollTrigger.create({
        trigger: container.current,
        pin: titleContainer,
        end: `+=${scrollContainer.scrollHeight}`,
      });

      //------------------------------
      // Add scroll triggers for each title.

      const titleItems = self.selector(".gsap-title--item") as HTMLDivElement[];
      const indexItems = self.selector(".gsap-index--item") as HTMLDivElement[];
      const fixedIndexItem = self.selector(
        ".gsap-index--fixed"
      ) as HTMLDivElement[];
      const firstScrollItem = scrollItems[0];

      gsap.set([fixedIndexItem, ...indexItems], { y: "100%" });
      gsap.to(fixedIndexItem, {
        y: "0%",
        duration: 0.5,
        immediateRender: false,
        scrollTrigger: {
          trigger: firstScrollItem,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      titleItems.forEach((text, index) => {
        const scrollItem = scrollItems[index];
        const indexItem = indexItems[index];

        const splitText = new SplitText(text, {
          type: "lines,words",
          linesClass: "overflow-hidden",
        });

        if (splitText.words.length > 0) {
          gsap.set(splitText.words, { y: "100%" });
          gsap.to(splitText.words, {
            y: "0%",
            duration: 0.5,
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollItem,
              start: index === 0 ? "top 50%" : "top top",
              toggleActions: "play none none reverse",
            },
          });
          gsap.to(splitText.words, {
            y: "-100%",
            duration: 0.5,
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollItem,
              start: "bottom top",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(indexItem, {
            y: "0%",
            duration: 0.5,
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollItem,
              start: index === 0 ? "top 50%" : "top top",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(indexItem, {
            y: "-100%",
            duration: 0.5,
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollItem,
              start: "bottom top",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={"relative"}>
      <div className={"gsap-bg--container h-screen overflow-hidden"}>
        {data.map((project, index) => (
          <div
            key={`HomePageProject-bg-${project.id}`}
            className={clsx(
              "gsap-bg--item",
              "fixed h-screen w-full overflow-hidden"
            )}
            style={{
              clipPath: index === 0 ? openPath : closedPath,
            }}
          >
            <img
              alt="Background"
              className={"h-screen w-full object-cover"}
              src={project.primary.background_image.url || ""}
            />
          </div>
        ))}
      </div>

      <div className={"gsap-scroll--container"}>
        {data.map((project, index) => (
          <HomePageProjectItem
            data={project}
            className={"gsap-scroll--item"}
            key={`HomePageProjectItem-${index}`}
          />
        ))}
      </div>

      <div
        className={clsx(
          "gsap-title--container",
          "grid-container pointer-events-none absolute left-0 top-8 h-[50px]"
        )}
      >
        <div className={"relative md:col-span-3"}>
          {data.map((project, index) => (
            <h3
              key={`HomePageProject-title-${index}`}
              className={
                "gsap-title--item heading--3 absolute inset-0 text-white"
              }
            >
              {asText(project.primary.title)} <br />
              CASE STUDY
            </h3>
          ))}

          <h3
            className={
              "heading--3 absolute bottom-0 right-0 overflow-hidden pl-6 text-white"
            }
          >
            {data.map((item, index) => (
              <div
                key={`HomePageProject-index-${index}`}
                className={"gsap-index--item absolute inset-0 h-[50px]"}
              >
                {index + 1}
              </div>
            ))}
            <div className={"gsap-index--fixed inline-block"}>
              / {data.length}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomePageProjects;
