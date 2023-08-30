import { forwardRef } from "react";
import { PrismicImage } from "@prismicio/react";
import type { ForwardedRef } from "react";
import type { PrismicImageProps } from "@prismicio/react";

export const Image = forwardRef(
  (
    { field, ...props }: PrismicImageProps,
    ref: ForwardedRef<HTMLImageElement>
  ) => {
    return (
      <PrismicImage
        // @ts-ignore
        ref={ref}
        fallbackAlt={""}
        widths={[800, 1000, 1600, 1920, 2400]}
        imgixParams={{ auto: ["format"] }}
        field={field}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
