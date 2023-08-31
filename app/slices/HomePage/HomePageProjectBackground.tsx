import { gsap } from "gsap";
import { Image } from "~/components/Image";
import { useLayoutEffect } from "~/hooks";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectHero, { setupBannerAnimation } from "~/components/ProjectHero";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import { useRef } from "react";
import HomePageTitleContainer from "~/slices/HomePage/HomePageProjectTitleContainer";

const openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
const closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

function HomePageBackgroundContainer({ data }: { data: HomePageProjectsData }) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      // const easing = easings.mask;
      const ease = "linear";

      const pinBackgroundContainer = () => {
        // Pin the background container for the whole scroll.
        const bgContainer = document.querySelector(
          "#HomePageBackground-container"
        );
        ScrollTrigger.create({
          pin: true,
          trigger: bgContainer,
          end: () => {
            const scrollContainer = document.querySelector(
              "#home-projects-container"
            )!;
            return `+=${scrollContainer.scrollHeight - window.innerHeight}`;
          },
        });
      };
      const animateClippingMasks = () => {
        const bgItems = document.querySelectorAll(".hero-project-bg-container");
        const scrollItems = document.querySelectorAll(
          ".HomePageProjectScrollItem"
        );

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
              scrub: 0.3,
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
      };

      // pinHeroes();
      pinBackgroundContainer();
      animateClippingMasks();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={container}
        id={"HomePageBackground-container"}
        className={"absolute left-0 top-0 h-screen w-full overflow-hidden"}
      >
        {data.map((project) => (
          <div
            key={`HomePageBackground-Item-${project.id}`}
            className={"HomePageBackground-Item absolute h-full w-full"}
          >
            <div className="hero-project-bg-container absolute flex h-full w-full items-end">
              <Image
                field={project.primary.background_image}
                className={"min-h-screen w-full object-cover"}
              />
            </div>

            {"data" in project.primary.project_data ? (
              <ProjectHero
                absolute={false}
                isClone={true}
                tableData={
                  project.primary.project_data?.data as ProjectHeroTableProps
                }
              />
            ) : null}
          </div>
        ))}
        <HomePageTitleContainer data={data} />
      </div>
    </>
  );
}

export default HomePageBackgroundContainer;
