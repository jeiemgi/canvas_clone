import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Flip from "gsap/dist/Flip";
import { Image } from "~/components/Image";
import { useLenis } from "@studio-freight/react-lenis";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import { useLockedBody } from "usehooks-ts";
import HeroCloneMarkup from "~/components/HeroCloneMarkup";
import type { KeyTextField } from "@prismicio/types";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import easings from "~/lib/easings";

type GSAPAnimationFunction = {
  tl?: GSAPTimeline;
  slug?: string;
  position: number;
  index?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
};

export const setupTable = () => {
  const tableLines = document.querySelectorAll(".hero-table-line");
  const tableItems = document.querySelectorAll(".hero-table-row__item");

  gsap.set(tableLines, { scaleX: 0 });
  gsap.set(tableItems, { y: "200%" });
};
export const animateTable = ({
  tl,
  position,
  duration,
  ease,
  stagger,
}: GSAPAnimationFunction) => {
  const tableLines = document.querySelectorAll(".hero-table-line");
  const tableItems = document.querySelectorAll(".hero-table-row__item");

  tl?.to(
    tableLines,
    {
      ease,
      duration,
      scaleX: 1,
    },
    position
  );

  tl?.to(
    tableItems,
    {
      ease,
      duration,
      stagger,
      y: "0%",
    },
    position
  );
};

const animateTitles = ({ index = 0, ease = "", duration = 0, slug = "" }) => {
  const titleItem = document.querySelectorAll(".title-item")[index];
  // prettier-ignore
  const cloneHeroTitle = document.querySelector(`#hero-clone-title-${slug}`);
  const titleState = Flip.getState(titleItem);
  cloneHeroTitle?.appendChild(titleItem);
  const _tl1 = Flip.from(titleState, { duration, ease });
  const titleText = titleItem.querySelector(".title-item__text")!;

  _tl1.to(
    titleText,
    {
      ease,
      duration: duration - 0.2,
      fontSize: "6.875rem",
      letterSpacing: "-0.1375rem",
      transformOrigin: "top left",
    },
    0
  );
  _tl1.set(titleText, { lineHeight: "105%" });

  const subtitleItem = document.querySelectorAll(".subtitle-item")[index];
  // prettier-ignore
  const cloneHeroSubtitle = document.querySelector(`#hero-clone-subtitle-${slug}`);
  const subtitleState = Flip.getState(subtitleItem);
  cloneHeroSubtitle?.appendChild(subtitleItem);
  const _tl2 = Flip.from(subtitleState, { duration, ease });

  const subtitleText = subtitleItem.querySelector(".subtitle-item__text")!;
  _tl2.to(
    subtitleText,
    {
      ease,
      duration,
      fontSize: "1.5rem",
      letterSpacing: "-0.015rem",
      transformOrigin: "top left",
    },
    0
  );
  _tl2.set(subtitleText, { lineHeight: "105%" }, 0);
};

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  const lenis = useLenis();
  const navigate = useNavigate();
  const [, setLocked] = useLockedBody(false);

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
      });

      setupTable();
    });

    return () => ctx.revert();
  }, []);

  const onClick = (target: EventTarget, index: number, slug: KeyTextField) => {
    setLocked(true);

    lenis.scrollTo(`#HomePageProjectItem-${slug}`, {
      offset: window.innerHeight * 0.2,
    });

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        navigate(`/work/${slug}`, { preventScrollReset: false });
      },
    });

    const ease = easings.mask;
    const stagger = 0.02;
    const duration = 1;
    const durationSm = 0.7;
    const position = 0;

    const content = document.querySelectorAll(".scroll-item__content")[index];
    const background = document
      .querySelectorAll(".hero-project-bg-container")
      [index].querySelector("img");
    const label = document.querySelector(".title-item__label")!;
    tl.to(label, { ease, duration: durationSm, y: "200%", autoAlpha: 0 }, 0);

    // Animate content
    tl.to(
      content,
      {
        ease,
        autoAlpha: 0,
        duration: durationSm,
      },
      0
    );

    // Animate background
    tl.to(
      background,
      {
        ease,
        duration: durationSm,
        y: background ? background?.scrollHeight - window.innerHeight : 0,
      },
      0
    );

    animateTable({
      tl,
      ease,
      stagger,
      duration,
      position,
    });

    animateTitles({ ease, duration, index, slug: slug || "" });
    tl.play();
  };

  return (
    <div id={"home-projects-container"}>
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
