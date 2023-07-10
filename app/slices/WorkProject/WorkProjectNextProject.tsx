import React from "react";
import { PrismicImage } from "@prismicio/react";

interface Props {
  item: never;
}

function WorkProjectNextProject({ item }: Props) {
  return (
    <div>
      <PrismicImage loading={"lazy"} className={"w-full"} />
    </div>
  );
}

export default WorkProjectNextProject;
