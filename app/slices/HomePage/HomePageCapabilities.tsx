import React from "react";
import Table from "~/components/Table/Table";
import type { TableProps } from "~/components/Table/Table";

const CAPABILITIES_DATA = [
  {
    title: "Strategy",
    number: "01",
    description:
      "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do.",
    rows: [
      "Creative Direction",
      "Research",
      "Discovery",
      "Insights",
      "Analytics",
    ],
  },
  {
    title: "Design",
    number: "02",
    description:
      "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do.",
    rows: ["UX", "UI", "Branding", "Illustration", "Motion Design"],
  },
  {
    title: "Development",
    description:
      "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do.",
    number: "03",
    rows: ["Frontend", "Backend", "Mobile", "DevOps", "Architecture"],
  },
];

interface Props {
  title: string;
  data: TableProps["data"];
}

function HomePageCapabilities() {
  return (
    <div className={"pb-0 pt-40 md:pb-40"}>
      <div className="grid-container">
        <div
          className={
            "col-span-4 mb-6 md:col-span-12 md:mb-0 md:border-b md:border-b-black/30 md:pb-5"
          }
        >
          <h1 className={"display--2"}>CAPABILITIES</h1>
        </div>
      </div>
      <div className="grid-container">
        <div className="col-span-4 md:col-span-12">
          <Table data={CAPABILITIES_DATA} />
        </div>
      </div>
    </div>
  );
}

export default HomePageCapabilities;
