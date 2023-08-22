import React from "react";
import WorkProjectHeroTable from "~/slices/WorkProject/WorkProjectHeroTable";
import type { WorkProjectHeroTableProps } from "~/slices/WorkProject/WorkProjectHeroTable";
import {
  WorkProjectHeroCTA,
  WorkProjectHeroLine,
} from "~/slices/WorkProject/WorkProjectHero";

interface Props {
  titleId?: string;
  subtitleId?: string;
  tableData: WorkProjectHeroTableProps;
}

function HeroCloneMarkup({
  tableData,
  titleId = "hero-clone-title",
  subtitleId = "hero-clone-subtitle",
}: Props) {
  return (
    <div
      className={
        "hero-clone desktop-only absolute left-0 top-0 h-screen w-full"
      }
    >
      <div className="grid-container relative pt-header text-white md:pb-52 md:pt-headerDesk">
        <div
          id={titleId}
          className={
            "display--1 col-span-4 my-12 h-[7rem] md:col-span-12 md:mb-32 md:mt-24"
          }
        ></div>
        <div
          id={subtitleId}
          className={
            "leading--3 relative col-span-4 mb-12 md:col-span-12 md:mb-2 md:pb-20"
          }
        ></div>
        <WorkProjectHeroLine />
        <WorkProjectHeroCTA field={"SEE PROJECT DETAILS"} />
        <WorkProjectHeroTable data={tableData} />
        <div
          className={
            "hero-video col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3"
          }
        ></div>
      </div>
    </div>
  );
}

export default HeroCloneMarkup;
