import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Flip from "gsap/dist/Flip";
import easings from "~/lib/easings";
import { Image } from "~/components/Image";
import { useLenis } from "@studio-freight/react-lenis";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import { useLockedBody } from "usehooks-ts";
import HeroCloneMarkup from "~/components/HeroCloneMarkup";
import type { KeyTextField } from "@prismicio/types";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import { useRef } from "react";

export const animateTable = (tl: GSAPTimeline, position: number) => {
  const tableItems = document.querySelectorAll(".hero-table-row__item");
  const tableLines = document.querySelectorAll(".hero-table-line");

  const duration = 0.6;
  const ease = easings.mask;
  const stagger = 0.02;

  tl.fromTo(
    tableLines,
    {
      scaleX: 0,
    },
    {
      scaleX: 1,
      duration,
      ease,
    },
    position
  );

  tl.fromTo(
    tableItems,
    {
      y: "200%",
    },
    {
      ease,
      duration,
      y: "0%",
      stagger,
    },
    position + 0.2
  );
};

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  const lenis = useLenis();
  const navigate = useNavigate();
  const [, setLocked] = useLockedBody(false);
  const tl = useRef(gsap.timeline({ paused: true }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".scroll-item");

      items.forEach((item, index) => {
        const clone = item.querySelector(".hero-clone");
        const content = item.querySelector(".scroll-item__content");

        if (clone && content) {
          const contentHeight = content.scrollHeight - window.innerHeight || 0;
          ScrollTrigger.create({
            trigger: clone,
            pin: true,
            start: "top top",
            end: () => `+=${contentHeight}px`,
          });
        }

        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          toggleClass: "scroll-item--active",
        });

        animateTable(tl.current, 0);
      });
    });

    return () => ctx.revert();
  }, []);

  const onClick = (target: EventTarget, index: number, slug: KeyTextField) => {
    lenis.scrollTo(`#HomePageProjectItem-${slug}`, {
      offset: window.innerHeight * 0.2,
    });

    setLocked(true);
    const duration = 1;
    const ease = easings.mask;
    const tl = gsap.timeline({
      autoRemoveChildren: true,
      onComplete: () => {
        navigate(`/work/${slug}`, { preventScrollReset: false });
      },
    });

    animateTable(tl, 0);
    const titleItem = document.querySelectorAll(".title-item")[index];
    const name = titleItem.querySelector(".title-item__text")!;
    const cloneHeroTitle = document.querySelector(`#hero-clone-title-${slug}`);
    // Get the state
    const titleState = Flip.getState(titleItem);
    // Re-parent the container
    cloneHeroTitle?.appendChild(titleItem);

    const titleTl = Flip.from(titleState, { duration, ease });

    titleTl.to(
      name,
      {
        ease,
        duration,
        fontSize: "6.875rem",
        letterSpacing: "-0.1375rem",
        transformOrigin: "top left",
        onComplete: () => {
          gsap.set(name, { lineHeight: "105%" });
        },
      },
      0
    );
    titleTl.to(name, { lineHeight: "105%", duration: 0.4 }, 0);

    const label = document.querySelector(".title-item__label")!;
    console.log(label);
    titleTl.to(label, { autoAlpha: 0, absolute: true, duration: 0.4, ease }, 0);

    const subtitleItem = document.querySelectorAll(".subtitle-item")[index];
    const subtitleText = subtitleItem.querySelector(".subtitle-item__text")!;
    const cloneHeroSubtitle = document.querySelector(
      `#hero-clone-subtitle-${slug}`
    );

    const subtitleState = Flip.getState(subtitleItem);
    cloneHeroSubtitle?.appendChild(subtitleItem);
    const subtitleTl = Flip.from(subtitleState, {
      duration,
      ease,
    });

    subtitleTl.to(
      subtitleText,
      {
        ease,
        duration,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
        onComplete: () => {
          gsap.set(subtitleText, { lineHeight: "105%" });
        },
      },
      0
    );

    const content = document.querySelectorAll(".scroll-item__content")[index];
    const background = document
      .querySelectorAll(".gsap-bg--item")
      [index].querySelector("img");

    tl.to(
      content,
      {
        duration: 0.4,
        autoAlpha: 0,
      },
      0
    );

    tl.to(
      background,
      {
        ease,
        duration,
        y: background ? background?.scrollHeight - window.innerHeight : 0,
      },
      0
    );
  };

  return (
    <div className={"gsap-scroll--container"}>
      {data.map((project, index) => (
        <div
          key={`HomePageProjectItem-${index}`}
          onClick={(e) => onClick(e.target, index, project.primary.slug)}
          className={
            "scroll-item relative flex cursor-pointer flex-col justify-between"
          }
        >
          <HeroCloneMarkup
            titleId={`hero-clone-title-${project.primary.slug}`}
            subtitleId={`hero-clone-subtitle-${project.primary.slug}`}
            // @ts-ignore
            tableData={project.primary.project_data?.data}
          />

          <div className="desktop-only--grid grid-container">
            <div
              className={
                "scroll-item__content col-span-4 pb-[20vh] pt-[50vh] md:col-start-9"
              }
            >
              <div id={`HomePageProjectItem-${project.primary.slug}`} />
              <p className={"body--2 mb-5 max-w-[500px] text-white"}>
                {asText(project.primary.description)}
              </p>
              {project.items.map(({ slide }, index) => (
                <div
                  data-lag={0.05 * index}
                  className={"mb-5 overflow-hidden"}
                  key={`ProjectImage-${slide.url}-${index}`}
                >
                  <Image
                    field={slide}
                    data-speed={0.95}
                    className={"w-full object-contain"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePageProjectScrollContainer;
