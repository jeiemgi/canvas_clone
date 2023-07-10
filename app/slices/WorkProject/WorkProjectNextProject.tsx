import React from "react";
import { PrismicImage } from "@prismicio/react";
import type { ProjectPageDocumentDataBodyProjectNextBannerSlice } from "types.generated";
import { Link } from "@remix-run/react";

interface Props {
  item: ProjectPageDocumentDataBodyProjectNextBannerSlice;
}

function WorkProjectNextProject({ item }: Props) {
  return (
    <Link to={`/work/${item.primary.slug}` ?? "#"} prefetch={"render"}>
      <div className={"relative"}>
        <PrismicImage
          loading={"lazy"}
          className={"w-full object-cover md:h-screen"}
          field={item.primary.background_image1}
        />

        <div className={"absolute top-0 h-max pl-4 pt-5 md:p-8"}>
          <h3 className="heading--3 text-white">
            NEXT PROJECT <br />
            {item.primary.title1}
          </h3>
        </div>

        <div className="mobile-only pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <h3 className="heading--3 text-white">{`( VIEW PROJECT )`}</h3>
        </div>

        <div className={"absolute bottom-0 h-max pb-5 pl-4 md:p-8"}>
          <h3 className="heading--3 text-white">
            {item.primary.capabilities1}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default WorkProjectNextProject;
