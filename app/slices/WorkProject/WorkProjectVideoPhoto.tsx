import React from "react";
import clsx from "clsx";
import { Video } from "~/components/Video";
import type { ProjectPageDocumentDataBodyProjectPlateVideophotoSlice } from "types.generated";
import { PrismicImage } from "@prismicio/react";

interface Props {
  item: ProjectPageDocumentDataBodyProjectPlateVideophotoSlice;
}

function WorkProjectVideoPhoto({ item }: Props) {
  return (
    <div className={"relative"}>
      <PrismicImage
        loading="lazy"
        field={item.primary.image}
        className={"desktop-only w-full"}
      />
      <div
        className={clsx(
          "md:absolute md:left-0 md:top-0 md:flex md:h-full md:w-full md:items-center md:justify-center"
        )}
      >
        <div
          className={item.primary.square ? "md:max-w-[50%]" : "md:max-w-[80%]"}
        >
          <Video
            autoPlay
            square={item.primary.square}
            src={item.primary.video.url}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkProjectVideoPhoto;
