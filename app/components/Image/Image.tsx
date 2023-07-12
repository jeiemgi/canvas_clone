import React from "react";
import { PrismicImage } from "@prismicio/react";
import type { PrismicImageProps } from "@prismicio/react";

function Image({ ref, widths, ...props }: PrismicImageProps) {
  return (
    // @ts-ignore
    <PrismicImage
      fallbackAlt={""}
      widths={[800, 1600, 1920, 2400, 3200]}
      imgixParams={{ auto: ["format"] }}
      {...props}
    />
  );
}

export default Image;
