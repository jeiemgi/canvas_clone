import { json } from "@remix-run/node";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import type { LoaderArgs } from "@remix-run/node";
import clsx from "clsx";
import { SecondaryCTA } from "~/components/CTA";
import useIsScrolled from "~/hooks/useIsScrolled";
import { useSearchParams } from "@remix-run/react";

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
  const isScrolled = useIsScrolled();
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <WorkProjectHero />
      <WorkProjectSliceZone />
      <WorkProjectDetails />
      <div
        className={clsx(
          "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-0 md:left-0 md:block md:w-auto md:pb-5 md:pl-8",
          isScrolled ? "opacity-100" : "md:opacity-0"
        )}
      >
        <SecondaryCTA onClick={() => setSearchParams("projectDetails=true")}>
          SEE PROJECT DETAILS
        </SecondaryCTA>
      </div>
    </>
  );
}

export default WorkProject;
