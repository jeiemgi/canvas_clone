import { gsap } from "gsap";
import { json } from "@remix-run/node";
import { useRef, useState } from "react";
import { useLocation } from "@remix-run/react";
import { useLayoutEffect, useLazyLoadVideos } from "~/hooks";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import { SecondaryCTA } from "~/components/CTA";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import type { LoaderArgs } from "@remix-run/node";
import easings from "~/lib/easings";
import { useLockedBody } from "usehooks-ts";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";

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
  toggleProjectDetails,
}: {
  toggleProjectDetails: Function;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: "0%",
        scrollTrigger: {
          start: "top bottom",
          end: "top 90%",
          trigger: "#WorkProjectSlices",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      id={"project-details-button"}
      className={
        "fixed bottom-5 flex w-full translate-y-[200%] justify-center transition-opacity md:bottom-5 md:left-8 md:block md:w-auto"
      }
    >
      <SecondaryCTA onClick={() => toggleProjectDetails()}>
        SEE PROJECT DETAILS
      </SecondaryCTA>
    </div>
  );
}

function WorkProject() {
  useLazyLoadVideos();
  const location = useLocation();
  const { showProjectDetails, toggleProjectDetails } = useNavTheme();
  const [, setLocked] = useLockedBody(false);

  const toggleModalOpen = () => {
    toggleProjectDetails(!showProjectDetails);
    setLocked(showProjectDetails);
  };

  return (
    <>
      <WorkProjectHero
        key={`hero-${location.pathname}`}
        toggleProjectDetails={toggleModalOpen}
      />
      <div id={"WorkProjectSlices"}>
        <WorkProjectSliceZone key={`slices-${location.pathname}`} />
      </div>
      <WorkProjectDetails
        toggle={toggleModalOpen}
        isOpen={showProjectDetails}
        key={`details-${location.pathname}`}
      />
      <WorkProjectDetailsButton
        toggleProjectDetails={toggleModalOpen}
        key={`button-${location.pathname}`}
      />
    </>
  );
}

export default WorkProject;
