import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "~/lib/prismicClient";
import { useLayoutEffect } from "~/hooks";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { findSliceByType, findAllSlicesByType } from "~/lib/prismicUtils";
import Layout from "~/components/Layout/Layout";
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePagePortfolioDesktop from "~/slices/HomePage/HomePagePortfolioDesktop";
import HomePagePortfolioMobile from "~/slices/HomePage/HomePagePortfolioMobile";
import HomePageProjects from "~/slices/HomePage/HomePageProjects";
import HomePageTable from "~/slices/HomePage/HomePageTable";
import HomePageReviews from "~/slices/HomePage/HomePageReviews";
import type { V2_MetaFunction } from "@remix-run/node";
import type {
  HomepageDocumentDataBodyHomepageHeroSlice,
  HomepageDocumentDataBodyHomepageProjectSlice,
} from "types.generated";
import { gsap } from "gsap";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Canvas Studio Website V4" }];
};

export const loader = async () => {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "top-navigation");
  const homepage = await client.getSingle("homepage");

  const homeHero = findSliceByType(
    homepage,
    "homepage_hero"
  ) as HomepageDocumentDataBodyHomepageHeroSlice;

  const homeProjects = findAllSlicesByType(
    homepage,
    "homepage_project"
  ) as HomepageDocumentDataBodyHomepageProjectSlice[];

  return defer({
    navigation,
    homepage,
    slices: {
      homeHero,
      homeProjects,
    },
  });
};

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function HomePage() {
  const { homepage, slices } = useLoaderData<typeof loader>();
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 0.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Layout>
          <HomePageHero data={slices.homeHero} />
          <HomePageProjects data={slices.homeProjects} />
          {homepage.data.body.map((slice) => {
            switch (slice.slice_type) {
              case "table":
                return <HomePageTable key={slice.id} data={slice} />;
              case "homepage_portfolio_slice":
                return <HomePagePortfolioMobile key={slice.id} data={slice} />;
              case "homepage_portfolio_desktop":
                return <HomePagePortfolioDesktop key={slice.id} data={slice} />;
              default:
                return null;
            }
          })}
          <HomePageReviews />
        </Layout>
      </div>
    </div>
  );
}
