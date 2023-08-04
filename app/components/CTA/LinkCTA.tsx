import clsx from "clsx";
import { Link } from "@remix-run/react";
import TextCloneButton from "./TextCloneButton";
import useTextAnimation from "~/components/CTA/useTextAnimation";
import type { ReactNode } from "react";
import type { LinkProps } from "@remix-run/react";

interface Props {
  dark?: boolean;
  children: ReactNode;
}

type LinkCTAProps = Props & LinkProps;

export function LinkCTA({
  dark = false,
  className,
  children,
  ...props
}: LinkCTAProps) {
  const { ref } = useTextAnimation<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      {...props}
      className={clsx(
        className ? className : "body--3",
        "inline-block",
        dark ? "text-black" : "text-white"
      )}
    >
      <TextCloneButton>{children}</TextCloneButton>
    </Link>
  );
}

export function ButtonCTA({ dark = false, children, ...props }: Props) {
  const { ref } = useTextAnimation<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        "body--3 inline-block",
        dark ? "text-black" : "text-white"
      )}
    >
      <TextCloneButton>{children}</TextCloneButton>
    </button>
  );
}

export default LinkCTA;
