import Modal from "~/components/Modal";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { WorkmenuDocument } from "types.generated";
import type {
  ImageField,
  KeyTextField,
  LinkToMediaField,
} from "@prismicio/types";
import { Video } from "~/components/Video";
import { useEffect, useRef, useState } from "react";
import { Image } from "~/components/Image";
import clsx from "clsx";

interface LayoutWorkMenuItemProps {
  hovered: boolean;
  name: KeyTextField;
  slug: KeyTextField;
  capabilities: KeyTextField;
  media: Array<{
    image: ImageField;
    video: LinkToMediaField;
  }>;
  index: number;
  length: number;
  onItemClick: () => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: Function;
}

function LayoutWorkMenuItem({
  hovered,
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
      refs.current.forEach((video) => video.play());
    } else {
      refs.current.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }, [hovered]);

  return (
    <div
      onClick={onItemClick}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      className={
        "LayoutWorkMenuItem grid-container mb-5 cursor-pointer last:mb-0"
      }
    >
      <div className={"col-span-2"}>
        <h1 className={"label--2 col-span-1 text-white"}>{name}</h1>
      </div>

      <div className={"col-span-2"}>
        <h2 className={"label--2 col-span-1 text-white"}>
          {`${index + 1}/${length}`}
        </h2>
      </div>

      <div className={"pointer-events-none col-span-2"}>
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
        className={
          "pointer-events-none col-span-5 col-start-8 grid grid-cols-5 gap-[20px]"
        }
      >
        {media.map((item, _idx) => {
          return (
            <div
              key={`LayoutWorkMenuItemImage-${slug}-${_idx}`}
              className={"aspect-square overflow-hidden"}
            >
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LayoutWorkMenu({ data }: { data: WorkmenuDocument }) {
  const { showWorkMenu, toggleWorkMenu } = useNavTheme();
  const [clicked, setClicked] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onItemClick = () => {
    setClicked(true);
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
              hoveredIndex === _idx ? "opacity-100" : "opacity-0",
              "absolute transition-opacity duration-500 ease-out"
            )}
            field={item.primary.background}
            key={`LayoutWorkMenuItem-background--${_idx}`}
          />
        ))}
      </div>

      <div className="relative flex h-full w-full flex-col items-end justify-end md:pb-[30px] md:pt-headerDesk">
        {data.data.body.map((item, index, arr) => {
          const media = item.items.map((_it) => ({
            image: _it.thumbnail,
            video: _it.thumbnail_video,
          }));

          const shouldPlay = hoveredIndex === index && !clicked;

          return (
            <LayoutWorkMenuItem
              hovered={shouldPlay}
              media={media}
              index={index}
              length={arr.length}
              name={item.primary.name}
              slug={item.primary.link}
              onItemClick={onItemClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              capabilities={item.primary.capabilities}
              key={`LayoutWorkMenuItem-${item.primary.link}-${index}`}
            />
          );
        })}
      </div>
    </Modal>
  );
}

export default LayoutWorkMenu;
