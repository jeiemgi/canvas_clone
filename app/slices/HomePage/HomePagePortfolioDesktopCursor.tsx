import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import type { SectionProps } from "react-html-props";
import type { HomePagePortFolioItemData } from "~/slices/HomePage/HomePagePortfolioDesktop";

const margin = 20;
const yOffset = 30;
const xOffset = 30;

function getCustomPosition(
  x: number,
  y: number,
  width: number,
  height: number
) {
  console.log(width, height);
  const windowWidth = window.innerWidth - margin;
  const windowHeight = window.innerHeight - margin;

  const baseX = width / 2;

  const leftLimit = baseX;
  const rightLimit = windowWidth - baseX;

  const bottomLimit = windowHeight - height;
  const yPos = y > bottomLimit ? y - height : y + yOffset;

  // left
  if (x < leftLimit) {
    const xPos = x + xOffset;
    return [xPos, yPos] as const;
  }

  // right
  if (x > rightLimit) {
    const xPos = x - width;
    return [xPos, yPos] as const;
  }

  // center
  return [x - baseX, yPos] as const;
}

interface Props {
  hoverData: HomePagePortFolioItemData;
  position: {
    x: number;
    y: number;
  };
}

function HomePagePortfolioDesktopCursor({
  position,
  children,
  hoverData,
  ...props
}: SectionProps & Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveMouse = (cursorX: number, cursorY: number) => {
    const cursor = cursorRef.current;
    const content = contentRef.current;

    if (cursor && content) {
      gsap.killTweensOf(cursor);
      const [x, y] = getCustomPosition(
        cursorX,
        cursorY,
        content.clientWidth,
        content.clientHeight
      );
      gsap.to(cursor, { x, y, duration: 0.2, ease: "power1.out" });
    }
  };

  useEffect(() => {
    moveMouse(position.x, position.y);
  }, [position]);

  const cursorClassName = "pointer-events-none fixed left-0 top-0 z-10";

  return (
    <section {...props}>
      {children}

      <div ref={cursorRef} className={cursorClassName}>
        {hoverData ? (
          <div ref={contentRef} className={"w-[40vh] bg-red"}>
            {"url" in hoverData.video ? (
              <Video
                autoPlay={true}
                src={hoverData.video.url}
                poster={hoverData.image.url || undefined}
                className={"w-full"}
              />
            ) : (
              <Image
                loading={"lazy"}
                aria-hidden={true}
                widths={[500]}
                field={hoverData?.image}
                className={"w-full object-contain"}
              />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktopCursor;
