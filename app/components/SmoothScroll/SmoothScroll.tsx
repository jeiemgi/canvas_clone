import { useLayoutEffect } from "~/hooks";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import type { ReactNode } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      effects: true,
      ease: "expo.out",
    });
  }, []);

  return (
    <div id={"smooth-wrapper"}>
      <div id={"smooth-content"}>{children}</div>
    </div>
  );
}

export default SmoothScroll;
