import { useState } from "react";
import HomePageTitleContainer from "~/slices/HomePage/HomePageProjectTitleContainer";
import HomePageBackgroundContainer from "~/slices/HomePage/HomePageProjectBackground";
import HomePageProjectScrollContainer from "~/slices/HomePage/HomePageProjectScrollContainer";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

export type HomePageProjectsData =
  HomepageDocumentDataBodyHomepageProjectSlice[];

interface HomePageProjectsProps {
  data: HomePageProjectsData;
}

function HomePageProjects({ data }: HomePageProjectsProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <section ref={(node) => setContainer(node)} className={"relative"}>
      {container ? (
        <>
          <HomePageBackgroundContainer container={container} data={data} />
          <HomePageTitleContainer container={container} data={data} />
        </>
      ) : null}
      <HomePageProjectScrollContainer data={data} />
    </section>
  );
}

export default HomePageProjects;
