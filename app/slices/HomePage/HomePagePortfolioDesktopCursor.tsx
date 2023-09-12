import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import type { SectionProps } from "react-html-props";
import type { HomePagePortFolioItemData } from "~/slices/HomePage/HomePagePortfolioDesktop";
import clsx from "clsx";

const margin = 20;

function getOrientation(
  position: {
    x: number;
    y: number;
  },
  contentDiv: HTMLElement
) {
  const { x, y } = position;
  const windowWidth = window.innerWidth - margin;
  const windowHeight = window.innerHeight - margin;
  const width = contentDiv.clientWidth;
  const baseX = width / 2;
  const leftLimit = baseX;
  const rightLimit = windowWidth - baseX;
  const bottomLimit = windowHeight / 2;
  const yPos = y > bottomLimit ? "top" : "bottom";

  if (x < leftLimit) return ["left", yPos];
  if (x > rightLimit) return ["right", yPos];
  return ["center", yPos];
}

function getCustomPosition(
  position: {
    x: number;
    y: number;
  },
  contentDiv: Element
) {
  const { x, y } = position;
  const width = contentDiv.clientWidth;
  const height = contentDiv.clientHeight;
  const windowWidth = window.innerWidth - margin;
  const windowHeight = window.innerHeight - margin;

  const baseX = width / 2;
  const leftLimit = baseX;
  const rightLimit = windowWidth - baseX;
  const bottomLimit = windowHeight / 2;
  const yPos = y > bottomLimit ? -height : 0;

  if (x < leftLimit) return [0, yPos] as const;
  if (x > rightLimit) return [-width, yPos] as const;
  return [-baseX, yPos] as const;
}

interface Props {
  hoverData: HomePagePortFolioItemData;
}

function HomePagePortfolioDesktopCursor({
  children,
  hoverData,
  ...props
}: SectionProps & Props) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timerId: number;
    let position = { x: 0, y: 0 };

    const cursor = cursorRef.current;
    const content = contentRef.current;
    const vars = {
      duration: 0.2,
      ease: "power3.out",
    };

    const moveMouse = () => {
      if (!cursor && content) return;
      gsap.to(cursor, { x: position.x, y: position.y, ...vars });
    };

    const animateContent = () => {
      if (!cursor || !content) return;
      gsap.killTweensOf(content);
      const [x, y] = getCustomPosition(position, content);
      gsap.to(content, {
        x,
        y,
      });
    };

    const setPosition = (x: number, y: number) => {
      position = { x, y };
    };

    const animate = () => {
      moveMouse();
      animateContent();
      timerId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: any) => {
      setPosition(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", onMouseMove);
    timerId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(timerId);
    };
  }, []);

  return (
    <section {...props}>
      {children}
      <div
        ref={cursorRef}
        className={clsx(
          "border-2 border-red bg-gray-300/50",
          "pointer-events-none fixed left-0 top-0 z-10 h-1 w-1"
        )}
      >
        <div className={"h-[40vh] w-[30vw] overflow-hidden"} ref={contentRef}>
          {hoverData?.video && "url" in hoverData?.video ? (
            <Video
              autoPlay={true}
              src={hoverData?.video.url}
              poster={hoverData?.image.url || undefined}
              className={"h-full w-full object-contain"}
            />
          ) : hoverData ? (
            <Image
              width={500}
              widths={[500]}
              aria-hidden={true}
              field={hoverData?.image}
              className={"h-full w-full object-contain"}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default HomePagePortfolioDesktopCursor;
