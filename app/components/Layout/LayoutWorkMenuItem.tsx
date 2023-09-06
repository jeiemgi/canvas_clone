import clsx from "clsx";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import type { ButtonProps } from "react-html-props";
import type { WorkmenuDocumentDataBodyWorkmenuitemSlice } from "types.generated";

interface Props extends ButtonProps {
  index: number;
  length: number;
  hovered: boolean;
  someIsHovered: boolean;
  item: WorkmenuDocumentDataBodyWorkmenuitemSlice;
}

const LayoutWorkMenuItem = forwardRef<HTMLButtonElement, Props>(
  ({ index, length, hovered, someIsHovered, item, ...props }, ref) => {
    const refs = useRef<Array<HTMLVideoElement>>([]);
    const opacity = someIsHovered && !hovered ? "opacity-50" : "opacity-100";
    const opacityTransition = "transition-opacity duration-200";

    const setRefs = useCallback((node: HTMLVideoElement | null) => {
      if (node) refs.current = [...refs.current, node];
    }, []);

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
        ref={ref}
        {...props}
        className={
          "LayoutWorkMenuItem grid-container translate-y-5 cursor-pointer opacity-0"
        }
      >
        <div
          className={`col-span-2 flex h-full items-center ${opacity} ${opacityTransition}`}
        >
          <div
            style={{
              width: 500,
              height: 12.59,
              willChange: "transform",
              transform: "scale(0.10909)",
              transformOrigin: "top left",
            }}
            className={"LayoutWorkMenuItem__title"}
          >
            <h1 className={"display--1 whitespace-nowrap text-white"}>
              {item.primary.name}
            </h1>
          </div>
          <span className={"label--2 mobile-only text-white"}>
            {`${index + 1}/${length}`}
          </span>
        </div>

        <div
          className={`desktop-only col-span-2 flex h-full items-center ${opacity} ${opacityTransition}`}
        >
          <h2 className={"label--2 col-span-1 text-white"}>
            {`${index + 1}/${length}`}
          </h2>
        </div>

        <div
          className={`col-span-2 flex h-full items-center ${opacity} ${opacityTransition}`}
        >
          <h3 className={"label--2  text-left text-white"}>
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
);

LayoutWorkMenuItem.displayName = "LayoutWorkMenuItem";

export default LayoutWorkMenuItem;
