import clsx from "clsx";
import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import SplitText from "gsap/dist/SplitText";
import type { ReactNode } from "react";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import { mdScreen } from "~/lib/gsapUtils";

function splitText(nodes: NodeListOf<Element> | Array<Element>) {
  return Array.from(nodes).map(
    (item) =>
      new SplitText(item, {
        type: "lines",
      })
  );
}

function animateTextOnScroll(item: Element, trigger: Element, isLast = false) {
  const element = item;
  const distance = 400;
  const ease = "slow.inOut";

  const show = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: `top ${distance}px`,
      end: `+=${distance}px`,
    },
  });
  show.to(element, { y: 0, ease });

  if (isLast) return;
  const hide = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: `bottom ${distance}px`,
      end: `+=${distance}px`,
    },
  });
  hide.to(element, { y: -25, ease });
}

interface HomePageProjectTitleProps {
  children: ReactNode;
  className?: string;
}

const HomePageProjectTitle = ({
  children,
  className,
}: HomePageProjectTitleProps) => {
  return (
    <h3 className={clsx(className, "heading--3 leading-none text-white")}>
      {children}
    </h3>
  );
};

export const HOMEPAGE_PROJECT_TITLE_ID = "HomePageProject-title";
export const HOMEPAGE_PROJECT_SUBTITLE_ID = "HomePageProject-subtitle";
export const HOMEPAGE_PROJECT_INDEX = "HomePageProject-index";

function HomePageProjectTitleContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  useLayoutEffect(() => {
    function addAnimationOnScroll() {
      const selectors = [
        `.${HOMEPAGE_PROJECT_TITLE_ID}`,
        `.${HOMEPAGE_PROJECT_SUBTITLE_ID}`,
        `.${HOMEPAGE_PROJECT_INDEX}`,
      ];

      selectors.forEach((selector: string) => {
        const scrollItems = document.querySelectorAll(
          ".HomePageProjectScrollItem"
        );
        const items = document.querySelectorAll(selector);

        items.forEach((item, index, arr) => {
          if (index !== 0) gsap.set(item, { y: "100%" });
          animateTextOnScroll(
            item,
            scrollItems[index],
            index === arr.length - 1
          );
        });
      });
    }

    const mm = gsap.matchMedia();

    mm.add(mdScreen, () => {
      addAnimationOnScroll();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      className={
        "HomePageProjectTitleContainer desktop-only absolute inset-0 h-screen w-full"
      }
    >
      <div className={"absolute left-[30px] top-headerDesk"}>
        <div className={"relative mb-1 h-[25px] w-[500px] overflow-hidden"}>
          {data.map((project, index) => (
            <div
              key={`HomePageProject-title-${index}`}
              className={"absolute left-0 top-0"}
            >
              <h1
                style={{
                  height: "25px",
                  willChange: "transform",
                  transform: "scale(0.218)",
                  transformOrigin: "top left",
                }}
                className={`${HOMEPAGE_PROJECT_TITLE_ID}  display--1 whitespace-nowrap text-white`}
              >
                {asText(project.primary.title)}
              </h1>
            </div>
          ))}
        </div>

        <div
          className={"relative mb-[30px] h-[25px] w-[500px] overflow-hidden"}
        >
          {data.map((project, index) => (
            <div
              key={`HomePageProject-subtitle-${index}`}
              className={"absolute left-0 top-0"}
            >
              <h3
                style={{
                  height: "25px",
                  willChange: "transform",
                  transformOrigin: "top left",
                }}
                className={clsx(
                  HOMEPAGE_PROJECT_SUBTITLE_ID,
                  "heading--3 text-white"
                )}
              >
                {asText(project.primary.capabilities)}
              </h3>
            </div>
          ))}
        </div>

        <div className={"HomePageProject__labels flex items-start text-white"}>
          <h3 className={"heading--3 mr-2 inline-block h-[25px]"}>
            CASE STUDY
          </h3>

          <div
            className={
              "relative mr-1 inline-block h-[25px] w-[18px]  overflow-hidden"
            }
          >
            {data.map((item, index) => (
              <div
                key={`HomePageProject-index-${index}`}
                className={"absolute left-0 top-0"}
              >
                <h3
                  style={{
                    height: "25px",
                    willChange: "transform",
                    transformOrigin: "top left",
                  }}
                  className={clsx(HOMEPAGE_PROJECT_INDEX, "heading--3")}
                >
                  {index + 1}
                </h3>
              </div>
            ))}
          </div>

          <div className={"relative mr-1 inline-block h-[25px]"}>
            <h3 className={"heading--3 h-[25px]"}> / {data.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageProjectTitleContainer;
