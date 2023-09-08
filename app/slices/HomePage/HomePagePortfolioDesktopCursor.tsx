import clsx from "clsx";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import type { MouseEvent } from "react";
import type { SectionProps } from "react-html-props";
import type { HomePagePortFolioItemData } from "~/slices/HomePage/HomePagePortfolioDesktop";

const offSet = 30;

function getCustomPosition(
  x: number,
  y: number,
  width: number,
  height: number
) {
  const baseXPosition = width / 2;
  const baseYPosition = height / 2;

  // left
  if (x < baseXPosition) {
    return [offSet, y + offSet] as const;
  }
  // right
  if (x > window.innerWidth - baseXPosition) {
    return [window.innerWidth - width - offSet, y + offSet] as const;
  }

  // center
  return [x - width / 2, y + offSet] as const;
}

interface Props {
  hoverData: HomePagePortFolioItemData;
}

function HomePagePortfolioDesktopCursor({
  children,
  hoverData,
  ...props
}: SectionProps & Props) {
  const itemIsHovered = Boolean(hoverData);
  const contentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveMouse = (cursorX: number, cursorY: number, animated = true) => {
    const cursor = cursorRef.current;

    if (cursor) {
      gsap.killTweensOf(cursor);
      const [x, y] = getCustomPosition(
        cursorX,
        cursorY,
        cursor.clientWidth,
        cursor.clientHeight
      );

      if (animated) {
        gsap.to(cursor, { x, y, ease: "power2.out", duration: 0.3 });
      } else {
        gsap.set(cursor, { x, y });
      }
    }
  };

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    moveMouse(e.clientX, e.clientY, false);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (contentRef.current) {
      moveMouse(e.clientX, e.clientY);
    }
  };

  const cursorClassName = clsx(
    "origin-center pointer-events-none fixed w-[500px] left-0 top-0 z-10"
  );

  return (
    <section onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} {...props}>
      {children}

      <div ref={cursorRef} className={cursorClassName}>
        <div ref={contentRef} className={"relative"}>
          <div className={"relative max-h-[40vh] max-w-[40vh]"}>
            {hoverData?.video && "url" in hoverData?.video ? (
              <>
                {itemIsHovered ? (
                  <Video
                    autoPlay={true}
                    src={hoverData.video.url}
                    poster={hoverData.image.url || undefined}
                    className={"w-full"}
                  />
                ) : null}
              </>
            ) : (
              <Image
                width={500}
                widths={[500, 800]}
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
