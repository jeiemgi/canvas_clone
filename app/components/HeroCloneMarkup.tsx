import {
  WorkProjectHeroCTA,
  WorkProjectHeroLine,
} from "~/slices/WorkProject/WorkProjectHero";
import WorkProjectHeroTable from "~/slices/WorkProject/WorkProjectHeroTable";
import type { WorkProjectHeroTableProps } from "~/slices/WorkProject/WorkProjectHeroTable";

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
      tabIndex={-1}
      aria-hidden="true"
      className={
        "hero-clone desktop-only pointer-events-none absolute left-0 top-0 min-h-screen w-full"
      }
    >
      <div className="grid-container relative pt-header text-white md:pb-52 md:pt-headerDesk">
        <div
          id={titleId}
          tabIndex={-1}
          className={
            "display--1 col-span-4 my-12 h-[7rem] md:col-span-12 md:mb-32 md:mt-24"
          }
        />
        <div
          id={subtitleId}
          tabIndex={-1}
          className={
            "leading--3 relative col-span-4 mb-12 md:col-span-12 md:mb-2 md:pb-20"
          }
        />
        <WorkProjectHeroLine />
        <WorkProjectHeroCTA tabIndex={-1} field={"SEE PROJECT DETAILS"} />
        <WorkProjectHeroTable focusable={false} data={tableData} />
      </div>
    </div>
  );
}

export default HeroCloneMarkup;
