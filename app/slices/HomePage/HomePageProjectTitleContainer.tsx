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
  }, [selector]);
}

interface HomePageTitleProps {
  children: ReactNode;
  className?: string;
}

const HomePageTitle = ({ children, className }: HomePageTitleProps) => {
  return (
    <h3 className={clsx(className, "heading--3 leading-none text-white")}>
      {children}
    </h3>
  );
};

function HomePageTitleContainer({ data }: { data: HomePageProjectsData }) {
  useLayoutEffect(() => {
    const container = document.querySelector("#home-projects-container");
    if (!container) return;

    const ctx = gsap.context((self) => {
      if (!self.selector) return;
      // Pin the title container for the whole scroll.
      const titleContainer = self.selector(
        ".home-projects-titles-container"
      )[0];

      ScrollTrigger.create({
        trigger: container,
        pin: titleContainer,
        pinSpacing: false,
        end: () => {
          const _scroll = document.querySelector("#home-projects-container")!;
          return `+=${_scroll.scrollHeight - window.innerHeight}`;
        },
        toggleClass: "active",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  useAnimationOnScroll(".title-item");
  useAnimationOnScroll(".subtitle-item");
  useAnimationOnScroll(".gsap-index-item");

  return (
    <div
      className={
        "home-projects-titles-container desktop-only absolute inset-0 h-screen w-full"
      }
    >
      <div className={"absolute left-[30px] top-headerDesk"}>
        <div className={"relative mb-1 h-[25px] w-[500px]"}>
          {data.map((project, index) => (
            <div key={`title-${index}`} className={"absolute left-0 top-0"}>
              <HomePageTitle className={"title-item whitespace-nowrap"}>
                <span className={"title-item__text"}>
                  {asText(project.primary.title)}
                </span>
              </HomePageTitle>
            </div>
          ))}
        </div>

        <div className={"relative mb-[30px] h-[25px] w-[500px]"}>
          {data.map((project, index) => (
            <div key={`subtitle-${index}`} className={"absolute left-0 top-0"}>
              <HomePageTitle className={"subtitle-item whitespace-nowrap"}>
                <span className={"subtitle-item__text"}>
                  {asText(project.primary.capabilities)}
                </span>
              </HomePageTitle>
            </div>
          ))}
        </div>

        <div className={"title-item__label"}>
          <HomePageTitle className={"mr-10 inline-block"}>
            CASE STUDY
          </HomePageTitle>
          <div className={"relative mr-1 inline-block h-5 w-4"}>
            {data.map((item, index) => (
              <div
                key={`HomePageProject-index-${index}`}
                className={"absolute left-0 top-0"}
              >
                <HomePageTitle className={"gsap-index-item"}>
                  {index + 1}
                </HomePageTitle>
              </div>
            ))}
          </div>
          <HomePageTitle className={"inline-block"}>
            / {data.length}
          </HomePageTitle>
        </div>
      </div>
    </div>
  );
}

export default HomePageTitleContainer;
