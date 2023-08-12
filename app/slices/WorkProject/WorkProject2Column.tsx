import React from "react";
import { Image } from "~/components/Image";
import { Video } from "~/components/Video";
import type { ProjectPageDocumentDataBodyProject2ColumnSlice } from "types.generated";

interface Props {
  item: ProjectPageDocumentDataBodyProject2ColumnSlice;
}

function WorkProject2Column({ item }: Props) {
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
            className={"h-full w-full object-cover"}
            // @ts-ignore
            src={item.primary.left_video.url}
          />
        </div>
      ) : (
        <Image
          loading="eager"
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
            className={"h-full w-full object-cover"}
            // @ts-ignore
            src={item.primary.right_video.url}
          />
        </div>
      ) : (
        <Image
          loading="eager"
          className={"w-full select-none md:w-1/2"}
          field={item.primary.right_image}
        />
      )}
    </div>
  );
}

export default WorkProject2Column;
