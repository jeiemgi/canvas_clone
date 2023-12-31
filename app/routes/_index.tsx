import { defer } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { createClient } from "~/lib/prismicClient";
import { findAllSlicesByType } from "~/lib/prismicUtils";
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePagePortfolioDesktop from "~/slices/HomePage/HomePagePortfolioDesktop";
import HomePagePortfolioMobile from "~/slices/HomePage/HomePagePortfolioMobile";
import HomePageProjects from "~/slices/HomePage/HomePageProjects";
import HomePageTable from "~/slices/HomePage/HomePageTable";
import HomePageReviews from "~/slices/HomePage/HomePageReviews";
import type { MetaFunction } from "@remix-run/node";
import HomePageQuote from "~/slices/HomePage/HomePageQuote";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [{ title: "Canvas Studio Website V4" }];
};

export const loader = async () => {
  const client = createClient();
  const homepage = await client.getSingle("homepage", {
    fetchLinks: ["project_page.roles", "project_page.links"],
  });
  const homeProjects = findAllSlicesByType(homepage, "homepage_project");
  return defer({
    homepage,
    slices: {
      homeProjects,
    },
  });
};

export default function HomePage() {
  const { homepage, slices } = useLoaderData<typeof loader>();

  return (
    <main>
      <HomePageHero />
      <HomePageQuote />
      <HomePageProjects data={slices.homeProjects} />
      {homepage.data.body.map((slice) => {
        switch (slice.slice_type) {
          case "table":
            return <HomePageTable key={slice.id} data={slice} />;
          case "homepage_portfolio_slice":
            return <HomePagePortfolioMobile key={slice.id} data={slice} />;
          case "homepage_portfolio_desktop":
            return <HomePagePortfolioDesktop key={slice.id} data={slice} />;
          case "home_reviews":
            return <HomePageReviews key={slice.id} data={slice} />;
          default:
            return null;
        }
      })}
      <Footer />
    </main>
  );
}
