import React from "react";
import clsx from "clsx";

interface Props {
  as?: string;
  black?: boolean;
  children: React.ReactNode;
  className?: string;
  textAlign?: "text-left" | "text-center" | "text-right";
  verticalLeft?: boolean;
  verticalRight?: boolean;
}

function TextBlur({
  as: Tag = "h1",
  children,
  textAlign,
  className,
  verticalLeft = false,
  verticalRight = false,
  black = false,
}: Props) {
  const wrapperClassNames = clsx(
    "text-blur display--2--vw relative",
    textAlign,
    {
      black,
      verticalLeft,
      verticalRight,
    },
    className
  );

  return <Tag className={wrapperClassNames}>{children}</Tag>;
}

export default TextBlur;
