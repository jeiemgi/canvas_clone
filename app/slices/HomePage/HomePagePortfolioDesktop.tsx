import clsx from "clsx";
import { useMemo, useRef, useState } from "react";
import { Image } from "~/components/Image";
import TextCta from "~/components/CTA/TextCTA";
import HomePagePortfolioDesktopCursor from "./HomePagePortfolioDesktopCursor";
import type { MouseEvent } from "react";
import type { ImageField, LinkToMediaField } from "@prismicio/types";
import type { DivProps } from "react-html-props";
import type { HomepageDocumentDataBodyHomepagePortfolioDesktopSlice } from "types.generated";

const ALL_TAGS_ID = "all";

export type HomePagePortFolioItemData = {
  image: ImageField;
  video: LinkToMediaField;
} | null;

interface ImageProps extends DivProps {
  active: boolean;
  image: ImageField;
}

interface HomePagePortfolioFilterProps {
  hoveredTag: string | null;
  selectedTag: string | null;
  onItemClick: (tag: string) => void;
  onItemMouseLeave: (tag: string | null) => void;
  onItemMouseEnter: (tag: string | null) => void;
}

function HomePagePortfolioFilter({
  data,
  onItemMouseEnter,
  onItemMouseLeave,
  hoveredTag,
  selectedTag,
  onItemClick,
}: Props & HomePagePortfolioFilterProps) {
  const availableTags = useMemo(() => {
    return [ALL_TAGS_ID, ...(data.primary.available_tags?.split(", ") || [])];
  }, [data.primary.available_tags]);

  return (
    <div className={"max-container pb-16"}>
      <div className={"flex flex-row justify-end text-black/30"}>
        {availableTags?.map((tag, index) => {
          const isActive = selectedTag === tag;

          return (
            <div
              key={`PortfolioDesk-${index}-${tag}`}
              onMouseEnter={() => onItemMouseEnter(tag)}
              onMouseLeave={() => onItemMouseLeave(null)}
              onClick={() => {
                onItemClick(tag);
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
  );
}

function HomePagePortFolioItem({ active, image, ...props }: ImageProps) {
  return (
    <div
      className={clsx(
        "relative col-span-1 aspect-square cursor-pointer transition-opacity",
        active
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-5"
      )}
      {...props}
    >
      {image.url ? (
        <Image
          field={image}
          width={150}
          height={150}
          loading={"eager"}
          widths={[200, 400]}
          className={"w-full object-contain"}
        />
      ) : (
        <div
          className={
            "absolute flex aspect-square w-full items-center justify-center border"
          }
        >
          <div className="label--2  text-center">NO THUMBNAIL</div>
        </div>
      )}
    </div>
  );
}

interface Props {
  data: HomepageDocumentDataBodyHomepagePortfolioDesktopSlice;
}

const LEAVE_TIMEOUT = 300;

function HomePagePortfolioDesktop({ data }: Props) {
  const timeout = useRef<NodeJS.Timeout | undefined>();
  const [selectedTag, setSelectedTag] = useState<string>(ALL_TAGS_ID);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [hoverData, setHoverData] = useState<HomePagePortFolioItemData>(null);

  const onMouseEnterImage = (
    e: MouseEvent<HTMLDivElement>,
    data: HomePagePortFolioItemData
  ) => {
    clearTimeout(timeout.current);
    setHoverData(data);
  };

  const onMouseLeaveImage = (e: MouseEvent<HTMLImageElement>) => {
    timeout.current = setTimeout(() => {
      setHoverData(null);
    }, LEAVE_TIMEOUT);
  };

  return (
    <HomePagePortfolioDesktopCursor
      hoverData={hoverData}
      className={"desktop-only relative overflow-hidden pb-64 pt-20"}
    >
      <HomePagePortfolioFilter
        hoveredTag={hoveredTag}
        selectedTag={selectedTag}
        onItemMouseEnter={(tag) => setHoveredTag(tag)}
        onItemMouseLeave={(tag) => setHoveredTag(tag)}
        onItemClick={(tag) => setSelectedTag(tag)}
        data={data}
      />

      <div className={"relative grid grid-cols-17 gap-2 px-2"}>
        {data.items.map((item, index) => {
          let tags = item.tags?.split(", ") || [];
          const active = hoveredTag
            ? tags.includes(hoveredTag) || hoveredTag === ALL_TAGS_ID
            : tags.includes(selectedTag) || selectedTag === ALL_TAGS_ID;
          return (
            <HomePagePortFolioItem
              active={active}
              image={item.image}
              onMouseLeave={onMouseLeaveImage}
              onMouseEnter={(e) => onMouseEnterImage(e, item)}
              key={`PortfolioDesk-Image-${index}}`}
            />
          );
        })}
      </div>
    </HomePagePortfolioDesktopCursor>
  );
}

export default HomePagePortfolioDesktop;
