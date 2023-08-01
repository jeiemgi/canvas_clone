import { useRef } from "react";
import { useLayoutEffect } from "~/hooks";
import { gsap } from "gsap";

const useTextAnimation = <T>() => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ paused: true });
      const clone = self?.selector ? self?.selector(".clone") : null;
      const content = self?.selector ? self?.selector(".content") : null;

      tl.to([content, clone], {
        y: "-100%",
        duration: 0.35,
        ease: "cubic-bezier(0.20, 0.00, 0.20, 1.00)",
      });

      const mouseEnter = () => tl.play();
      const mouseLeave = () => tl.reverse();

      // @ts-ignore
      ref.current?.addEventListener("mouseenter", mouseEnter);
      // @ts-ignore
      ref.current?.addEventListener("mouseleave", mouseLeave);
    }, ref);

    return () => ctx.revert();
  }, []);

  return { ref };
};

export default useTextAnimation;