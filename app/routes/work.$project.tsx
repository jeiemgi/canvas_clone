import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "~/lib/prismicClient";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import type { LoaderArgs } from "@remix-run/node";
import type { VideoProps } from "react-html-props";

function Video(props: VideoProps) {
  return <video loop muted autoPlay {...props} />;
}

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.project) throw new Response("Not Found", { status: 404 });

  const client = createClient();
  const page = await client.getByUID("project_page", params.project);

  if (!page.data) {
    throw new Response("Not Found", { status: 404 });
  }

  const { capabilities, background_image, cta, reel, title, links, roles } =
    page.data;

  return json({
    hero: {
      capabilities,
      background_image,
      cta,
      reel,
      title,
      links,
      roles,
    },
    slices: page.data.body,
  });
};

function WorkProject() {
  const { slices } = useLoaderData<typeof loader>();

  return (
    <>
      <WorkProjectHero />
      {slices.map((item, index) => {
        switch (item.slice_type) {
          case "project_full_width":
            return (
              <img
                className={"w-full object-cover"}
                key={`WorkProjectSlice-${index}`}
                alt={item.primary.background.alt || ""}
                src={item.primary.background.url || ""}
              />
            );
          case "project_2_column":
            return (
              <div className={"md:flex"} key={`WorkProjectSlice-${index}`}>
                <img
                  className={"w-full md:w-1/2"}
                  alt={item.primary.left_image.url || ""}
                  src={item.primary.left_image.url || ""}
                />
                <img
                  className={"w-full md:w-1/2"}
                  alt={item.primary.right_image.url || ""}
                  src={item.primary.right_image.url || ""}
                />
              </div>
            );
          case "project_plate_-_videocolor":
            return (
              <div
                key={`WorkProjectSlice-${index}`}
                className={"md:grid-container items-center md:aspect-video"}
                style={{
                  backgroundColor: item.primary.background_color || "#fff000",
                }}
              >
                <div className="aspect-video md:col-span-8 md:col-start-3">
                  <Video src={item.primary.video.url} />
                </div>
              </div>
            );
          case "project_plate_-_videophoto":
            console.log(item.primary.image.url);
            return (
              <div
                key={`WorkProjectSlice-${index}`}
                className={
                  "md:grid-container items-center bg-cover bg-center bg-no-repeat md:aspect-video"
                }
                style={{
                  backgroundImage: `url(${item.primary.image.url})` || "",
                }}
              >
                <div className="aspect-video md:col-span-8 md:col-start-3">
                  <Video src={item.primary.video.url} />
                </div>
              </div>
            );
          default:
            return <span>Unknown Slice Type {item.slice_type}</span>;
        }
      })}
    </>
  );
}

export default WorkProject;
