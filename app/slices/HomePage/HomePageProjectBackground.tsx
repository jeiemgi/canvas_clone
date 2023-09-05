import { gsap } from "gsap";
import easings from "~/lib/easings";
import { mdScreen } from "~/lib/gsapUtils";
import { useEffect, useRef } from "react";
import { Image } from "~/components/Image";
import { useLayoutEffect } from "~/hooks";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectHero from "~/components/ProjectHero";
import HomePageTitleContainer from "~/slices/HomePage/HomePageProjectTitleContainer";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

const openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
const closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

function HomePageBackgroundContainer({
  data,
  clickedIndex,
}: {
  data: HomePageProjectsData;
  clickedIndex: number | null;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof clickedIndex === "number") {
      const bgItem = document.querySelectorAll(".hero-project-bg-container")[
        clickedIndex
      ];
      gsap.to(bgItem, {
        ease: easings.mask,
        clipPath: openPath,
      });
    }
  }, [clickedIndex]);

  useLayoutEffect(() => {
    const ease = easings.mask;

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
      const bgItems = document.querySelectorAll(".HomePageBackground-Image");
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

        const image = bgItem.querySelector(".HomePageBackground-Image>img");
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

    const mm = gsap.matchMedia();
    mm.add(mdScreen, () => {
      pinBackgroundContainer();
      animateClippingMasks();
    });

    return () => mm.revert();
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
            <div className="HomePageBackground-Image absolute flex h-full w-full items-end">
              <Image
                field={project.primary.background_image}
                className={"min-h-full w-full object-cover"}
              />
            </div>

            <ProjectHero
              isClone={true}
              absolute={false}
              // @ts-ignore
              tableData={project.primary.project_data?.data}
            />
          </div>
        ))}
        <HomePageTitleContainer data={data} />
      </div>
    </>
  );
}

export default HomePageBackgroundContainer;
