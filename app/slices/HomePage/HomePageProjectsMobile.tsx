import React from "react";
import { asText } from "@prismicio/richtext";
import { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import { Image } from "~/components/Image";

interface Props {
  data: HomePageProjectsData;
}

function HomePageProjectsMobile({ data }: Props) {
  return (
    <section className={"mobile-only"}>
      {/*MOBILE ONLY TITLES*/}
      {data.map((project, index) => (
        <div
          key={`HomePageBackground-mobileItem-${project.id}`}
          className="pt-headerHeightMobile relative flex h-screen flex-col pb-28 text-white"
        >
          <div className={"absolute inset-0 flex h-full w-full items-end"}>
            <Image
              field={project.primary.background_image}
              className={"h-full w-full object-cover"}
            />
          </div>

          <div className="grid-container relative h-fit w-full pt-5">
            <div className="col-span-3">
              <h3 className={"heading--3"}>
                {asText(project.primary.title)}
                <br />
                CASE STUDY
              </h3>
            </div>

            <div className="col-span-1 col-start-4">
              <h3 className={"heading--3 text-right"}>
                {`${index + 1} / ${data.length}`}
              </h3>
            </div>
          </div>

          <div className={"relative flex grow items-center justify-center"}>
            <h3 className={"heading--3 text-center"}>
              {`( ${asText(project.primary.cta)} )`}
            </h3>
          </div>

          <div className="grid-container relative h-fit grow-0">
            <div className="col-span-4">
              <h3 className={"heading--3 mb-12"}>
                {asText(project.primary.capabilities)}
              </h3>
              <p className={"body--2"}>{asText(project.primary.description)}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomePageProjectsMobile;
