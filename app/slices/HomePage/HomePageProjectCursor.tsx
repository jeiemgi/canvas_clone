import clsx from "clsx";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import type { DivProps } from "react-html-props";
import type { MouseEvent } from "react";

interface Props {
  cursorLabel: string;
}

function HomePageProjectCursor({
  children,
  cursorLabel,
  ...props
}: Props & DivProps) {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY });
    setShow(true);
  };

  const mouseLeave = () => {
    setShow(false);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    gsap.killTweensOf(cursorRef.current);
    gsap.to(cursorRef.current, {
      ease: "power1.out",
      duration: 0.5,
      x: e.clientX,
      y: e.clientY + 28,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseMove={onMouseMove}
      {...props}
    >
      {children}
      <div ref={cursorRef} className={"pointer-events-none fixed left-0 top-0"}>
        <h3
          className={clsx(
            "label--2 text-white transition-opacity",
            show ? "opacity-100 duration-300" : "opacity-0 duration-100"
          )}
        >
          <span className={"mr-2"}>(</span>
          {cursorLabel}
          <span className={"ml-2"}>)</span>
        </h3>
      </div>
    </div>
  );
}

export default HomePageProjectCursor;
