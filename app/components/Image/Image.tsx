import { forwardRef } from "react";
import { PrismicImage } from "@prismicio/react";
import type { ForwardedRef } from "react";
import type { PrismicImageProps } from "@prismicio/react";

export const Image = forwardRef(
  (
    { field, imgixParams, ...props }: PrismicImageProps,
    ref: ForwardedRef<HTMLImageElement>
  ) => {
    return (
      <PrismicImage
        // @ts-ignore
        ref={ref}
        fallbackAlt={""}
        field={field}
        widths={props.widths ? props.widths : [800, 1000, 1600, 1920, 2400]}
        imgixParams={{ auto: ["format"], ...imgixParams }}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
