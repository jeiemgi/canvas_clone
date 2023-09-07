import clsx from "clsx";
import { gsap } from "gsap";
import { useNavigate } from "react-router";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { Image } from "~/components/Image";
import ProjectHero, { animateBanner } from "~/components/ProjectHero";
import LayoutWorkMenuItem from "~/components/Layout/LayoutWorkMenuItem";
import type { WorkmenuDocument } from "types.generated";
import type { KeyTextField } from "@prismicio/types";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import easings from "~/lib/easings";

const transition = (index: number, onCompleteCb: () => void) => {
  let reverseTitles: Function;

  const tlVars: GSAPTimelineVars = {
    duration: 1,
    ease: "power4.inOut",
  };

  const tl = gsap.timeline({
    defaults: tlVars,
    onComplete: () => {
      tl.pause(0);
      tl.clear();
      onCompleteCb();
      reverseTitles();
    },
  });

  function animateBackground() {
    console.log("transition--animateBackground");
    const backgrounds = document.querySelectorAll(".LayoutWorkMenu-Background");
    const backgroundImage = backgrounds[index].querySelector("img");
    if (backgroundImage) {
      const posY = backgroundImage.scrollHeight - window.innerHeight;
      tl.to(backgroundImage, { y: posY }, 0);
    }
  }

  function animateOtherItems() {
    console.log("transition--animateOtherItems");
    // prettier-ignore
    const allItems = gsap.utils.toArray(".LayoutWorkMenuItem");
    tl.to(allItems, { opacity: 0, duration: 0.3 }, 0);
  }

  function animateTitles() {
    console.log("transition--animateTitles");
    // prettier-ignore
    const title = document.querySelectorAll(".LayoutWorkMenuItem__title")[index] as HTMLElement;
    const hero = document.querySelector(".LayoutWorkMenu-Hero")!;

    return animateBanner(
      tl,
      {
        ...tlVars,
        position: 0.2,
      },
      {
        title,
        scope: hero,
      }
    );
  }

  animateBackground();
  animateOtherItems();
  reverseTitles = animateTitles();
};

const getTableData = (index: number, data: WorkmenuDocument) => {
  // @ts-ignore
  // prettier-ignore
  return data.data.body[index].primary.project_page_data?.data as ProjectHeroTableProps;
};

const setupTimeline = (
  containers: RefObject<GSAPTweenTarget>,
  items: RefObject<GSAPTweenTarget>
) => {
  const tl = gsap.timeline({ paused: true, yoyo: true });
  tl.set("#LayoutWorkMenu-HeroContainer", { opacity: 1 });
  tl.to(
    containers.current,
    {
      height: "100%",
      duration: 0.8,
      ease: easings.two,
    },
    0
  );
  tl.to(
    items.current,
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: easings.two,
    },
    0.2
  );

  return tl;
};

function LayoutWorkMenu({
  show,
  data,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
  data: WorkmenuDocument;
}) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [itemData, setItemData] = useState<ProjectHeroTableProps>();

  const timelineOpen = useRef<GSAPTimeline>();
  const itemsRefs = useRef<HTMLButtonElement[]>([]);
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    timelineOpen.current = setupTimeline(containerRefs, itemsRefs);
  }, []);

  // OPEN AND CLOSES THE MENU
  useEffect(() => {
    const tl = timelineOpen.current;
    if (show) tl?.play();
    else if (!clicked) tl?.reverse();
    else console.log("CLOSE");
  }, [show]);

  const onMouseEnter = (index: number) => {
    if (!clicked) {
      setHoveredIndex(index);
      const hoverData = getTableData(index, data);
      setItemData(hoverData);
    }
  };

  const onMouseLeave = () => {
    if (!clicked) setHoveredIndex(null);
  };

  const setItemRef = useCallback((node: HTMLButtonElement | null) => {
    if (node) itemsRefs.current.push(node);
  }, []);

  const setContainerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) containerRefs.current.push(node);
  }, []);

  const containerClassNames = show
    ? "pointer-events-auto"
    : "pointer-events-none";

  const onItemClick = (index: number, slug: string | KeyTextField) => {
    const background = document
      .querySelectorAll(".LayoutWorkMenu-Background")
      [index].querySelector("img");

    const resetBackground = () => {
      gsap.set(background, { y: 0 });
    };

    const hardClose = () => {
      // HARD CLOSE
      console.log("hardClose");

      // DESTROY THE TIMELINE SO IT'S JUST REMOVED NOT ANIMATED
      timelineOpen.current?.pause(0);
      timelineOpen.current?.clear(true);
      timelineOpen.current = setupTimeline(containerRefs, itemsRefs);

      // KEEP THE BACKGROUND IN ITS POSITION
      gsap.set(background, {
        y: background ? background?.scrollHeight - window.innerHeight : 0,
      });
      // ACTUALLY CLOSE THE MODAL
      onClose();
    };

    const onComplete = () => {
      console.log("onComplete");
      hardClose();
      // AFTER WE CLOSE
      setClicked(false);
      setHoveredIndex(null);
      // resetBackground();
    };

    setClicked(true);
    navigate(`/work/${slug}`);
    transition(index, onComplete);
  };

  console.log("render");

  return (
    <div className={clsx("fixed left-0 top-0 h-0 w-full", containerClassNames)}>
      {/*Background*/}
      <div
        id={"LayoutWorkMenu-BackDrop"}
        ref={(node) => setContainerRef(node)}
        className={clsx(
          "fixed inset-0 h-0 w-full origin-top",
          clicked ? "" : "noise-background bg-pure-black",
          containerClassNames
        )}
      />

      <div
        id={"LayoutWorkMenu-Background-Container"}
        className={clsx("fixed inset-0 h-full w-full", containerClassNames)}
      >
        {data.data.body.map((item, _idx) => {
          const hovered = hoveredIndex === _idx;

          return (
            <div
              key={`LayoutWorkMenu-BackgroundItem--${_idx}`}
              className={
                "LayoutWorkMenu-Background pointer-events-none absolute flex h-full w-full items-end"
              }
            >
              <Image
                className={clsx(
                  "absolute w-full items-start object-cover",
                  clicked ? "" : "transition-opacity duration-500 ease-out",
                  hovered ? "opacity-100" : "opacity-0 delay-100"
                )}
                field={item.primary.background}
              />
            </div>
          );
        })}

        <div
          id={"LayoutWorkMenu-HeroContainer"}
          className={clsx(
            show ? "opacity-100" : "opacity-0",
            containerClassNames
          )}
        >
          <ProjectHero
            absolute
            isClone={true}
            className={"LayoutWorkMenu-Hero"}
            tableData={itemData}
          />
        </div>

        <div
          id={"LayoutWorkMenu-ItemsContainer"}
          className="fixed h-full w-full flex-col justify-end pt-40 md:flex md:items-end md:pb-[30px] md:pt-headerDesk"
        >
          {data.data.body.map((item, _idx, arr) => {
            const hovered = hoveredIndex === _idx;
            const someIsHovered = hoveredIndex !== null;

            return (
              <div
                key={`LayoutWorkMenuItem-${item.primary.link}-${_idx}`}
                className={"mb-5 last:mb-0"}
              >
                <LayoutWorkMenuItem
                  ref={setItemRef}
                  item={item}
                  index={_idx}
                  length={arr.length}
                  hovered={hovered}
                  someIsHovered={someIsHovered}
                  onMouseLeave={onMouseLeave}
                  onMouseEnter={() => onMouseEnter(_idx)}
                  onClick={() => onItemClick(_idx, item.primary.link)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LayoutWorkMenu;
