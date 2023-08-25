import React from "react";
import { PrismicImage } from "@prismicio/react";
import type { PrismicImageProps } from "@prismicio/react";

export type ImageProps = PrismicImageProps;

export function Image({ ref, widths, ...props }: ImageProps) {
  return (
    // @ts-ignore
    <PrismicImage
      fallbackAlt={""}
      widths={[800, 1000, 1600, 1920, 2400]}
      imgixParams={{ auto: ["format"] }}
      {...props}
    />
  );
}
