import HomePageProjectScrollContainer from "~/slices/HomePage/HomePageProjectScrollContainer";
import HomePageProjectsMobile from "~/slices/HomePage/HomePageProjectsMobile";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

export type HomePageProjectsData =
  HomepageDocumentDataBodyHomepageProjectSlice[];

interface HomePageProjectsProps {
  data: HomePageProjectsData;
}

function HomePageProjects({ data }: HomePageProjectsProps) {
  return (
    <section className={"relative"}>
      <HomePageProjectScrollContainer data={data} />
      <HomePageProjectsMobile data={data} />
    </section>
  );
}

export default HomePageProjects;
