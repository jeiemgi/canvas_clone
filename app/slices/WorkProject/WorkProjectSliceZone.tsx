import React from "react";
import { useLoaderData } from "@remix-run/react";
import WorkProjectFullWidth from "~/slices/WorkProject/WorkProjectFullWidth";
import WorkProject2Column from "~/slices/WorkProject/WorkProject2Column";
import WorkProjectVideoColor from "~/slices/WorkProject/WorkProjectVideoColor";
import WorkProjectVideoPhoto from "~/slices/WorkProject/WorkProjectVideoPhoto";
import WorkProjectPictureColor from "~/slices/WorkProject/WorkProjectPictureColor";
import WorkProjectNextProject from "~/slices/WorkProject/WorkProjectNextProject";
import type { loader } from "~/routes/work.$project";

function getKey(type: string, index: number) {
  return `WorkProject--${type}-${index}`;
}

function WorkProjectSliceZone() {
  const { slices } = useLoaderData<typeof loader>();
  return (
    <>
      {slices.map((item, index) => {
        const lazy = false;

        switch (item.slice_type) {
          case "project_full_width":
            return (
              <WorkProjectFullWidth
                item={item}
                lazy={lazy}
                key={getKey(item.slice_type, index)}
              />
            );
          case "project_2_column":
            return (
              <WorkProject2Column
                lazy={lazy}
                item={item}
                key={getKey(item.slice_type, index)}
              />
            );
          case "project_plate_-_videocolor":
            return (
              <WorkProjectVideoColor
                item={item}
                lazy={lazy}
                key={getKey(item.slice_type, index)}
              />
            );
          case "project_plate_-_videophoto":
            return (
              <WorkProjectVideoPhoto
                lazy={lazy}
                item={item}
                key={getKey(item.slice_type, index)}
              />
            );
          case "projectplate_-_picturecolor":
            return (
              <WorkProjectPictureColor
                lazy={lazy}
                item={item}
                key={getKey(item.slice_type, index)}
              />
            );
          case "project_next_banner":
            return (
              <WorkProjectNextProject
                lazy={lazy}
                item={item}
                key={getKey(item.slice_type, index)}
              />
            );
          default:
            return (
              <div key={getKey(item.slice_type, index)} className={"bg-red"}>
                <h2 className={"heading--2"}>
                  Unknown Slice Type {item.slice_type}
                </h2>
              </div>
            );
        }
      })}
    </>
  );
}

export default WorkProjectSliceZone;
