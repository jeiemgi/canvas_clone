import React from "react";
import { Image } from "~/components/Image";
import { Video } from "~/components/Video";
import type { ProjectPageDocumentDataBodyProject2ColumnSlice } from "types.generated";

interface Props {
  lazy: boolean;
  item: ProjectPageDocumentDataBodyProject2ColumnSlice;
}

function WorkProject2Column({ item, lazy }: Props) {
  // @ts-ignore
  const leftIsVideo = !!item.primary.left_video.url;
  // @ts-ignore
  const rightIsVideo = !!item.primary.right_video.url;

  return (
    <div className={"md:flex"}>
      {/* RIGHT MEDIA */}
      {leftIsVideo ? (
        <div className={"w-full bg-pure-black md:w-1/2"}>
          <Video
            square
            autoPlay
            lazy={lazy}
            className={"h-full w-full object-cover"}
            // @ts-ignore
            src={item.primary.left_video.url}
          />
        </div>
      ) : (
        <Image
          loading={lazy ? "eager" : "lazy"}
          className={"w-full select-none md:w-1/2"}
          field={item.primary.left_image}
        />
      )}

      {/* RIGHT MEDIA */}
      {rightIsVideo ? (
        <div className={"w-full bg-pure-black md:w-1/2"}>
          <Video
            square
            autoPlay
            lazy={lazy}
            className={"h-full w-full object-cover"}
            // @ts-ignore
            src={item.primary.right_video.url}
          />
        </div>
      ) : (
        <Image
          loading={lazy ? "eager" : "lazy"}
          className={"w-full select-none md:w-1/2"}
          field={item.primary.right_image}
        />
      )}
    </div>
  );
}

export default WorkProject2Column;
