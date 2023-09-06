import clsx from "clsx";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";
import { useLockedBody } from "usehooks-ts";
import { useIsScrolledInArea } from "~/hooks/useIsScrolled";
import { useLoaderData, useLocation } from "@remix-run/react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { createClient } from "~/lib/prismicClient";
import { normalizeProjectDetailsData } from "~/lib/projectDetails";
import { SecondaryCTA } from "~/components/CTA";
import WorkProjectSliceZone from "~/slices/WorkProject/WorkProjectSliceZone";
import WorkProjectDetails from "~/slices/WorkProject/WorkProjectDetails";
import ProjectHero from "~/components/ProjectHero";
import type { MouseEventHandler } from "react";
import type { LoaderArgs } from "@remix-run/node";
import type { FilledLinkToWebField } from "@prismicio/types";

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
  const { setTheme } = useNavTheme();
  const location = useLocation();
  const [, setLockedBody] = useLockedBody(false);
  const [showDetails, setShowDetails] = useState(false);
  const { hero } = useLoaderData<typeof loader>();

  const openDetailsModal = () => {
    setTheme("hidden");
    setLockedBody(true);
    setShowDetails(true);
  };

  const closeDetailsModal = () => {
    setTheme("transparent");
    setLockedBody(false);
    setShowDetails(false);
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }, []);

  return (
    <div key={`WorkProjectPage-${location.pathname}`}>
      <ProjectHero
        key={`WorkProjectHero-${location.pathname}`}
        animateVideo={true}
        cta={() => openDetailsModal()}
        image={hero.background_image}
        subTitleField={hero.capabilities}
        tableData={hero}
        titleField={hero.title}
        video={{
          poster: hero.reel_cover,
          field: hero.reel as FilledLinkToWebField,
        }}
      />
      <WorkProjectSliceZone key={`WorkProjectSlices-${location.pathname}`} />
      <WorkProjectDetails
        key={`WorkProjectDetails-${location.pathname}`}
        isOpen={showDetails}
        onClose={closeDetailsModal}
      />
      <WorkProjectDetailsButton
        key={`WorkProjectButton-${location.pathname}`}
        onClick={openDetailsModal}
      />
    </div>
  );
}

export default WorkProject;
