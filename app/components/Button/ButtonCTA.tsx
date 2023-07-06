import React from "react";

import type { ButtonProps } from "react-html-props";

function ButtonCta({ children, ...props }: ButtonProps) {
  return (
    <button className={"body--1"} {...props}>
      <span className={"relative"}>( </span>
      {children}
      <span> )</span>
    </button>
  );
}

export default ButtonCta;
