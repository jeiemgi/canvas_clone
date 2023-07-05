import * as React from "react";
import type { SVGProps } from "react";
const SvgBackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={14}
    fill="none"
    viewBox="0 0 21 14"
    {...props}
  >
    <path d="M8 .5 1 7l7 6.5M1 7h20" />
  </svg>
);
export default SvgBackArrow;
