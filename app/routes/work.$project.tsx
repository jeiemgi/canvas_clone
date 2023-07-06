import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "~/lib/prismicClient";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import type { LoaderArgs } from "@remix-run/node";

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
    <div>
      <WorkProjectHero />
      {slices.map((item) => {
        switch (item.slice_type) {
          case "project_full_width":
            return (
              <img
                alt={item.primary.background.alt || ""}
                src={item.primary.background.url || ""}
              />
            );
          case "project_2_column":
            return (
              <div className={"md:flex"}>
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
          default:
            return <span>Unknown Slice Type {item.slice_type}</span>;
        }
      })}
    </div>
  );
}

export default WorkProject;
