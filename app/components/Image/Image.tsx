import React from "react";
import { PrismicImage } from "@prismicio/react";
import type { PrismicImageProps } from "@prismicio/react";

function Image(props: PrismicImageProps) {
  return (
    <>
      {/*@ts-ignore*/}
      <PrismicImage {...props} widths={[400, 800, 1600, 1920, 2400, 3200]} />
    </>
  );
}

export default Image;
