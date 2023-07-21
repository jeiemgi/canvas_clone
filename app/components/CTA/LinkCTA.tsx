import clsx from "clsx";
import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "~/hooks";
import { Link } from "@remix-run/react";
import TextCloneButton from "./TextCloneButton";
import type { LinkProps } from "@remix-run/react";

interface Props extends LinkProps {
  dark?: boolean;
  children: string;
}

function LinkCTA({ dark = false, children, ...props }: Props) {
  const el = useRef<HTMLAnchorElement>(null);

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

      const mouseEnter = () => tl.play();
      const mouseLeave = () => tl.reverse();

      el.current?.addEventListener("mouseenter", mouseEnter);
      el.current?.addEventListener("mouseleave", mouseLeave);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Link
      ref={el}
      {...props}
      className={clsx("body--3 bg-red", dark ? "text-black" : "text-white")}
    >
      <TextCloneButton>{children}</TextCloneButton>
    </Link>
  );
}

export default LinkCTA;
