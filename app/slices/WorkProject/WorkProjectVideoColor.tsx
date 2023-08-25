import React from "react";
import clsx from "clsx";
import { Video } from "~/components/Video";
import type { ProjectPageDocumentDataBodyProjectPlateVideocolorSlice } from "types.generated";

interface Props {
  lazy: boolean;
  item: ProjectPageDocumentDataBodyProjectPlateVideocolorSlice;
}

function WorkProjectVideoColor({ lazy, item }: Props) {
  const containerClassNames = item.primary.square
    ? "md:min-h-screen"
    : "md:aspect-video";

  const contentClassNames = item.primary.square
    ? "md:col-span-6 md:col-start-4"
    : "md:col-span-8 md:col-start-3 md:aspect-video bg-black";

  return (
    <div
      className={clsx("md:grid-container items-center", containerClassNames)}
      style={{
        backgroundColor: item.primary.background_color || "#fff000",
      }}
    >
      <div className={contentClassNames}>
        <Video
          autoPlay
          lazy={lazy}
          poster={item.primary.cover.url || ""}
          // @ts-ignore
          src={item.primary.video.url}
        />
      </div>
    </div>
  );
}

export default WorkProjectVideoColor;
