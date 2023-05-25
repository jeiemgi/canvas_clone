import * as React from "react";
import type { SVGProps } from "react";
const SvgCanvasLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M15.999 4.001H4v11.997l-4 4V20 0h19.999l-4 4.001Zm4 15.998V8.002l4-4.001H24V24H4.001l4-4.001H20Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCanvasLogomark;
