import React from "react";
import clsx from "clsx";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import type { ProjectPageDocumentDataBodyProjectPlateVideophotoSlice } from "types.generated";

interface Props {
  item: ProjectPageDocumentDataBodyProjectPlateVideophotoSlice;
}

function WorkProjectVideoPhoto({ item }: Props) {
  return (
    <section className={"WorkProjectSlice relative"}>
      <Image
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
            // @ts-ignore
            src={item.primary.video.url}
          />
        </div>
      </div>
    </section>
  );
}

export default WorkProjectVideoPhoto;
