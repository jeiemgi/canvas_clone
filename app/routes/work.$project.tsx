import { json } from "@remix-run/node";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.project) throw new Response("Not Found", { status: 404 });
  const client = createClient();
  const page = await client.getByUID("project_page", params.project);

  if (!page || !page.data) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
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

  const details = {
    credits: page.data.credits,
    tables: normalizeProjectDetailsData(page.data.body2),
  };

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
    details,
    page,
  });
};

function WorkProject() {
  return (
    <>
      <WorkProjectHero />
      <WorkProjectSliceZone />
      <WorkProjectDetails />
    </>
  );
}

export default WorkProject;
