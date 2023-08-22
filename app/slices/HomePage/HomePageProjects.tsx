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
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id={"home-projects-container"}
      className={"relative"}
    >
      <HomePageBackgroundContainer data={data} />
      <HomePageTitleContainer data={data} />
      <HomePageProjectScrollContainer data={data} />
    </section>
  );
}

export default HomePageProjects;
