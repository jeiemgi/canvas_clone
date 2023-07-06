import clsx from "clsx";
import { useRef } from "react";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import { gsap } from "gsap";
import { mdScreen } from "~/lib/gsapUtils";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import HomePageProjectItem from "~/slices/HomePage/HomePageProjectItem";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";
import { Link } from "@remix-run/react";

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

      mm.add(mdScreen, () => {
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
          pinSpacing: false,
          end: `+=${scrollContainer.scrollHeight}`,
          toggleClass: "active",
        });

        //------------------------------
        // Add scroll triggers for each title.

        const titleItems = self.selector(
          ".gsap-title--item"
        ) as HTMLDivElement[];
        const capabilitiesItems = self.selector(
          ".gsap-title--capabilities"
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

        titleItems.forEach((title, index) => {
          const scrollItem = scrollItems[index];
          const indexItem = indexItems[index];
          const capabilitiesItem = capabilitiesItems[index];

          const splitTitle = new SplitText(title, {
            type: "lines,words",
            linesClass: "overflow-hidden",
          });

          const splitCapabilities = new SplitText(capabilitiesItem, {
            type: "lines,words",
            linesClass: "overflow-hidden",
          });

          const textToAnimate = [
            ...splitTitle.words,
            ...splitCapabilities.words,
          ];

          gsap.set(textToAnimate, { y: "100%" });

          gsap.to(textToAnimate, {
            y: "0%",
            duration: 0.5,
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollItem,
              start: index === 0 ? "top 50%" : "top top",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(textToAnimate, {
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
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className={"relative"}>
      <div
        className={
          "gsap-bg--container pointer-events-none overflow-hidden md:h-screen md:select-none"
        }
      >
        {data.map((project, index) => (
          <div
            key={`HomePageProject-bg-${project.id}`}
            className={clsx(
              "gsap-bg--item",
              "relative h-screen w-full overflow-hidden bg-cover bg-top text-white md:fixed"
            )}
            style={{
              backgroundImage: `url(${
                project.primary.background_image.url || ""
              })`,
            }}
          >
            <div className="mobile-only--flex pt-headerHeightMobile absolute h-full flex-col pb-28">
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
          "desktop-only pointer-events-none absolute inset-0 h-screen w-full"
        )}
      >
        {/* TITLE AND INDEX */}
        <div
          className={
            "pointer-events-none absolute left-[30px] top-8 h-[50px] w-1/4"
          }
        >
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
              "heading--3 pointer-events-none absolute bottom-0 right-0 overflow-hidden pl-6 text-white"
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

        {/* CAPABILITIES */}
        <div className={"absolute bottom-8 left-[30px] h-[25px] w-1/4"}>
          {data.map((project, index) => (
            <h3
              key={`HomePageProject-capabilities-${index}`}
              className={
                "gsap-title--capabilities heading--3 absolute inset-0 text-white"
              }
            >
              {asText(project.primary.capabilities)}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePageProjects;
