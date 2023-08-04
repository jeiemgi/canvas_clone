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
        type: "lines,words",
        linesClass: "overflow-hidden w-full",
      })
  );
}

function animateTextOnScroll(
  splits: SplitText,
  trigger: Element,
  isLast = false
) {
  const distance = 300;
  const ease = "slow.inOut";

  const show = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: `top ${distance}px`,
      end: `+=${distance}px`,
    },
  });
  show.to(splits.words, { y: "0%", ease });

  if (isLast) return;
  const hide = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: `bottom ${distance}px`,
      end: `+=${distance}px`,
    },
  });
  hide.to(splits.words, { y: "-100%", ease });
}

function addAnimationOnScroll(selector: string) {
  const scrollItems = document.querySelectorAll(".gsap-scroll--item");

  const items = document.querySelectorAll(selector);
  const splits = splitText(items);
  splits.forEach((splits, index, arr) => {
    if (index !== 0) gsap.set(splits.words, { y: "100%" });
    animateTextOnScroll(splits, scrollItems[index], index === arr.length - 1);
  });
}

function HomePageTitle({
  children,
  className = "",
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <h3 className={clsx(className, "heading--3 leading-none text-white")}>
      {children}
    </h3>
  );
}

function HomePageTitleContainer({
  data,
  container,
}: {
  data: HomePageProjectsData;
  container: HTMLElement | null;
}) {
  useLayoutEffect(() => {
    if (!container) {
      console.error("HomePageTitleContainer: NO CONTAINER", container);
      return;
    }

    const ctx = gsap.context((self) => {
      if (!self.selector) {
        console.error("HomePageTitleContainer: NO SELF", container);
        return;
      }

      // Pin the title container for the whole scroll.
      const titleContainer = self.selector(".gsap-title--container")[0];
      ScrollTrigger.create({
        trigger: container,
        pin: titleContainer,
        pinSpacing: false,
        end: () => {
          const _scroll = document.querySelector(".gsap-scroll--container")!;
          return `+=${_scroll.scrollHeight - window.innerHeight}`;
        },
        toggleClass: "active",
        invalidateOnRefresh: true,
      });

      addAnimationOnScroll(".gsap-title-item");
      addAnimationOnScroll(".gsap-index-item");
      addAnimationOnScroll(".gsap-subtitle-item");

      console.log("HomePageTitleContainer: initialized");
    }, container);

    return () => ctx.revert();
  }, [container]);

  return (
    <div
      className={
        "gsap-title--container desktop-only absolute inset-0 h-screen w-full"
      }
    >
      {/* TITLE AND INDEX */}
      <div className={"absolute left-[30px] top-[30px] h-[50px] w-[370px]"}>
        {data.map((project, index) => (
          <div
            key={`HomePageProject-title-${index}`}
            className={"absolute left-0 top-0"}
          >
            <HomePageTitle className={"gsap-title-item"}>
              {asText(project.primary.title)} <br />
              CASE STUDY
            </HomePageTitle>
          </div>
        ))}
      </div>

      <div className={"absolute left-[355px] top-[55px] h-[25px]"}>
        <div className={"mr-1 inline-block h-5 w-4"}>
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
        <HomePageTitle className={"gsap-index-fixed inline-block"}>
          / {data.length}
        </HomePageTitle>
      </div>

      {/* CAPABILITIES */}
      <div className={"absolute bottom-[30px] left-[30px] h-[25px] w-[500px]"}>
        {data.map((project, index) => (
          <h3
            key={`HomePageProject-capabilities-${index}`}
            className={
              "gsap-subtitle-item heading--3 absolute inset-0 leading-none text-white"
            }
          >
            {asText(project.primary.capabilities)}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default HomePageTitleContainer;
