import clsx from "clsx";
import { useState } from "react";
import Portal from "~/components/Portal";
import type { MouseEvent, ReactNode } from "react";

interface Props {
  cta: string;
  wrapperId?: string;
  children: ReactNode;
}

function Cursor({ cta, wrapperId = "root-cursor", children }: Props) {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hovered) setHovered(true);

    setPosition({
      x: e.clientX + 20,
      y: e.clientY + 20,
    });
  };

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <Portal wrapperId={wrapperId}>
        <div
          style={{
            transform: `translateX(${position.x}px) translateY(${position.y}px)`,
          }}
          className={clsx(
            "fixed left-0 top-0 h-max w-max select-none transition-transform ease-out",
            hovered ? "opacity-100" : "opacity-0"
          )}
        >
          <h3 className={"label--2 text-white"}>{cta}</h3>
        </div>
      </Portal>
      <div
        className={"cursor-wrapper"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {children}
      </div>
    </>
  );
}

export default Cursor;
