import React from "react";
import Table from "~/components/Table/Table";
import HomePagePortfolioImages from "~/containers/HomePagePortfolioImages";
import HomePagePortfolioMobile from "~/containers/HomePagePortfolioMobile";

import sample from "public/img/sample/ernest-baker--mobile-swiper.png";

const SAMPLE_DATA = [
  {
    title: "ecommerce",
    description:
      "User-centered research, brand values, and direct to consumer margins. We help brands tell their story in the digitally driven world of commerce.\n" +
      "\n" +
      "From creativity to conversion.",
    rows: ["Headless Commerce", "Shopify", "Custom"],
  },
  {
    title: "branding",
    description:
      "Insightful strategy, meaningful UX, and design- inspired development. We build products with purpose and experiences with feeling.\n" +
      "\n" +
      "We strive to build the best.",
    rows: ["Identity", "Voice", "Landscape"],
  },
  {
    title: "digital product",
    description:
      "Insightful strategy, meaningful UX, and design- inspired development. We build products with purpose and experiences with feeling.\n" +
      "\n" +
      "We strive to build the best.",
    rows: ["Web Apps", "Mobile Apps"],
  },
];

function HomePagePortfolio() {
  return (
    <div className={"w-full bg-white"}>
      <HomePagePortfolioImages />
      <HomePagePortfolioMobile
        title={"ECOMMERCE"}
        description={
          "User-centered research, brand values, and direct to consumer margins. We help brands tell their story in the digitally driven world of commerce.\n" +
          "\n" +
          "From creativity to conversion."
        }
        image={sample}
      />

      <div className="grid-container desktop-only--grid pb-28">
        <div className="col-span-12">
          <Table data={SAMPLE_DATA} />
        </div>
      </div>
    </div>
  );
}

export default HomePagePortfolio;
