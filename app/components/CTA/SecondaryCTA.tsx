import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "~/hooks";
import TextCloneButton from "./TextCloneButton";
import type { ButtonProps } from "react-html-props";

interface Props extends ButtonProps {
  border?: boolean;
  children: string;
}

function SecondaryCta({ children, border = false, ...props }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ paused: true });
      const clone = self?.selector ? self?.selector(".clone") : null;
      const content = self?.selector ? self?.selector(".content") : null;

      tl.to([content, clone], {
        y: "-100%",
        duration: 0.2,
        ease: "cubic-bezier(0.20, 0.00, 0.20, 1.00)",
      });

      tl.to(
        btnRef.current,
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

      btnRef.current?.addEventListener("mouseenter", mouseEnter);
      btnRef.current?.addEventListener("mouseleave", mouseLeave);
    }, btnRef);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={btnRef}
      {...props}
      className={
        "label--2 rounded-full border border-black/30 bg-white px-[1.81rem] py-[1.16rem]"
      }
    >
      <TextCloneButton>SEE PROJECT DETAILS</TextCloneButton>
    </button>
  );
}

export default SecondaryCta;
