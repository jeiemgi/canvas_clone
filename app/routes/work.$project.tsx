import clsx from "clsx";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { useLockedBody } from "usehooks-ts";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import { SecondaryCTA } from "~/components/CTA";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import { lazyLoadVideos } from "~/hooks/useLazyLoadVideos";
import { useIsScrolledInArea } from "~/hooks/useIsScrolled";
import ProjectHero from "~/components/ProjectHero";
import type { MouseEventHandler } from "react";
import type { LoaderArgs } from "@remix-run/node";
import type { FilledLinkToWebField } from "@prismicio/types";
import { useLayoutEffect } from "react";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.project) throw new Response("Not Found", { status: 404 });
  const client = createClient();
  const page = await client.getByUID("project_page", params.project, {
    fetchLinks: [
      "project_page.roles",
      "project_page.links",
      "project_page.capabilities",
    ],
  });

  if (!page || !page.data) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const details = {
    credits: page.data.credits,
    tables: normalizeProjectDetailsData(page.data.body2),
  };

  return json({
    hero: page.data,
    slices: page.data.body,
    details,
    page,
  });
};

function WorkProjectDetailsButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const isInArea = useIsScrolledInArea(500, 100);

  return (
    <div
      id={"WorkProjectDetailsButton"}
      className={clsx(
        isInArea ? "opacity-100" : "opacity-0",
        "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-5 md:left-8 md:block md:w-auto"
      )}
    >
      <SecondaryCTA className={"min-w-[195px]"} onClick={onClick} border>
        SEE PROJECT DETAILS
      </SecondaryCTA>
    </div>
  );
}

function WorkProject() {
  const location = useLocation();
  const [, setLocked] = useLockedBody(false);
  const { showProjectDetails, toggleProjectDetails } = useNavTheme();
  const { hero } = useLoaderData<typeof loader>();

  useLayoutEffect(() => {
    const videos = document.querySelectorAll("video");
    console.log(videos);

    lazyLoadVideos(videos);
  }, [location.pathname]);

  const toggleModalOpen = () => {
    setLocked(showProjectDetails);
    toggleProjectDetails(!showProjectDetails);
  };

  return (
    <div id={"WorkProjectPage"}>
      <ProjectHero
        animateVideo={true}
        key={`work-hero-${location.pathname}`}
        cta={toggleProjectDetails}
        image={hero.background_image}
        subTitleField={hero.capabilities}
        tableData={hero}
        titleField={hero.title}
        video={{
          poster: hero.reel_cover,
          field: hero.reel as FilledLinkToWebField,
        }}
      />
      <WorkProjectSliceZone key={`work-slices-${location.pathname}`} />
      <WorkProjectDetails
        key={`work-details-${location.pathname}`}
        toggle={toggleProjectDetails}
        isOpen={showProjectDetails}
      />
      <WorkProjectDetailsButton
        onClick={toggleModalOpen}
        key={`work-details-button-${location.pathname}`}
      />
    </div>
  );
}

export default WorkProject;
