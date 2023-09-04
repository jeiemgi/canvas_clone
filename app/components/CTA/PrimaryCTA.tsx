import clsx from "clsx";
import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import type { ButtonProps } from "react-html-props";

interface Props {
  size?: "sm" | "lg";
  dark?: boolean;
  active?: boolean;
}

type PrimaryCTALink = Props & LinkProps;

export function PrimaryCTALink({
  size = "sm",
  dark = false,
  active = false,
  children,
  className,
  ...props
}: PrimaryCTALink) {
  const textStyle = size === "sm" ? "heading--3" : "heading--1";

  return (
    <Link
      className={clsx("PrimaryCTAButton", {
        "PrimaryCTAButton--active": active,
        "PrimaryCTAButton--dark": dark,
        "PrimaryCTAButton--lg": size === "lg",
      })}
      {...props}
    >
      <div className={"PrimaryCTAButton__inner"}>
        <span className={clsx(textStyle, "PrimaryCTAButton__parenthesisL")}>
          (
        </span>
        <span className={clsx(textStyle, "px-2")}>{children}</span>
        <span className={clsx(textStyle, "PrimaryCTAButton__parenthesisR")}>
          )
        </span>
      </div>
    </Link>
  );
}

type PrimaryCTAButton = Props & ButtonProps;

export function PrimaryCTAButton({
  size = "sm",
  dark = false,
  active = false,
  children,
  ...props
}: PrimaryCTAButton) {
  const textStyle = size === "sm" ? "heading--3" : "heading--1";

  return (
    <button
      className={clsx("PrimaryCTAButton", {
        "PrimaryCTAButton--active": active,
        "PrimaryCTAButton--dark": dark,
        "PrimaryCTAButton--lg": size === "lg",
      })}
      {...props}
    >
      <div className={clsx("PrimaryCTAButton__inner", textStyle)}>
        <span className={"PrimaryCTAButton__parenthesisL"}>(</span>
        <span className={clsx(textStyle, "px-2")}>{children}</span>
        <span className={"PrimaryCTAButton__parenthesisR"}>)</span>
      </div>
    </button>
  );
}
