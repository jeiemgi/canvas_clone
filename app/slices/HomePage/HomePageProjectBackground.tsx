import clsx from "clsx";
import { mdScreen } from "~/lib/gsapUtils";
import { asText } from "@prismicio/richtext";
import { useLayoutEffect } from "~/hooks";
import { Image } from "~/components/Image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import easings from "~/lib/easings";

const openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
const closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

function HomePageBackgroundContainer({ data }: { data: HomePageProjectsData }) {
  useLayoutEffect(() => {
    const container = document.querySelector("#home-projects-container");
    if (!container) return;

    const ctx = gsap.context((self) => {
      if (!self.selector) return;

      const mm = gsap.matchMedia();
      mm.add(mdScreen, () => {
        if (!self.selector) return;

        const easing = easings.mask;

        // Pin the background container for the whole scroll.
        const bgContainer = self.selector(".gsap-bg--container");
        ScrollTrigger.create({
          trigger: container,
          pin: bgContainer,
          pinSpacing: false,
          end: () => {
            const scrollContainer = document.querySelector(
              ".gsap-scroll--container"
            )!;

            return `clamp(+=${
              scrollContainer.scrollHeight - window.innerHeight
            })`;
          },
        });

        const bgItems = document.querySelectorAll(".gsap-bg--item");
        const scrollItems = document.querySelectorAll(".scroll-item");

        bgItems.forEach((bgItem, _index, arr) => {
          const isFirst = _index === 0;
          const isLast = _index === arr.length - 1;

          // Animate each bg clip path on scroll
          const scrollItem = scrollItems[_index];
          const image = bgItem.querySelector(".gsap-bg--item-img");

          gsap.set(image, { y: isFirst ? "0%" : "10%" });
          gsap.set(bgItem, { clipPath: isFirst ? openPath : closedPath });

          gsap.to(image, {
            y: "0%",
            immediateRender: false,
            ease: easing,
            scrollTrigger: {
              trigger: scrollItem,
              start: "top 85%",
              end: "+=100%",
              scrub: true,
            },
          });

          if (!isLast) {
            gsap.to(image, {
              y: "-10%",
              immediateRender: false,
              ease: easing,
              scrollTrigger: {
                trigger: scrollItem,
                start: "bottom 85%",
                end: "+=100%",
                scrub: true,
              },
            });
          }

          gsap.to(bgItem, {
            clipPath: openPath,
            immediateRender: false,
            ease: easing,
            scrollTrigger: {
              trigger: scrollItem,
              start: "top 85%",
              end: "+=100%",
              scrub: true,
            },
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={
        "gsap-bg--container pointer-events-none overflow-hidden md:absolute md:h-screen md:w-full"
      }
    >
      {data.map((project, index) => (
        <div
          key={`HomePageProject-bg-${project.id}`}
          className={clsx(
            "gsap-bg--item relative h-screen w-full overflow-hidden text-white md:absolute md:left-0 md:top-0"
          )}
        >
          <div className="absolute flex h-full w-full items-end">
            <Image
              field={project.primary.background_image}
              className={
                "gsap-bg--item-img min-h-full min-w-full select-none object-cover"
              }
            />
          </div>

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
