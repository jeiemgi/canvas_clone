import { defer, json } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { createClient } from "~/lib/prismicClient";
import Layout from "~/components/Layout/Layout";
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePagePortfolioDesktop from "~/slices/HomePage/HomePagePortfolioDesktop";
import HomePagePortfolioMobile from "~/slices/HomePage/HomePagePortfolioMobile";
import HomePageProject from "~/slices/HomePage/HomePageProject";
import HomePageReviews from "~/slices/HomePage/HomePageReviews";
import HomePageTable from "~/slices/HomePage/HomePageTable";
import type { V2_MetaFunction } from "@remix-run/node";
import { Suspense, useEffect } from "react";
import is from "@sindresorhus/is";
import date = is.date;

export const meta: V2_MetaFunction = () => {
  return [{ title: "Canvas Studio Website V4" }];
};
export const loader = async () => {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "top-navigation");
  const homepage = await client.getByType("homepage");

  return defer({
    navigation,
    homepage,
  });
};

const HomePageLoader = () => {
  return (
    <div>
      <h1 className={"heading--1"}>loading...</h1>
    </div>
  );
};

const HomePageError = () => {
  return (
    <div className={"bg-black text-white"}>
      <h1 className={"heading--1"}>error...</h1>
    </div>
  );
};
export default function HomePage() {
  const { homepage } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main>
        <Suspense fallback={<h1 className={"heading--1"}>loading...</h1>}>
          <Await
            resolve={homepage}
            errorElement={<h1 className={"heading--1"}>error...</h1>}
          >
            {homepage.results.map((result) => {
              return result.data.body.map((slice) => {
                switch (slice.slice_type) {
                  case "homepage_hero":
                    return <HomePageHero key={slice.id} data={slice} />;
                  case "homepage_project":
                    return <HomePageProject key={slice.id} data={slice} />;
                  case "table":
                    return <HomePageTable key={slice.id} data={slice} />;
                  case "homepage_portfolio_slice":
                    return (
                      <HomePagePortfolioMobile key={slice.id} data={slice} />
                    );
                  case "homepage_portfolio_desktop":
                    return (
                      <HomePagePortfolioDesktop key={slice.id} data={slice} />
                    );
                  default:
                    return null;
                }
              });
            })}
            <div id={"root-cursor z-50"} />
          </Await>
        </Suspense>
        <HomePageReviews />
      </main>
    </Layout>
  );
}
