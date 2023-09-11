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
  const windowWidth = window.innerWidth - margin;
  const windowHeight = window.innerHeight - margin;

  const baseX = width / 2;

  const leftLimit = baseX;
  const rightLimit = windowWidth - baseX;

  const bottomLimit = windowHeight - height;
  const yPos = y > bottomLimit ? y - height : y + yOffset;
  const yTransform = y > bottomLimit ? "bottom" : "top";

  // left
  if (x < leftLimit) {
    const xPos = x + xOffset;
    return [xPos, yPos, `left ${yTransform}`] as const;
  }

  // right
  if (x > rightLimit) {
    const xPos = x - width;
    return [xPos, yPos, `right ${yTransform}`] as const;
  }

  // center
  return [x - baseX, yPos, `center ${yTransform}`] as const;
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

  useEffect(() => {
    const cursor = cursorRef.current;
    const content = contentRef.current;
    const vars = { duration: 0.8, ease: "power3.out" };

    const animate = () => {
      if (!hoverData) {
        gsap.set(cursor, { x: position.x, y: position.y });
      } else if (cursor && content) {
        gsap.killTweensOf(cursor);
        const [x, y] = getCustomPosition(
          position.x,
          position.y,
          content.clientWidth,
          content.clientHeight
        );
        gsap.to(cursor, { x, y, ...vars });

        // gsap.set(cursor, { x: position.x, y: position.y });
      }
    };

    const request = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(request);
  }, [hoverData, position]);

  return (
    <section {...props}>
      {children}
      <div
        ref={cursorRef}
        className={
          "pointer-events-none fixed left-0 top-0 z-10 overflow-hidden"
        }
      >
        <div ref={contentRef}>
          {hoverData ? (
            <>
              {"url" in hoverData.video ? (
                <Video
                  autoPlay={true}
                  src={hoverData.video.url}
                  poster={hoverData.image.url || undefined}
                  style={{ width: "45vh" }}
                />
              ) : (
                <Image
                  style={{ width: "45vh" }}
                  widths={[500]}
                  aria-hidden={true}
                  field={hoverData?.image}
                />
              )}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktopCursor;
