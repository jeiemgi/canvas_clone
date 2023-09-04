import React from "react";
import type { ProjectPageDocumentDataBodyProjectplatePicturecolorSlice } from "types.generated";
import { Image } from "~/components/Image";

interface Props {
  lazy: boolean;
  item: ProjectPageDocumentDataBodyProjectplatePicturecolorSlice;
}

function WorkProjectPictureColor({ item, lazy }: Props) {
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
        <Image
          loading={lazy ? "eager" : "lazy"}
          field={item.primary.image}
          className={"w-full select-none"}
        />
      </div>
    </div>
  );
}

export default WorkProjectPictureColor;
