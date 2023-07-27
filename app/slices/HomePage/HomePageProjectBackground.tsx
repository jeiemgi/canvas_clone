import clsx from "clsx";
import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import { mdScreen } from "~/lib/gsapUtils";
import { asText } from "@prismicio/richtext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { RefObject } from "react";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

const openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
const closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

function HomePageBackgroundContainer({
  data,
  container,
}: {
  data: HomePageProjectsData;
  container: RefObject<HTMLDivElement>;
}) {
  useLayoutEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add(mdScreen, () => {
        if (!self.selector) {
          console.error("NO SELECTOR", self);
          return;
        }

        console.log("selector");

        // Pin the background container for the whole scroll.
        const scrollContainer = self.selector(".gsap-scroll--container")[0];
        const bgContainer = self.selector(".gsap-bg--container");
        ScrollTrigger.create({
          trigger: container.current,
          pin: bgContainer,
          pinSpacing: false,
          end: `+=${scrollContainer.scrollHeight}`,
        });

        console.log("scrollContainer", scrollContainer, bgContainer);

        // Animate each bg clip path on scroll
        const bgItems = self.selector(".gsap-bg--item") as HTMLDivElement[];
        const scrollItems = self.selector(
          ".gsap-scroll--item"
        ) as HTMLDivElement[];

        console.log("scrollContainer", bgItems, scrollItems);

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
      });
    }, container);

    return () => ctx.revert();
  }, [container]);

  return (
    <div
      className={
        "gsap-bg--container pointer-events-none overflow-hidden md:h-screen md:select-none"
      }
    >
      {data.map((project, index) => (
        <div
          key={`HomePageProject-bg-${project.id}`}
          className={clsx(
            "gsap-bg--item relative h-screen w-full overflow-hidden bg-cover bg-top text-white md:fixed"
          )}
          style={{
            backgroundImage: `url(${
              project.primary.background_image.url || ""
            })`,
          }}
        >
          <div className="mobile-only--flex pt-headerHeightMobile absolute h-full flex-col pb-28">
            <div className="grid-container h-fit w-full pt-5">
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
  );
}

export default HomePageBackgroundContainer;
