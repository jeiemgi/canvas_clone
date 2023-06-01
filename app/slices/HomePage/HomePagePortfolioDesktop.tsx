import clsx from "clsx";
import { Fragment, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { MouseEvent } from "react";
import type { HomepageDocumentDataBodyHomepagePortfolioDesktopSlice } from "types.generated";

const document = typeof window !== "undefined" ? window.document : null;

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

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX + 10,
      y: e.clientY - 100,
    });
  };

  const onMouseEnterImage = (e: MouseEvent<HTMLImageElement>) => {
    setHoverImage(e.currentTarget.src);
  };

  const onMouseLeaveImage = () => {
    setHoverImage(null);
  };

  const cursorWrapper = document?.getElementById("root-cursor");

  return (
    <div
      onMouseMove={onMouseMove}
      className={"desktop-only overflow-hidden py-[20vh]"}
    >
      {document && cursorWrapper
        ? createPortal(
            <div
              style={{ left: position.x, top: position.y }}
              className="fixed left-0 top-0 bg-red"
            >
              {hoverImage ? (
                <img
                  src={hoverImage}
                  alt="Hovered Preview"
                  className={"max-w-[80vh] object-contain"}
                />
              ) : null}
            </div>,
            cursorWrapper
          )
        : null}
      <div className={"max-container py-10"}>
        <div className={"heading--2 flex flex-row justify-end text-grey"}>
          {availableTags?.map((tag, index) => {
            return (
              <div
                key={`PortfolioDesk-${index}-${tag}`}
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
          const active =
            tags.includes(selectedTag) || selectedTag === ALL_TAGS_ID;

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
    </div>
  );
}

export default HomePagePortfolioDesktop;
