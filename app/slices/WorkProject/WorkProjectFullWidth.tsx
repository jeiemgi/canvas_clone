import React from "react";
import { Image } from "~/components/Image";
import { Video } from "~/components/Video";
import type { ProjectPageDocumentDataBodyProjectFullWidthSlice } from "types.generated";

interface Props {
  lazy: boolean;
  item: ProjectPageDocumentDataBodyProjectFullWidthSlice;
}

function WorkProjectFullWidth({ item }: Props) {
  if (item.primary.video.link_type === "Media") {
    return (
      <div className={"aspect-video select-none bg-red"}>
        <Video
          autoPlay
          // @ts-ignore
          src={item.primary.video.url}
          poster={item.primary.background.url || ""}
        />
      </div>
    );
  }

  return (
    <Image
      field={item.primary.background}
      className={"w-full select-none object-cover"}
    />
  );
}

export default WorkProjectFullWidth;
