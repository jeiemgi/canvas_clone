import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { json } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import { useLayoutEffect, useLazyLoadVideos } from "~/hooks";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import { SecondaryCTA } from "~/components/CTA";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import type { LoaderArgs } from "@remix-run/node";
import { useLockedBody } from "usehooks-ts";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { useRef } from "react";
import useIsScrolled from "~/hooks/useIsScrolled";
import clsx from "clsx";
import imagesloaded from "imagesloaded";
import { Scroll } from "@react-three/drei";

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

function WorkProjectDetailsButton({ onClick }: { onClick: Function }) {
  const isScrolled = useIsScrolled(500);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = document.getElementById("WorkProjectPage");

      ScrollTrigger.create({
        start: "top top",
        end: "top bottom",
        endTrigger: ".WorkProjectNextProject",
        trigger: trigger,
        pin: ref.current,
        pinSpacing: false,
        markers: true,
      });
    });

    const images = document.querySelectorAll("img");
    imagesloaded(images, () => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
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
  useLazyLoadVideos(() => {
    ScrollTrigger.refresh();
  });

  const location = useLocation();
  const { showProjectDetails, toggleProjectDetails } = useNavTheme();
  const [, setLocked] = useLockedBody(false);

  const toggleModalOpen = () => {
    toggleProjectDetails(!showProjectDetails);
    setLocked(showProjectDetails);
  };

  return (
    <div id={"WorkProjectPage"}>
      <WorkProjectHero
        key={`hero-${location.pathname}`}
        toggleProjectDetails={toggleModalOpen}
      />
      <WorkProjectSliceZone key={`slices-${location.pathname}`} />
      <WorkProjectDetails
        toggle={toggleModalOpen}
        isOpen={showProjectDetails}
        key={`details-${location.pathname}`}
      />
      <WorkProjectDetailsButton
        onClick={toggleModalOpen}
        key={`button-${location.pathname}`}
      />
    </div>
  );
}

export default WorkProject;
