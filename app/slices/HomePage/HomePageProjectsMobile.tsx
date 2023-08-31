import React from "react";
import { asText } from "@prismicio/richtext";
import { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

interface Props {
  data: HomePageProjectsData;
}

function HomePageProjectsMobile({ data }: Props) {
  return (
    <section>
      {/*MOBILE ONLY TITLES*/}
      {data.map((project, index) => (
        <div
          key={`HomePageBackground-mobileItem-${project.id}`}
          className="mobile-only--flex pt-headerHeightMobile absolute h-full flex-col pb-28"
        >
          <div className="grid-container h-fit w-full pt-5">
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

          <div className={"flex grow items-center justify-center"}>
            <h3 className={"heading--3 text-center"}>
              {`( ${asText(project.primary.cta)} )`}
            </h3>
          </div>

          <div className="grid-container mobile-only--grid h-fit grow-0">
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
