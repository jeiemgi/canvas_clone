import clsx from "clsx";
import { gsap } from "gsap";
import { json } from "@remix-run/node";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useIsScrolled from "~/hooks/useIsScrolled";
import { useLocation } from "@remix-run/react";
import { useLayoutEffect } from "~/hooks";
import { useLockedBody } from "usehooks-ts";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { useEffect, useRef } from "react";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import { SecondaryCTA } from "~/components/CTA";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import imagesLoaded from "imagesloaded";
import { lazyLoadVideos } from "~/hooks/useLazyLoadVideos";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.project) throw new Response("Not Found", { status: 404 });
  const client = createClient();
  const page = await client.getByUID("project_page", params.project, {
    fetchLinks: ["project_page.roles", "project_page.links"],
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

function WorkProjectDetailsButton({ onClick }: { onClick: Function }) {
  const isScrolled = useIsScrolled(500);

  return (
    <div
      className={clsx(
        isScrolled ? "opacity-100" : "opacity-0",
        "absolute bottom-5 flex w-full justify-center transition-opacity md:bottom-5 md:left-8 md:block md:w-auto"
      )}
    >
      <SecondaryCTA id={"project-details-button"} onClick={() => onClick()}>
        SEE PROJECT DETAILS
      </SecondaryCTA>
    </div>
  );
}

function WorkProject() {
  const location = useLocation();
  const [, setLocked] = useLockedBody(false);
  const { showProjectDetails, toggleProjectDetails } = useNavTheme();

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const videos = document.querySelectorAll("video");
    const onLoaded = () => ScrollTrigger.refresh();
    imagesLoaded(images, onLoaded);
    lazyLoadVideos(videos, onLoaded);
  }, []);

  const toggleModalOpen = () => {
    setLocked(showProjectDetails);
    toggleProjectDetails(!showProjectDetails);
  };

  return (
    <div id={"WorkProjectPage"}>
      <WorkProjectHero
        key={`work-hero-${location.pathname}`}
        toggleProjectDetails={toggleModalOpen}
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
