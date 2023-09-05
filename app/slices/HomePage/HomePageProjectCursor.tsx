import type { MouseEvent } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import { mdScreen } from "~/lib/gsapUtils";
import clsx from "clsx";

function HomePageProjectCursor({ containerId }: { containerId: string }) {
  const container = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY + 28,
    });
  };

  const [isPinned, setIsPinned] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      mdScreen,
      () => {
        const parent = document.getElementById(containerId);
        ScrollTrigger.create({
          trigger: parent,
          pin: container.current,
          onEnter: () => {
            setIsPinned(true);
          },
          onEnterBack: () => {
            setIsPinned(true);
          },
          onLeave: () => {
            setIsPinned(false);
          },
          onLeaveBack: () => {
            setIsPinned(false);
          },
          end: () => {
            const scrollContainer = document.querySelector(
              "#home-projects-container"
            )!;
            return `+=${scrollContainer.scrollHeight - window.innerHeight}`;
          },
        });
      },
      cursor
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={container}
      onMouseMove={onMouseMove}
      className={"desktop-only absolute left-0 top-0 cursor-pointer"}
    >
      <div ref={cursor} className={"pointer-events-none absolute"}>
        <h3
          className={clsx(
            "label--2 text-white transition-opacity",
            isPinned ? "opacity-100" : "opacity-0"
          )}
        >
          <span className={"mr-2"}>(</span>
          VIEW PROJECT
          <span className={"ml-2"}>)</span>
        </h3>
      </div>
    </div>
  );
}

export default HomePageProjectCursor;
