import React from "react";
import clsx from "clsx";

interface Props {
  verticalLeft?: boolean;
  verticalRight?: boolean;
  black?: boolean;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  as?: string;
}

function TextBlur({
  as: Tag = "h1",
  children,
  align = "left",
  verticalRight = false,
  verticalLeft = false,
  black = false,
}: Props) {
  const textAlignment =
    align === "left"
      ? "text-left"
      : align === "center"
      ? "text-center"
      : "text-right";
  const alignments = align === "left" ? "left-0" : "right-0";

  return (
    <Tag
      className={clsx(
        "relative w-full text-blur-top display--2",
        textAlignment,
        {
          black,
          verticalLeft,
          verticalRight,
        }
      )}
    >
      {children}
      <span
        className={clsx(`text-blur-bottom-2`, alignments, {
          black,
          verticalLeft,
          verticalRight,
        })}
      >
        {children}
      </span>
      <span
        className={clsx(`text-blur-bottom`, alignments, {
          black,
          verticalLeft,
          verticalRight,
        })}
      >
        {children}
      </span>
    </Tag>
  );
}

export default TextBlur;
