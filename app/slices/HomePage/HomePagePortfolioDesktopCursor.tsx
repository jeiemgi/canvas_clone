import clsx from "clsx";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import type { MouseEvent } from "react";
import type { SectionProps } from "react-html-props";
import type { HomePagePortFolioItemData } from "~/slices/HomePage/HomePagePortfolioDesktop";

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

interface Props {
  isLoading: boolean;
  hoverData: HomePagePortFolioItemData;
}

function HomePagePortfolioDesktopCursor({
  isLoading,
  children,
  hoverData,
  ...props
}: SectionProps & Props) {
  const contentRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hasMovedMouse, setHasmovedMouse] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onMouseLeave = () => {
    setIsHovered(false);
  };
  const onMouseEnter = () => {
    setIsHovered(true);
  };

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

  return (
    <section
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      {...props}
    >
      {children}
      <div
        ref={cursorRef}
        className={"pointer-events-none fixed left-0 top-0 z-10"}
      >
        <div
          ref={contentRef}
          className={clsx(
            "min-w-[500px]",
            "relative transition-all ease-out",
            isHovered && hasMovedMouse
              ? "opacity-100 duration-200"
              : "opacity-0 duration-200"
          )}
        >
          <div
            className={clsx(
              isLoading ? "opacity-100" : "opacity-0",
              "absolute justify-center bg-white p-2"
            )}
          >
            <span className={"label--1 text-black"}>Loading ...</span>
          </div>

          <div className={"relative max-h-[45vh] min-w-[500px] max-w-[45vh]"}>
            {isHovered && hoverData?.video && "url" in hoverData?.video ? (
              <Video
                autoPlay={true}
                src={hoverData.video.url}
                poster={hoverData.image.url || undefined}
                className={"w-full"}
              />
            ) : (
              <Image
                width={500}
                widths={[500, 1000]}
                loading={"lazy"}
                aria-hidden={true}
                field={hoverData?.image}
                className={"w-full object-cover"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktopCursor;
