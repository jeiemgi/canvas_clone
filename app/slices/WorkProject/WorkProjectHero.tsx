import ProjectHero from "~/components/ProjectHero";
import { useLoaderData } from "@remix-run/react";
import type { MouseEventHandler } from "react";
import type { FilledLinkToWebField } from "@prismicio/types";
import type { loader } from "~/routes/work.$project";

function WorkProjectHero({
  toggleProjectDetails,
}: {
  toggleProjectDetails?: MouseEventHandler;
}) {
  const { hero } = useLoaderData<typeof loader>();

  return <section className={"relative"}></section>;
}

export default WorkProjectHero;
