import clsx from "clsx";
import { gsap } from "gsap";
import easings from "~/lib/easings";
import ProjectHero, { animateBanner } from "~/components/ProjectHero";
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { useNavigate } from "react-router";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import { Dialog, Transition } from "@headlessui/react";
import type {
  WorkmenuDocument,
  WorkmenuDocumentDataBodyWorkmenuitemSlice,
} from "types.generated";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import type { ButtonProps } from "react-html-props";
import type { KeyTextField } from "@prismicio/types";
import type { MouseEvent } from "react";

interface LayoutWorkMenuItemProps extends ButtonProps {
  index: number;
  length: number;
  hovered: boolean;
  someIsHovered: boolean;
  item: WorkmenuDocumentDataBodyWorkmenuitemSlice;
}

function LayoutWorkMenuItem({
  index,
  length,
  hovered,
  someIsHovered,
  item,
  ...props
}: LayoutWorkMenuItemProps) {
  const opacityTransition = "transition-opacity duration-200";
  const opacity = someIsHovered && !hovered ? "opacity-50" : "opacity-100";
  const refs = useRef<Array<HTMLVideoElement>>([]);
  const setRefs = (node: HTMLVideoElement | null) => {
    if (node) refs.current = [...refs.current, node];
  };

  const media = item.items.map((_it) => ({
    image: _it.thumbnail,
    video: _it.thumbnail_video,
  }));

  useEffect(() => {
    if (hovered) {
      refs.current.forEach((video) => video.play());
    } else {
      refs.current.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }, [hovered]);

  return (
    <button
      {...props}
      className={"LayoutWorkMenuItem grid-container cursor-pointer"}
    >
      <div
        className={`col-span-2 flex items-center ${opacity} ${opacityTransition}`}
      >
        <h1 className={"LayoutWorkMenuItem__title label--2 text-white"}>
          {item.primary.name}
        </h1>
        <span className={"label--2 mobile-only text-white"}>
          {`${index + 1}/${length}`}
        </span>
      </div>

      <div
        className={`desktop-only col-span-2 flex items-center ${opacity} ${opacityTransition}`}
      >
        <h2 className={"label--2 col-span-1 text-white"}>
          {`${index + 1}/${length}`}
        </h2>
      </div>

      <div
        className={`col-span-2 flex items-center ${opacity} ${opacityTransition}`}
      >
        <h3 className={"label--2  text-white"}>
          {item.primary.capabilities?.split(", ").map((_it, _idx) => (
            <span key={`LayoutWorkMenuItem-capabilities-${_it}-${_idx}`}>
              {_it}
              <br />
            </span>
          ))}
        </h3>
      </div>

      <div
        className={clsx(
          opacityTransition,
          someIsHovered && !hovered ? "opacity-0" : "opacity-100",
          "pointer-events-none col-span-5 col-start-8 hidden gap-[20px] md:grid md:grid-cols-5"
        )}
      >
        {media.map((item, _idx) => {
          return (
            <div
              key={`LayoutWorkMenuItemImage-${index}-${_idx}`}
              className={"aspect-square overflow-hidden"}
            >
              {"url" in item.video && item.video.url ? (
                <Video
                  lazy={false}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  // @ts-ignore
                  src={item.video.url}
                  poster={item.image.url || ""}
                  className={"w-full"}
                  ref={(node) => setRefs(node)}
                />
              ) : (
                <Image
                  loading={"eager"}
                  field={item.image}
                  className={"w-full"}
                />
              )}
            </div>
          );
        })}
      </div>
    </button>
  );
}

function LayoutWorkMenu({ data }: { data: WorkmenuDocument }) {
  /// const navigate = useNavigate();
  const { showWorkMenu, toggleWorkMenu } = useNavTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // useLayoutEffect(() => {
  //   const container = document.querySelector(".LayoutWorkMenu");
  //   if (container) setupBannerAnimation(container);
  // }, []);

  const onItemClick = (
    e: MouseEvent<HTMLButtonElement>,
    slug: string | KeyTextField
  ) => {
    const tl = gsap.timeline({
      onComplete: () => {
        // toggleWorkMenu();
        // setHoveredIndex(null);
        // navigate(`/work/${slug}`, { preventScrollReset: false });
      },
    });

    const ease = easings.mask;

    if (e.target instanceof Element) {
      const container = document.querySelector(".LayoutWorkMenu");
      const title = e.target.querySelector(".LayoutWorkMenuItem__title");
      if (title && container) {
        animateBanner(
          tl,
          {
            ease,
            duration: 0.6,
            position: 0,
            stagger: 0.02,
          },
          {
            title,
            scope: container,
          }
        );
      }
    }
  };

  const onMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const onMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Transition show={showWorkMenu} as={Fragment}>
      <Dialog
        onClose={() => {
          toggleWorkMenu();
        }}
        className={"relative"}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={
              "noise-background fixed inset-0 h-full w-full bg-pure-black"
            }
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={
              "LayoutWorkMenu pointer-events-none absolute flex h-full w-full items-end"
            }
          >
            {data.data.body.map((item, _idx) => {
              const hovered = hoveredIndex === _idx;

              return (
                <Image
                  className={clsx(
                    hovered ? "opacity-100" : "opacity-0 delay-100",
                    "absolute w-full items-start object-cover transition-opacity duration-500 ease-out"
                  )}
                  field={item.primary.background}
                  key={`LayoutWorkMenuItem-background--${_idx}`}
                />
              );
            })}
          </div>

          {data.data.body.map((item, _idx) => {
            if ("data" in item.primary.project_page_data) {
              return (
                <ProjectHero
                  isClone={true}
                  key={`LayoutWorkMenu-Hero-${_idx}`}
                  tableData={
                    item.primary.project_page_data.data as ProjectHeroTableProps
                  }
                />
              );
            }
          })}

          <div className="relative h-full w-full flex-col justify-end pt-40 md:flex md:items-end md:pb-[30px] md:pt-headerDesk">
            {data.data.body.map((item, _idx, arr) => {
              const hovered = hoveredIndex === _idx;
              const someIsHovered = hoveredIndex !== null;

              return (
                <div
                  key={`LayoutWorkMenuItem-${item.primary.link}-${_idx}`}
                  className={"LayoutWorkMenuItem mb-5 last:mb-0"}
                >
                  <LayoutWorkMenuItem
                    hovered={hovered}
                    someIsHovered={someIsHovered}
                    item={item}
                    index={_idx}
                    length={arr.length}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={() => onMouseEnter(_idx)}
                    onClick={(e) => onItemClick(e, item.primary.link)}
                  />
                </div>
              );
            })}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default LayoutWorkMenu;
