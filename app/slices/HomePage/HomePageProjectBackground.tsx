import { gsap } from "gsap";
import easings from "~/lib/easings";
import { mdScreen } from "~/lib/gsapUtils";
import { asText } from "@prismicio/richtext";
import { useLayoutEffect } from "~/hooks";
import { Image } from "~/components/Image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

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

        // const easing = easings.mask;
        const ease = "linear";

        // Pin the background container for the whole scroll.
        const bgContainer = self.selector("#HomePageBackground-container");
        ScrollTrigger.create({
          pin: true,
          trigger: bgContainer,
          pinSpacing: false,
          markers: true,
          end: () => {
            const scrollContainer = document.querySelector(
              "#home-projects-container"
            )!;
            return `+=${scrollContainer.scrollHeight - window.innerHeight}`;
          },
        });

        const bgItems = document.querySelectorAll(".hero-project-bg-container");
        const scrollItems = document.querySelectorAll(".scroll-item");

        bgItems.forEach((bgItem, _index, arr) => {
          const isFirst = _index === 0;
          const isLast = _index === arr.length - 1;
          const scrollItem = scrollItems[_index];

          // Animate each bg clip path on scroll
          gsap.set(bgItem, { clipPath: isFirst ? openPath : closedPath });
          gsap.to(bgItem, {
            ease,
            clipPath: openPath,
            scrollTrigger: {
              trigger: scrollItem,
              start: "top 85%",
              end: "+=100%",
              scrub: true,
            },
          });

          const image = bgItem.querySelector(".hero-project-bg-container>img");
          gsap.set(image, { y: isFirst ? "0%" : "10%" });
          gsap.to(image, {
            ease,
            y: "0%",
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollItem,
              start: "top 85%",
              end: "+=100%",
              scrub: true,
            },
          });

          if (!isLast) {
            gsap.to(image, {
              ease,
              y: "-10%",
              immediateRender: false,
              scrollTrigger: {
                trigger: scrollItem,
                start: "bottom 85%",
                end: "+=100%",
                scrub: true,
              },
            });
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id={"HomePageBackground-container"}
      className={
        "pointer-events-none overflow-hidden md:absolute md:left-0 md:top-0 md:h-screen md:w-full"
      }
    >
      {data.map((project, index) => (
        <div
          key={`HomePageBackground-item-${project.id}`}
          className={
            "relative h-screen w-full overflow-hidden text-white md:absolute md:left-0 md:top-0"
          }
        >
          <div className="hero-project-bg-container absolute flex h-screen w-full items-end">
            <Image
              field={project.primary.background_image}
              className={"min-h-full min-w-full select-none object-cover"}
            />
          </div>

          {/*MOBILE ONLY TITLES*/}
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
