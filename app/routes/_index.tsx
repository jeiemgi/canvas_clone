import Layout from "~/components/Layout/Layout";
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePageProject from "~/slices/HomePage/HomePageProject";
import HomePageCapabilities from "~/slices/HomePage/HomePageCapabilities";

import HomePagePortfolio from "~/slices/HomePage/HomePagePortfolio";
import HomePageReviews from "~/slices/HomePage/HomePageReviews";

import { createClient } from "~/lib/prismicClient";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Canvas Studio Website V4" }];
};
export const loader = async () => {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "top-navigation");
  const homepage = await client.getByType("homepage");

  return json({
    navigation,
    homepage,
  });
};

export default function HomePage() {
  const { homepage } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main>
        {homepage.results.map((result) => {
          return result.data.body.map((slice) => {
            switch (slice.slice_type) {
              case "homepage_hero":
                return <HomePageHero key={slice.id} data={slice} />;
              case "homepage_project":
                return <HomePageProject key={slice.id} data={slice} />;
              case "table":
                return <HomePageCapabilities key={slice.id} data={slice} />;
              default:
                return null;
            }
          });
        })}
        <HomePagePortfolio />
        <HomePageReviews />
      </main>
    </Layout>
  );
}
