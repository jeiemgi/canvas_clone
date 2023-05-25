import React from "react";
import { TableHeader } from "~/components/Table/TableHeader";
import { TableRowsMobile } from "~/components/Table/TableRowsMobile";
import { TableRowsDesktop } from "~/components/Table/TableRowsDesktop";

function Table() {
  return (
    <>
      <div className={"grid-container--full"}>
        <TableHeader
          number={"01"}
          title={"STRATEGY"}
          description={
            "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do."
          }
        />
        <TableRowsMobile />

        <TableHeader
          number={"02"}
          title={"DESIGN"}
          description={
            "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do."
          }
        />
        <TableRowsMobile />

        <TableHeader
          number={"01"}
          title={"STRATEGY"}
          description={
            "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do."
          }
        />
        <TableRowsMobile />
      </div>

      <TableRowsDesktop />
    </>
  );
}

export default Table;
