import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={"relative"}>
      <HomePageBackgroundContainer container={ref} data={data} />
      <HomePageProjectScrollContainer data={data} />
      <HomePageTitleContainer container={ref} data={data} />
    </section>
  );
}

export default HomePageProjects;
