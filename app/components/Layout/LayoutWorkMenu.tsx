import clsx from "clsx";
import { gsap } from "gsap";
import { useNavigate } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Image } from "~/components/Image";
import ProjectHero, { animateBanner } from "~/components/ProjectHero";
import LayoutWorkMenuItem from "~/components/Layout/LayoutWorkMenuItem";
import type { WorkmenuDocument } from "types.generated";
import type { KeyTextField } from "@prismicio/types";
import type { MouseEvent } from "react";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import easings from "~/lib/easings";

function LayoutWorkMenu({
  show,
  onClose,
  data,
}: {
  show: boolean;
  onClose: () => void;
  data: WorkmenuDocument;
}) {
  const navigate = useNavigate();
  const [locked, setLocked] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const itemsRefs = useRef<HTMLButtonElement[]>([]);
  const timelineOpen = useRef(
    gsap.timeline({
      defaults: {
        ease: "none",
      },
      paused: true,
    })
  );

  useEffect(() => {
    timelineOpen.current.to(
      [backdropRef.current, containerRef.current],
      {
        height: "100%",
        duration: 0.8,
        ease: easings.two,
      },
      0
    );

    timelineOpen.current.to(
      itemsRefs.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: easings.two,
      },
      0.2
    );
  }, []);

  useEffect(() => {
    const timescale = 1;
    const tl = timelineOpen.current;
    if (show) tl.timeScale(timescale).play();
    else if (!locked) tl.timeScale(timescale).reverse();
  }, [show, locked]);

  const onItemClick = (
    e: MouseEvent<HTMLButtonElement>,
    slug: string | KeyTextField,
    index: number
  ) => {
    const revert = () => {
      tl.reverse();
      flip?.reverse();
      setHoveredIndex(null);
      setLocked(false);
    };

    let flip: GSAPTimeline | undefined;
    setLocked(true);
    navigate(`/work/${slug}`);

    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
        revert();
      },
    });

    const duration = 1;
    const ease = "power4.inOut";

    function animateOtherItems() {
      // prettier-ignore
      const allItems = gsap.utils.toArray(".LayoutWorkMenuItem");
      tl.to(allItems, { opacity: 0, duration: 0.3 }, 0);
    }

    function animateBackground() {
      const background = document
        .querySelectorAll(".LayoutWorkMenu-Background")
        [index].querySelector("img");

      if (background) {
        tl.to(
          background,
          {
            ease,
            duration: duration,
            y: background ? background?.scrollHeight - window.innerHeight : 0,
          },
          0
        );
      }
    }

    function animateTitles() {
      if (e.target instanceof Element) {
        // prettier-ignore
        const hero = document.querySelectorAll(".LayoutWorkMenu-Hero")[index];
        // prettier-ignore
        const title = document.querySelectorAll(".LayoutWorkMenuItem__title")[index] as HTMLElement;

        flip = animateBanner(
          tl,
          {
            ease,
            duration,
            position: 0.2,
          },
          {
            title,
            scope: hero,
          }
        );
      }
    }

    animateOtherItems();
    animateBackground();
    animateTitles();
  };

  const onMouseEnter = (index: number) => {
    if (!locked) setHoveredIndex(index);
  };

  const onMouseLeave = () => {
    if (!locked) setHoveredIndex(null);
  };

  const setItemRef = useCallback((node: HTMLButtonElement | null) => {
    if (node) itemsRefs.current.push(node);
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "fixed left-0 top-0 h-0 w-full overflow-hidden",
        show ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        ref={backdropRef}
        className={
          "noise-background fixed inset-0 h-0 w-full origin-top bg-pure-black"
        }
      />
      <div className={"fixed inset-0 h-full w-full"}>
        {data.data.body.map((item, _idx) => {
          const hovered = hoveredIndex === _idx;

          return (
            <div
              key={`LayoutWorkMenuItem-background--${_idx}`}
              className={
                "LayoutWorkMenu-Background pointer-events-none absolute flex h-full w-full items-end"
              }
            >
              <Image
                className={clsx(
                  hovered ? "opacity-100" : "opacity-0 delay-100",
                  "absolute w-full items-start object-cover transition-opacity duration-500 ease-out"
                )}
                field={item.primary.background}
              />
            </div>
          );
        })}
        <div className={"LayoutWorkMenu-HeroContainer"}>
          {data.data.body.map((item, _idx) => {
            if ("data" in item.primary.project_page_data) {
              return (
                <ProjectHero
                  absolute
                  isClone={true}
                  className={"LayoutWorkMenu-Hero"}
                  key={`LayoutWorkMenu-Hero-${_idx}`}
                  tableData={
                    item.primary.project_page_data.data as ProjectHeroTableProps
                  }
                />
              );
            }
          })}
        </div>
        <div className="relative h-full w-full flex-col justify-end pt-40 md:flex md:items-end md:pb-[30px] md:pt-headerDesk">
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
                  hovered={hovered}
                  someIsHovered={someIsHovered}
                  item={item}
                  index={_idx}
                  length={arr.length}
                  onMouseLeave={onMouseLeave}
                  onMouseEnter={() => onMouseEnter(_idx)}
                  onClick={(e) => onItemClick(e, item.primary.link, _idx)}
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
