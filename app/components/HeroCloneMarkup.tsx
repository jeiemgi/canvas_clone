import React from "react";

function HeroCloneMarkup({
  titleId = "hero-clone-title",
  subtitleId = "hero-clone-subtitle",
}) {
  return (
    <div className="desktop-only grid-container absolute left-0 top-0 pt-header text-white md:pb-52 md:pt-headerDesk">
      <div
        id={titleId}
        className={
          "display--1 col-span-4 my-12 h-[7rem] md:col-span-12 md:mb-32 md:mt-24"
        }
      ></div>
      <div
        id={subtitleId}
        className={
          "heading--3 relative col-span-4 mb-12 md:col-span-12 md:mb-2 md:pb-20"
        }
      ></div>
    </div>
  );
}

export default HeroCloneMarkup;
