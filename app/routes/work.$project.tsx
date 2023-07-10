import { json } from "@remix-run/node";
import { createClient } from "~/lib/prismicClient";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.project) throw new Response("Not Found", { status: 404 });

  const client = createClient();
  const page = await client.getByUID("project_page", params.project);

  if (!page.data) {
    throw new Response("Not Found", { status: 404 });
  }

  const {
    background_image,
    capabilities,
    cta,
    links,
    reel,
    reel_cover,
    roles,
    title,
  } = page.data;

  return json({
    hero: {
      background_image,
      capabilities,
      cta,
      links,
      reel,
      reel_cover,
      roles,
      title,
    },
    slices: page.data.body,
  });
};

function WorkProject() {
  return (
    <>
      <WorkProjectHero />
      <WorkProjectSliceZone />
    </>
  );
}

export default WorkProject;
