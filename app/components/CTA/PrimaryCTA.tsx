import clsx from "clsx";
import { Link } from "@remix-run/react";
import styles from "./PrimaryCTA.module.css";
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
      className={clsx(
        styles.ctaButton,
        active ? styles.active : "",
        dark ? styles.dark : "",
        size === "lg" ? styles.lg : "",
        className
      )}
      {...props}
    >
      <div className={styles.inner}>
        <span className={clsx(textStyle, styles.parenthesisL)}>(</span>
        <span className={clsx(textStyle, "px-2 pt-0.5")}>{children}</span>
        <span className={clsx(textStyle, styles.parenthesisR)}>)</span>
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
      className={clsx(
        styles.ctaButton,
        active ? styles.active : "",
        dark ? styles.dark : "",
        size === "lg" ? styles.lg : ""
      )}
      {...props}
    >
      <div className={styles.inner}>
        <span className={clsx(textStyle, styles.parenthesisL)}>(</span>
        <span className={clsx(textStyle, "px-2")}>{children}</span>
        <span className={clsx(textStyle, styles.parenthesisR)}>)</span>
      </div>
    </button>
  );
}
