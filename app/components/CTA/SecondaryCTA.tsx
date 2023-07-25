import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import TextCloneButton from "./TextCloneButton";
import useTextAnimation from "~/components/CTA/useTextAnimation";
import type { ButtonProps } from "react-html-props";
import clsx from "clsx";

interface Props extends ButtonProps {
  dark?: boolean;
  border?: boolean;
  children: string;
}

export function SecondaryCTA({
  dark = false,
  children,
  border = false,
  ...props
}: Props) {
  const { ref } = useTextAnimation<HTMLButtonElement>();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const bg = self.selector ? self.selector(".round-background") : null;
      const tl = gsap.timeline({ paused: true });

      tl.to(bg, {
        scaleX: 1.1,
        duration: 0.3,
        ease: "cubic-bezier(0.20, 0.00, 0.20, 1.00)",
      });

      const mouseEnter = () => tl.play();
      const mouseLeave = () => tl.reverse();

      ref.current?.addEventListener("mouseenter", mouseEnter);
      ref.current?.addEventListener("mouseleave", mouseLeave);
    }, ref);

    return () => ctx.revert();
  }, [ref]);

  return (
    <button
      ref={ref}
      {...props}
      className={"label--2 relative rounded-full px-[1.81rem] py-[1.16rem]"}
    >
      <div
        className={clsx(
          dark ? "bg-black" : "bg-white",
          border ? "border border-black/30 bg-white" : "",
          "round-background absolute left-0 top-0 h-full w-full rounded-full"
        )}
      ></div>
      <TextCloneButton className={clsx(dark ? "text-white" : "text-black")}>
        {children}
      </TextCloneButton>
    </button>
  );
}
