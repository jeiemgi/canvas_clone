import clsx from "clsx";
import { useMemo, useState } from "react";
import Portal from "~/components/Portal";
import type { MouseEvent } from "react";
import type { HomepageDocumentDataBodyHomepagePortfolioDesktopSlice } from "types.generated";

interface Props {
  data: HomepageDocumentDataBodyHomepagePortfolioDesktopSlice;
}

const ALL_TAGS_ID = "all";

function HomePagePortfolioDesktop({ data }: Props) {
  const availableTags = useMemo(() => {
    return [ALL_TAGS_ID, ...(data.primary.available_tags?.split(", ") || [])];
  }, [data.primary.available_tags]);

  const [selectedTag, setSelectedTag] = useState<string>(ALL_TAGS_ID);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverImage, setHoverImage] = useState<string | null>(null);

  const onMouseMoveImage = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX + 100,
      y: e.clientY - 100,
    });
  };

  const onMouseEnterImage = (e: MouseEvent<HTMLImageElement>) => {
    setHoverImage(e.currentTarget.src);
  };

  const onMouseLeaveImage = () => {
    setHoverImage(null);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className={"desktop-only overflow-hidden py-[20vh]"}>
      <Portal wrapperId={"root-cursor"}>
        <div
          style={{ left: position.x, top: position.y }}
          className={clsx(
            "fixed left-0 top-0 h-0 w-0",
            hoverImage ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={hoverImage || ""}
            alt="Hovered Preview"
            className={"max-h-[70vh] max-w-none"}
          />
        </div>
      </Portal>
      <div className={"max-container py-10"}>
        <div className={"heading--2 flex flex-row justify-end text-grey"}>
          {availableTags?.map((tag, index) => {
            return (
              <div
                key={`PortfolioDesk-${index}-${tag}`}
                onMouseEnter={() => setHoveredTag(tag)}
                onMouseLeave={() => setHoveredTag(null)}
                onClick={() => {
                  setSelectedTag(tag);
                }}
              >
                <span
                  className={clsx(
                    "cursor-pointer hover:text-black",
                    selectedTag === tag ? "text-black" : "text-grey"
                  )}
                >
                  {`${tag}`}
                </span>
                {index !== availableTags?.length - 1 ? <>,&nbsp;</> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={"relative mb-20 flex flex-row flex-wrap items-start gap-2"}
      >
        {data.items.map((item, index) => {
          let tags = item.tags?.split(", ") || [];
          const active = hoveredTag
            ? tags.includes(hoveredTag) || hoveredTag === ALL_TAGS_ID
            : tags.includes(selectedTag) || selectedTag === ALL_TAGS_ID;

          return (
            <div
              key={`PortfolioDesk-Image-${index}}`}
              className={clsx(
                "transition-opacity",
                active ? "opacity-100" : "opacity-5"
              )}
            >
              <img
                src={item.image.url!}
                alt={item.image.alt!}
                onMouseMove={onMouseMoveImage}
                onMouseEnter={onMouseEnterImage}
                onMouseLeave={onMouseLeaveImage}
                className={clsx(
                  "w-40 cursor-pointer object-contain",
                  active ? "pointer-events-auto" : "pointer-events-none"
                )}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktop;
