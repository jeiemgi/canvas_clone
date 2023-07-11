import React from "react";
import type { ProjectPageDocumentDataBodyProjectFullWidthSlice } from "types.generated";
import Image from "~/components/Image/Image";

interface Props {
  item: ProjectPageDocumentDataBodyProjectFullWidthSlice;
}

function WorkProjectFullWidth({ item }: Props) {
  return (
    <Image
      loading="lazy"
      field={item.primary.background}
      className={"w-full select-none object-cover"}
    />
  );
}

export default WorkProjectFullWidth;
