import React from "react";
import sample from "public/img/sample/ernest-baker--mobile-swiper.png";

function HomePagePortfolioMobile() {
  return (
    <div className={"bg-black pb-8 pt-[6.5rem] text-white"}>
      <div className="max-container">
        <h2 className={"heading--2 mb-7"}>ECOMMERCE</h2>

        <img src={sample} alt="sample" />

        <p className={"body--3"}>
          User-centered research, brand values, and direct to consumer margins.
          We help brands tell their story in the digitally driven world of
          commerce. From creativity to conversion.
        </p>
      </div>
    </div>
  );
}

export default HomePagePortfolioMobile;
