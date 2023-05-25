import React from "react";
import Table from "~/components/Table/Table";
import HomePagePortfolioImages from "~/containers/HomePagePortfolioImages";
import HomePagePortfolioMobile from "~/containers/HomePagePortfolioMobile";

function HomePagePortfolio() {
  return (
    <div className={"w-full bg-white"}>
      <HomePagePortfolioImages />

      <HomePagePortfolioMobile />

      <div className="grid-container desktop-only--grid pb-28">
        <div className="col-span-12">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default HomePagePortfolio;
