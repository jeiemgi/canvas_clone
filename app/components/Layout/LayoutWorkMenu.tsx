import clsx from "clsx";
import { gsap } from "gsap";
import easings from "~/lib/easings";
import { useNavigate } from "react-router";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Image } from "~/components/Image";
import ProjectHero, { animateBanner } from "~/components/ProjectHero";
import LayoutWorkMenuItem from "~/components/Layout/LayoutWorkMenuItem";
import type { RefObject } from "react";
import type { WorkmenuDocument } from "types.generated";
import type { ImageField, KeyTextField } from "@prismicio/types";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";

const transition = (index: number, onCompleteCb: () => void) => {
  let reverseTitles: Function;

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: easings.one,
    },
    onComplete: () => {
      tl.pause(0);
      tl.clear();
      onCompleteCb();
      reverseTitles();
    },
  });

  function animateBackground() {
    // console.log("transition--animateBackground");
    const backgrounds = document.querySelectorAll(".LayoutWorkMenu-Background");
    const backgroundImage = backgrounds[index].querySelector("img");

    if (backgroundImage) {
      tl.to(backgroundImage, { y: 0 }, 0);
    }
  }

  function animateOtherItems() {
    // console.log("transition--animateOtherItems");
    // prettier-ignore
    const allItems = gsap.utils.toArray(".LayoutWorkMenuItem");
    tl.to(allItems, { opacity: 0, duration: 0.3 }, 0);
  }

  function animateTitles() {
    // console.log("transition--animateTitles");
    const hero = document.querySelector(".LayoutWorkMenu-Hero")!;
    const titles = document.querySelectorAll(".LayoutWorkMenuItem__title");
    const title = titles[index] as HTMLElement;

    return animateBanner(tl, {
      title,
      scope: hero,
      titlesVars: {
        delay: 0,
        duration: 1,
        ease: easings.one,
      },
      itemsVars: {
        duration: 1,
        position: 0.5,
        ease: easings.mask,
      },
    });
  }

  animateBackground();
  animateOtherItems();
  reverseTitles = animateTitles();
};

const getHeroData = (index: number, data: WorkmenuDocument) => {
  const reel_cover =
    // @ts-ignore
    data.data.body[index].primary.project_page_data?.data.reel_cover;
  const table = {
    // @ts-ignore
    roles: data.data.body[index].primary.project_page_data?.data.roles,
    // @ts-ignore
    links: data.data.body[index].primary.project_page_data?.data.links,
  };

  // console.log(reel_cover);
  return { table, reel_cover };
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
  // const [animating, setAnimating] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [itemData, setItemData] = useState<{
    reel_cover: ImageField;
    table: ProjectHeroTableProps;
  }>();

  const timelineOpen = useRef<GSAPTimeline>();
  const itemsRefs = useRef<HTMLButtonElement[]>([]);
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // console.log("USEFFECT - SETUP TABLE");
    timelineOpen.current = setupTimeline(containerRefs, itemsRefs);
  }, []);

  // OPEN AND CLOSES THE MENU
  useEffect(() => {
    const tl = timelineOpen.current;
    if (show) {
      tl?.play();
    } else if (!clicked) {
      tl?.reverse();
    } else {
      // console.log("CLOSE");
    }
  }, [show]);

  const onMouseEnter = (index: number) => {
    if (!clicked) {
      setHoveredIndex(index);
      const hoverData = getHeroData(index, data);
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
    const onComplete = async () => {
      // HARD CLOSING THE MODAL
      gsap.set(containerRef.current, { opacity: 0, pointerEvents: "none" });
      onClose();

      // --- CLEANUP AFTER WE CLOSE
      // DESTROY THE TIMELINE SO IT'S JUST REMOVED NOT ANIMATED
      timelineOpen.current?.pause(0);
      timelineOpen.current?.clear(true);
      timelineOpen.current = setupTimeline(containerRefs, itemsRefs);

      // KEEP THE BACKGROUND IN ITS POSITION
      // ------------------- CHECK IF NEEDED

      // const background = document
      //   .querySelectorAll(".LayoutWorkMenu-Background")
      //   [index].querySelector("img");

      // gsap.set(background, {
      //   y: background ? background?.scrollHeight - window.innerHeight : 0,
      // });

      setClicked(false);
      setHoveredIndex(null);

      setTimeout(() => {
        // RESET THE BACKGROUND SO WE CAN OPEN THIS AGAIN BUT IT WON'T BE VISIBLE
        gsap.set(containerRef.current, { opacity: 1, pointerEvents: "auto" });
      }, 500);
    };

    setClicked(true);
    navigate(`/work/${slug}`);
    transition(index, onComplete);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const images = document.querySelectorAll(".LayoutWorkMenu-Background>img");
    images.forEach((img) => {
      const imgPos = -(img.clientHeight - window.innerHeight);
      gsap.set(img, { y: imgPos });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx("fixed left-0 top-0 h-0 w-full", containerClassNames)}
    >
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
            video={{ poster: itemData?.reel_cover }}
            tableData={itemData?.table}
          >
            {data.data.body.map((item, _idx) => {
              const hovered = hoveredIndex === _idx;

              return (
                <div
                  key={`LayoutWorkMenu-BackgroundItem--${_idx}`}
                  className={
                    "LayoutWorkMenu-Background pointer-events-none absolute h-full w-full items-end"
                  }
                >
                  <Image
                    className={clsx(
                      "absolute w-full items-start object-cover",
                      clicked ? "" : "transition-opacity duration-500 ease-out",
                      hovered ? "opacity-100" : "opacity-0"
                    )}
                    field={item.primary.background}
                  />
                </div>
              );
            })}
          </ProjectHero>
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
