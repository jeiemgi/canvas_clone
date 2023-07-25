import { gsap } from "gsap";
import { useLayoutEffect } from "~/hooks";
import TextCloneButton from "./TextCloneButton";
import useTextAnimation from "~/components/CTA/useTextAnimation";
import type { ButtonProps } from "react-html-props";

interface Props extends ButtonProps {
  border?: boolean;
  children: string;
}

export function SecondaryCTA({ children, border = false, ...props }: Props) {
  const { ref } = useTextAnimation<HTMLButtonElement>();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(
        ref.current,
        {
          paddingLeft: "3rem",
          paddingRight: "3rem",
          duration: 0.2,
          ease: "cubic-bezier(0.20, 0.00, 0.20, 1.00)",
        },
        0
      );
      const mouseEnter = () => tl.play();
      const mouseLeave = () => tl.reverse();
      ref.current?.addEventListener("mouseenter", mouseEnter);
      ref.current?.addEventListener("mouseleave", mouseLeave);
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={ref}
      {...props}
      className={
        "label--2 rounded-full border border-black/30 bg-white px-[1.81rem] py-[1.16rem]"
      }
    >
      <TextCloneButton>{children}</TextCloneButton>
    </button>
  );
}
