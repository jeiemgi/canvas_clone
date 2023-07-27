import clsx from "clsx";
import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

function HomePageTitleContainer({
  data,
  container,
}: {
  data: HomePageProjectsData;
  container: HTMLElement | null;
}) {
  useLayoutEffect(() => {
    if (!container) return;

    const ctx = gsap.context((self) => {
      if (!self.selector) return;

      // Pin the title container for the whole scroll.
      const titleContainer = self.selector(".gsap-title--container")[0];
      const scrollContainer = self.selector(".gsap-scroll--container")[0];
      ScrollTrigger.create({
        trigger: container,
        pin: titleContainer,
        pinSpacing: false,
        end: `+=${scrollContainer.scrollHeight - window.innerHeight} `,
        toggleClass: "active",
      });

      //------------------------------
      // Add scroll triggers for each title.
      const scrollItems = self.selector(
        ".gsap-scroll--item"
      ) as HTMLDivElement[];
      const capabilitiesItems = self.selector(
        ".gsap-title--capabilities"
      ) as HTMLDivElement[];
      const titleItems = self.selector(".gsap-title--item") as HTMLDivElement[];
      const indexItems = self.selector(".gsap-index--item") as HTMLDivElement[];
      const fixedIndexItem = self.selector(
        ".gsap-index--fixed"
      ) as HTMLDivElement[];
      const firstScrollItem = scrollItems[0];

      const startTrigger = "top 50%";
      gsap.set([fixedIndexItem, ...indexItems], { y: "100%" });
      gsap.to(fixedIndexItem, {
        y: "0%",
        duration: 0.5,
        immediateRender: false,
        scrollTrigger: {
          trigger: firstScrollItem,
          start: startTrigger,
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

        const textToAnimate = [...splitTitle.words, ...splitCapabilities.words];

        gsap.set(textToAnimate, { y: "100%" });

        gsap.to(textToAnimate, {
          y: "0%",
          duration: 0.5,
          immediateRender: false,
          scrollTrigger: {
            trigger: scrollItem,
            start: index === 0 ? startTrigger : "top top",
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
            start: index === 0 ? startTrigger : "top top",
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
    }, container);

    return () => ctx.revert();
  }, [container]);

  return (
    <div
      className={
        "gsap-title--container desktop-only pointer-events-none absolute inset-0 h-screen w-full"
      }
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
      <div className={"absolute bottom-8 left-[30px] h-[25px] w-1/2"}>
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
  );
}

export default HomePageTitleContainer;
