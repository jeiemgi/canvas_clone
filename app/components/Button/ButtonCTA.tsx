import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import type { ButtonProps } from "react-html-props";

export function ButtonCta({ children, ...props }: ButtonProps) {
  return (
    <button className={"heading--3"} {...props}>
      <span className={"relative"}>( </span>
      {children}
      <span> )</span>
    </button>
  );
}

export function LinkCTA({ children, ...props }: LinkProps) {
  return (
    <Link className={"heading--3"} {...props}>
      <span className={"relative"}>( </span>
      {children}
      <span> )</span>
    </Link>
  );
}

export default ButtonCta;
