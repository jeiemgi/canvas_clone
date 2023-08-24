import clsx from "clsx";
import { gsap } from "gsap";
import easings from "~/lib/easings";
import { useEffect, useRef, useState } from "react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { useNavigate } from "react-router";
import Modal from "~/components/Modal";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import { animateTable } from "~/slices/HomePage/HomePageProjectScrollContainer";
import type { WorkmenuDocument } from "types.generated";
import type {
  ImageField,
  KeyTextField,
  LinkToMediaField,
} from "@prismicio/types";

interface LayoutWorkMenuItemProps {
  hovered: boolean;
  someIsHovered: boolean;
  name: KeyTextField;
  slug: KeyTextField;
  capabilities: KeyTextField;
  media: Array<{
    image: ImageField;
    video: LinkToMediaField;
  }>;
  index: number;
  length: number;
  onItemClick: (index: number) => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: Function;
}

function LayoutWorkMenuItem({
  hovered,
  someIsHovered,
  name,
  slug,
  capabilities,
  media,
  index,
  length,
  onItemClick,
  onMouseEnter,
  onMouseLeave,
}: LayoutWorkMenuItemProps) {
  const refs = useRef<Array<HTMLVideoElement>>([]);
  const setRefs = (node: HTMLVideoElement | null) => {
    if (node) refs.current = [...refs.current, node];
  };

  useEffect(() => {
    if (hovered) {
      refs.current.forEach((video) => {
        const isPlaying =
          video.currentTime > 0 &&
          !video.paused &&
          !video.ended &&
          video.readyState > video.HAVE_CURRENT_DATA;
        if (!isPlaying) video.play();
      });
    } else {
      refs.current.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }, [hovered]);

  const opacityTransition =
    "transition-opacity duration-500 ease-out delay-200";
  const opacity = someIsHovered && !hovered ? "opacity-50" : "opacity-100";

  return (
    <div
      onClick={() => onItemClick(index)}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      className={"grid-container cursor-pointer"}
    >
      <div className={`col-span-2 ${opacity} ${opacityTransition}`}>
        <h1 className={"label--2 col-span-1 text-white"}>{name}</h1>
      </div>

      <div className={`col-span-2 ${opacity} ${opacityTransition}`}>
        <h2 className={"label--2 col-span-1 text-white"}>
          {`${index + 1}/${length}`}
        </h2>
      </div>

      <div className={`col-span-2 ${opacity} ${opacityTransition}`}>
        <h3 className={"label--2  text-white"}>
          {capabilities?.split(", ").map((item, _idx) => (
            <span key={`LayoutWorkMenuItem-capabilities-${slug}-${_idx}`}>
              {item}
              <br />
            </span>
          ))}
        </h3>
      </div>

      <div
        className={clsx(
          opacityTransition,
          someIsHovered && !hovered ? "opacity-0" : "opacity-100 delay-500",
          "pointer-events-none col-span-5 col-start-8 grid grid-cols-5 gap-[20px]"
        )}
      >
        {media.map((item, _idx) => {
          return (
            <div
              key={`LayoutWorkMenuItemImage-${slug}-${_idx}`}
              className={"aspect-square overflow-hidden"}
            >
              {"url" in item.video && item.video.url ? (
                <Video
                  loop={true}
                  muted={true}
                  playsInline={true}
                  lazy={false}
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
    </div>
  );
}

function LayoutWorkMenu({ data }: { data: WorkmenuDocument }) {
  const navigate = useNavigate();
  const { showWorkMenu, toggleWorkMenu } = useNavTheme();
  // const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onItemClick = (slug: string, index: number) => {
    // setClickedIndex(index);
    const timeline = gsap.timeline({
      onComplete: () => {
        setHoveredIndex(null);
        navigate(`/work/${slug}`, { preventScrollReset: false });
      },
    });

    animateTable({
      tl: timeline,
      position: 0,
      duration: 0.6,
      ease: easings.mask,
      index,
      slug,
      stagger: 0.02,
    });
  };

  const onMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const onMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Modal
      isOpen={showWorkMenu}
      toggle={toggleWorkMenu}
      backdropClassName={"noise-background bg-pure-black"}
    >
      <div className={"pointer-events-none absolute h-full w-full"}>
        {data.data.body.map((item, _idx) => (
          <Image
            className={clsx(
              hoveredIndex === _idx ? "opacity-100" : "opacity-0 delay-200",
              "absolute transition-opacity duration-500 ease-out"
            )}
            field={item.primary.background}
            key={`LayoutWorkMenuItem-background--${_idx}`}
          />
        ))}
      </div>

      <div className="relative flex h-full w-full flex-col items-end justify-end md:pb-[30px] md:pt-headerDesk">
        {data.data.body.map((item, _idx, arr) => {
          const media = item.items.map((_it) => ({
            image: _it.thumbnail,
            video: _it.thumbnail_video,
          }));

          const slug = item.primary.link || "";
          const shouldPlay = hoveredIndex === _idx;
          const someIsHovered = hoveredIndex !== null;
          console.log(someIsHovered);
          // const tableData = item.primary.project_page_data;
          return (
            <div
              key={`LayoutWorkMenuItem-${item.primary.link}-${_idx}`}
              className={"LayoutWorkMenuItem mb-5 last:mb-0"}
            >
              <LayoutWorkMenuItem
                someIsHovered={someIsHovered}
                hovered={shouldPlay}
                media={media}
                index={_idx}
                length={arr.length}
                slug={slug}
                name={item.primary.name}
                capabilities={item.primary.capabilities}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onItemClick={() => onItemClick(slug, _idx)}
              />
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

export default LayoutWorkMenu;
