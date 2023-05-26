import Layout from "~/components/Layout/Layout";
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePageQuote from "~/slices/HomePage/HomePageQuote";
import HomePageProject from "~/slices/HomePage/HomePageProject";
import HomePageCapabilities from "~/slices/HomePage/HomePageCapabilities";
import HomePagePortfolio from "~/slices/HomePage/HomePagePortfolio";
// import HomePageReviews from "~/slices/HomePage/HomePageReviews";
import background from "public/img/home-background.png";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Canvas Studio Website V4" }];
};

export default function _index() {
  return (
    <Layout>
      <div
        className={"w-full bg-black bg-contain bg-repeat-y"}
        style={{ backgroundImage: `url('${background}')` }}
      >
        <HomePageHero />
        <HomePageQuote />
      </div>
      <HomePageProject />
      <HomePageCapabilities />
      <HomePagePortfolio />
      {/*<HomePageReviews/>*/}
    </Layout>
  );
}
