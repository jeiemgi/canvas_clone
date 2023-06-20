import clsx from "clsx";
import { useRef } from "react";
import { asText } from "@prismicio/richtext";
import { useLayoutEffect } from "~/hooks";
import { gsap } from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";
import Cursor from "~/components/Cursor/Cursor";

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
        <div className={"col-span-4 pb-[50vh] pt-[50vh] md:col-start-9"}>
          <p
            data-lag={0.2}
            data-speed={"clamp(1.5)"}
            className={"body--2 mb-5 max-w-[500px] text-white"}
          >
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
                  data-speed={"auto"}
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

  useLayoutEffect(() => {
    const openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
    const closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.defaults({ ease: "expo.out" });

        if (!self.selector) return;

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
          gsap.set(bgItem, { clipPath: _index === 0 ? openPath : closedPath });
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

        const titleItems = self.selector(
          ".gsap-title--item"
        ) as HTMLDivElement[];
        const indexItems = self.selector(
          ".gsap-index--item"
        ) as HTMLDivElement[];
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
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Cursor cta={"( VIEW PROJECT )"}>
      <section ref={container} className={"relative"}>
        <div
          className={
            "gsap-bg--container overflow-hidden md:h-screen md:select-none"
          }
        >
          {data.map((project, index) => (
            <div
              key={`HomePageProject-bg-${project.id}`}
              className={clsx(
                "gsap-bg--item",
                "relative h-screen w-full overflow-hidden text-white md:fixed"
              )}
            >
              <img
                alt="Background"
                className={"absolute h-screen w-full object-cover md:relative"}
                src={project.primary.background_image.url || ""}
              />

              <div className="mobile-only--flex absolute h-full flex-col pb-28 pt-headerHeightMobile">
                <div className="grid-container h-fit w-full grow-0">
                  <div className="col-span-3">
                    <h3 className={"heading--3"}>
                      {asText(project.primary.title)}
                      <br />
                      CASE STUDY
                    </h3>
                  </div>

                  <div className="col-span-1 col-start-4">
                    <h3 className={"heading--3 text-right"}>
                      {`${index + 1} / ${data.length}`}
                    </h3>
                  </div>
                </div>

                <div className={"flex grow items-center justify-center"}>
                  <h3 className={"heading--3 text-center"}>
                    {`( ${asText(project.primary.cta)} )`}
                  </h3>
                </div>

                <div className="grid-container mobile-only--grid h-fit grow-0">
                  <div className="col-span-4">
                    <h3 className={"heading--3 mb-12"}>
                      {asText(project.primary.capabilities)}
                    </h3>
                    <p className={"body--2"}>
                      {asText(project.primary.description)}
                    </p>
                  </div>
                </div>
              </div>
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
            "desktop-only--grid grid-container pointer-events-none absolute left-0 top-8 h-[50px]"
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
      </section>
    </Cursor>
  );
}

export default HomePageProjects;
