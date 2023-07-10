import React from "react";
import type { ProjectPageDocumentDataBodyProjectplatePicturecolorSlice } from "types.generated";
import { PrismicImage } from "@prismicio/react";

interface Props {
  item: ProjectPageDocumentDataBodyProjectplatePicturecolorSlice;
}

function WorkProjectPictureColor({ item }: Props) {
  return (
    <div className={"md:grid-container"}>
      <div
        className={
          "flex items-center md:col-span-8 md:col-start-3 md:min-h-screen"
        }
        style={{
          backgroundColor: item.primary.background_color || "white",
        }}
      >
        <PrismicImage
          field={item.primary.image}
          className={"w-full select-none"}
        />
      </div>
    </div>
  );
}

export default WorkProjectPictureColor;
