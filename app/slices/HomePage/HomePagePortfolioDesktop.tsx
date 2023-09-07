import clsx from "clsx";
import { gsap } from "gsap";
import { useMemo, useRef, useState } from "react";
import TextCta from "~/components/CTA/TextCTA";
import { Image } from "~/components/Image";
import type { MouseEvent } from "react";
import type { ImageField, LinkToMediaField } from "@prismicio/types";
import type { DivProps } from "react-html-props";
import type { HomepageDocumentDataBodyHomepagePortfolioDesktopSlice } from "types.generated";
import { Video } from "~/components/Video";

const ALL_TAGS_ID = "all";

interface ImageProps extends DivProps {
  active: boolean;
  image: ImageField;
}

function HomePagePortFolioItem({ active, image, ...props }: ImageProps) {
  return (
    <div
      className={clsx(
        "relative col-span-1 cursor-pointer transition-opacity",
        active
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-5"
      )}
      {...props}
    >
      {image.url ? (
        <Image
          loading={"lazy"}
          widths={"thumbnails"}
          field={image}
          className={"object-contain"}
        />
      ) : (
        <div
          className={
            "absolute flex aspect-square w-full items-center justify-center border"
          }
        >
          <div className="label--2">NO THUMBNAIL</div>
        </div>
      )}
    </div>
  );
}

interface Props {
  data: HomepageDocumentDataBodyHomepagePortfolioDesktopSlice;
}

function getCustomPosition(e: MouseEvent<HTMLDivElement>, width: number) {
  const yOffset = 28;
  // left
  if (e.clientX < width / 2) {
    return [e.clientX, e.clientY + yOffset] as const;
  }
  // right
  if (e.clientX > window.innerWidth - width / 2) {
    return [e.clientX - width, e.clientY + yOffset] as const;
  }
  // center
  return [e.clientX - width / 2, e.clientY + yOffset] as const;
}

function HomePagePortfolioDesktop({ data }: Props) {
  const availableTags = useMemo(() => {
    return [ALL_TAGS_ID, ...(data.primary.available_tags?.split(", ") || [])];
  }, [data.primary.available_tags]);

  const contentRef = useRef<HTMLImageElement>(null);
  const [selectedTag, setSelectedTag] = useState<string>(ALL_TAGS_ID);
  const [hasMovedMouse, setHasmovedMouse] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const [hoverData, setHoverData] = useState<{
    image: ImageField;
    video?: LinkToMediaField;
  } | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hasMovedMouse) setHasmovedMouse(true);

    if (contentRef.current) {
      gsap.killTweensOf(contentRef.current);
      const [x, y] = getCustomPosition(e, contentRef.current.clientWidth);
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const onMouseEnterImage = (
    e: MouseEvent<HTMLDivElement>,
    data: {
      image: ImageField;
      video: LinkToMediaField;
    }
  ) => {
    if (contentRef.current) {
      const [x, y] = getCustomPosition(e, contentRef.current.clientWidth);
      gsap.set(cursorRef.current, {
        x: x,
        y: y,
      });
    }

    setHoverData(data);
    setIsHovered(true);
  };

  const onMouseLeaveImage = (e: MouseEvent<HTMLImageElement>) => {
    setIsHovered(false);
    setHoverData(null);
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className={"desktop-only overflow-hidden pb-64 pt-20"}
    >
      <div className={"max-container pb-16"}>
        <div className={"flex flex-row justify-end text-black/30"}>
          {availableTags?.map((tag, index) => {
            const isActive = selectedTag === tag;
            return (
              <div
                key={`PortfolioDesk-${index}-${tag}`}
                onMouseEnter={() => setHoveredTag(tag)}
                onMouseLeave={() => setHoveredTag(null)}
                onClick={() => {
                  setSelectedTag(tag);
                }}
                className={clsx(
                  "heading--2 cursor-pointer hover:text-black",
                  isActive ? "text-black" : "text-grey"
                )}
              >
                {isActive ? <span>(&nbsp;</span> : null}
                <TextCta className={"inline-block align-middle"}>{tag}</TextCta>
                {isActive ? <span>&nbsp;)</span> : null}
                {index !== availableTags?.length - 1 ? <>,&nbsp;</> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className={"relative grid grid-cols-17 gap-2 px-2"}>
        {data.items.map((item, index) => {
          let tags = item.tags?.split(", ") || [];
          const active = hoveredTag
            ? tags.includes(hoveredTag) || hoveredTag === ALL_TAGS_ID
            : tags.includes(selectedTag) || selectedTag === ALL_TAGS_ID;
          return (
            <HomePagePortFolioItem
              image={item.image}
              active={active}
              onMouseEnter={(e) => onMouseEnterImage(e, item)}
              onMouseLeave={onMouseLeaveImage}
              key={`PortfolioDesk-Image-${index}}`}
            />
          );
        })}
      </div>

      <div
        ref={cursorRef}
        className={"pointer-events-none fixed left-0 top-0 z-10"}
      >
        <div
          ref={contentRef}
          className={clsx(
            "min-w-[500px] transition-opacity duration-100 ease-out",
            isHovered && hasMovedMouse ? "opacity-100" : "opacity-0 delay-300"
          )}
        >
          {hoverData?.video && "url" in hoverData?.video ? (
            <Video
              autoPlay={true}
              src={hoverData.video.url}
              poster={hoverData.image.url || undefined}
              className={"max-h-[45vh] max-w-[45vh]"}
            />
          ) : (
            <Image
              loading={"lazy"}
              aria-hidden={true}
              field={hoverData?.image}
              className={"max-h-[45vh] w-full max-w-[45vh]"}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktop;
