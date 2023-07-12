import React from "react";
import type { ButtonProps } from "react-html-props";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={
        "label--2 flex items-center justify-center rounded-full bg-black px-8 py-4 text-white"
      }
      {...props}
    >
      {children}
    </button>
  );
}
