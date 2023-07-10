import React from "react";
import { useLoaderData } from "@remix-run/react";
import WorkProjectFullWidth from "~/slices/WorkProject/WorkProjectFullWidth";
import WorkProject2Column from "~/slices/WorkProject/WorkProject2Column";
import WorkProjectVideoColor from "~/slices/WorkProject/WorkProjectVideoColor";
import WorkProjectVideoPhoto from "~/slices/WorkProject/WorkProjectVideoPhoto";
import WorkProjectPictureColor from "~/slices/WorkProject/WorkProjectPictureColor";
import WorkProjectNextProject from "~/slices/WorkProject/WorkProjectNextProject";
import type { loader } from "~/routes/work.$project";

function WorkProjectSliceZone() {
  const { slices } = useLoaderData<typeof loader>();

  return (
    <>
      {slices.map((item, index) => {
        switch (item.slice_type) {
          case "project_full_width":
            return (
              <WorkProjectFullWidth
                item={item}
                key={`WorkProjectSlice-${index}`}
              />
            );
          case "project_2_column":
            return (
              <WorkProject2Column
                item={item}
                key={`WorkProjectSlice-${index}`}
              />
            );
          case "project_plate_-_videocolor":
            return (
              <WorkProjectVideoColor
                item={item}
                key={`WorkProjectSlice-${index}`}
              />
            );
          case "project_plate_-_videophoto":
            return (
              <WorkProjectVideoPhoto
                item={item}
                key={`WorkProjectSlice-${index}`}
              />
            );
          case "projectplate_-_picturecolor":
            return (
              <WorkProjectPictureColor
                item={item}
                key={`WorkProjectSlice-${index}`}
              />
            );
          case "project_next_banner":
            return (
              <WorkProjectNextProject
                item={item}
                key={`WorkProjectSlice-${index}`}
              />
            );
          default:
            return <span>Unknown Slice Type {item.slice_type}</span>;
        }
      })}
    </>
  );
}

export default WorkProjectSliceZone;
