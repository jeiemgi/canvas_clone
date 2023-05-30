import Layout from "~/components/Layout/Layout";
import HomePageCapabilities from "~/slices/HomePage/HomePageCapabilities";
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePagePortfolio from "~/slices/HomePage/HomePagePortfolio";
import HomePageProjects from "~/slices/HomePage/HomePageProject";
import HomePageQuote from "~/slices/HomePage/HomePageQuote";
import HomePageReviews from "~/slices/HomePage/HomePageReviews";
import background from "public/img/home-background.png";
import { client } from "~/lib/prismicClient";
import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Canvas Studio Website V4" }];
};

export const loader = async () => {
  const data = await client.get("homepage");
  return {
    data,
  };
};

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);

  return (
    <Layout>
      <main>
        <div
          className={"w-full bg-black bg-contain bg-repeat-y"}
          style={{ backgroundImage: `url('${background}')` }}
        >
          <HomePageHero />
          <HomePageQuote />
        </div>
        <HomePageProjects />
        <HomePageCapabilities />
        <HomePagePortfolio />
        <HomePageReviews />
      </main>
    </Layout>
  );
}
