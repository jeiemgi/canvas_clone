import React from "react";
import { Image } from "~/components/Image";
import { Video } from "~/components/Video";
import type { ProjectPageDocumentDataBodyProjectFullWidthSlice } from "types.generated";

interface Props {
  lazy: boolean;
  item: ProjectPageDocumentDataBodyProjectFullWidthSlice;
}

function WorkProjectFullWidth({ item, lazy }: Props) {
  if ("url" in item.primary.video && item.primary.video.url) {
    return (
      <section className={"aspect-video select-none bg-red"}>
        <Video
          autoPlay
          lazy={lazy}
          src={item.primary.video.url}
          poster={item.primary.background.url || ""}
        />
      </section>
    );
  }

  return (
    <section>
      <Image
        loading={lazy ? "eager" : "lazy"}
        field={item.primary.background}
        className={"w-full select-none object-cover"}
      />
    </section>
  );
}

export default WorkProjectFullWidth;
