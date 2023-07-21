import styles from "./PrimaryCTA.module.css";
import type { ButtonProps } from "react-html-props";
import clsx from "clsx";

interface Props extends ButtonProps {
  size?: "sm" | "lg";
  dark?: boolean;
}

function PrimaryCta({ size = "sm", dark = false, children, ...props }: Props) {
  const textStyle = size === "sm" ? "heading--3" : "heading--1";
  return (
    <button
      className={clsx(
        styles.ctaButton,
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

export default PrimaryCta;
