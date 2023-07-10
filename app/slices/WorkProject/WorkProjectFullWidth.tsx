import React from "react";
import { PrismicImage } from "@prismicio/react";
import type { ProjectPageDocumentDataBodyProjectFullWidthSlice } from "types.generated";

interface Props {
  item: ProjectPageDocumentDataBodyProjectFullWidthSlice;
}

function WorkProjectFullWidth({ item }: Props) {
  return (
    <PrismicImage
      loading="lazy"
      field={item.primary.background}
      className={"w-full select-none object-cover"}
    />
  );
}

export default WorkProjectFullWidth;
