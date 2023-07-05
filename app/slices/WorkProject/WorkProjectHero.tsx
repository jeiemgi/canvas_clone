import React from "react";
import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/work.$project";
import { RichText } from "~/components/RichText";

function WorkProjectHero() {
  const { hero } = useLoaderData<typeof loader>();

  return (
    <div className={"relative min-h-screen"}>
      <img
        alt={"Background"}
        className={"absolute left-0 top-0 h-full w-full object-cover"}
        src={hero.background_image.url || ""}
      />

      <div className="grid-container relative pt-header">
        <div className={"col-span-4 py-12"}>
          <RichText field={hero.title} />
        </div>
      </div>
    </div>
  );
}

export default WorkProjectHero;
