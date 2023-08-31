import clsx from "clsx";
import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { ReactNode } from "react";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

function splitText(nodes: NodeListOf<Element> | Array<Element>) {
  return Array.from(nodes).map(
    (item) =>
      new SplitText(item, {
        type: "lines, words",
        linesClass: "overflow-hidden",
      })
  );
}

function animateTextOnScroll(
  splits: SplitText,
  trigger: Element,
  isLast = false
) {
  const distance = 400;
  const ease = "slow.inOut";
  const element = splits.words;

  const show = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: `top ${distance}px`,
      end: `+=${distance}px`,
    },
  });
  show.to(element, { y: "0%", ease });

  if (isLast) return;
  const hide = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: `bottom ${distance}px`,
      end: `+=${distance}px`,
    },
  });
  hide.to(element, { y: "-100%", ease });
}

function useAnimationOnScroll(selector: string) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollItems = document.querySelectorAll(
        ".HomePageProjectScrollItem"
      );
      const items = document.querySelectorAll(selector);
      const splits = splitText(items);

      splits.forEach((splits, index, arr) => {
        if (index !== 0) gsap.set(splits.words, { y: "100%" });
        animateTextOnScroll(
          splits,
          scrollItems[index],
          index === arr.length - 1
        );
      });
    });

    return () => ctx.revert();
  }, []);
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

function HomePageProjectTitleContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  useAnimationOnScroll(`.${HOMEPAGE_PROJECT_TITLE_ID}`);
  useAnimationOnScroll(`.${HOMEPAGE_PROJECT_SUBTITLE_ID}`);
  useAnimationOnScroll(".HomePageProject-index");

  return (
    <div
      className={
        "HomePageProjectTitleContainer desktop-only absolute inset-0 h-screen w-full"
      }
    >
      <div className={"absolute left-[30px] top-headerDesk"}>
        <div className={"relative mb-1 h-[25px] w-[500px]"}>
          {data.map((project, index) => (
            <div
              key={`HomePageProject-title-${index}`}
              className={"absolute left-0 top-0"}
            >
              <HomePageProjectTitle
                className={`${HOMEPAGE_PROJECT_TITLE_ID} whitespace-nowrap`}
              >
                <span>{asText(project.primary.title)}</span>
              </HomePageProjectTitle>
            </div>
          ))}
        </div>

        <div className={"relative mb-[30px] h-[25px] w-[500px]"}>
          {data.map((project, index) => (
            <div key={`subtitle-${index}`} className={"absolute left-0 top-0"}>
              <HomePageProjectTitle
                className={`${HOMEPAGE_PROJECT_SUBTITLE_ID}`}
              >
                <span>{asText(project.primary.capabilities)}</span>
              </HomePageProjectTitle>
            </div>
          ))}
        </div>

        <div className={"HomePageProject__labels"}>
          <HomePageProjectTitle className={"mr-10 inline-block"}>
            CASE STUDY
          </HomePageProjectTitle>
          <div className={"relative mr-1 inline-block h-[21px] w-[18px]"}>
            {data.map((item, index) => (
              <div
                key={`HomePageProject-index-${index}`}
                className={"absolute left-0 top-0"}
              >
                <HomePageProjectTitle className={"HomePageProject-index"}>
                  {index + 1}
                </HomePageProjectTitle>
              </div>
            ))}
          </div>
          <HomePageProjectTitle className={"inline-block"}>
            / {data.length}
          </HomePageProjectTitle>
        </div>
      </div>
    </div>
  );
}

export default HomePageProjectTitleContainer;
