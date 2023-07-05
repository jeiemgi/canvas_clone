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
    <div className={"min-h-screen bg-white"}>
      <WorkProjectHero />
    </div>
  );
}

export default WorkProject;
