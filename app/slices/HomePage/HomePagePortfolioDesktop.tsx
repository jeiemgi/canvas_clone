import clsx from "clsx";
import { gsap } from "gsap";
import { useMemo, useRef, useState } from "react";
import TextCta from "~/components/CTA/TextCTA";
import { Image } from "~/components/Image";
import type { MouseEvent } from "react";
import type { ImageField } from "@prismicio/types";
import type { DivProps } from "react-html-props";
import type { HomepageDocumentDataBodyHomepagePortfolioDesktopSlice } from "types.generated";

const ALL_TAGS_ID = "all";

interface ImageProps extends DivProps {
  active: boolean;
  image: ImageField;
}

function HomePagePortFolioImage({ active, image, ...props }: ImageProps) {
  return (
    <div
      className={clsx(
        "col-span-1 transition-opacity",
        active
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-5"
      )}
      {...props}
    >
      <Image field={image} className={"object-contain"} />
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

  const imageRef = useRef<HTMLImageElement>(null);
  const [selectedTag, setSelectedTag] = useState<string>(ALL_TAGS_ID);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [hoverImage, setHoverImage] = useState<string>("");
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const [x, y] = getCustomPosition(e, imageRef.current.clientWidth);
      gsap.to(cursorRef.current, {
        x,
        y,
        delay: 0.01,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  const onMouseEnterImage = (e: MouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget.querySelector("img")!;
    setHoverImage(img.src);
    setIsHovered(true);
  };

  const onMouseLeaveImage = (e: MouseEvent<HTMLImageElement>) => {
    setIsHovered(false);
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
            <HomePagePortFolioImage
              active={active}
              image={item.image}
              onMouseEnter={onMouseEnterImage}
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
          className={clsx(
            "transition-all duration-100 ease-out",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <img
            alt={" "}
            ref={imageRef}
            src={hoverImage}
            aria-hidden={true}
            className={"max-h-[50vh] max-w-[50vh]"}
          />
        </div>
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktop;
