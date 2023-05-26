import React from "react";

export function TableRowDesktop() {
  return (
    <div className={"grid-container--full border-b border-b-black/30"}>
      <div
        className={
          "col-span-4 w-full border-b border-b-black/30 text-left md:col-span-3 md:border-b-0"
        }
      >
        <h3 className={"body--3 my-1"}>STRATEGY</h3>
      </div>
      <div
        className={
          "col-span-4 w-full border-b border-b-black/30 text-left md:col-span-3 md:border-b-0"
        }
      >
        <h3 className={"body--3 my-1"}>DESIGN</h3>
      </div>
      <div
        className={
          "col-span-4 w-full border-b border-b-black/30 text-left md:col-span-3 md:border-b-0"
        }
      >
        <h3 className={"body--3 my-1"}>DEVELOPMENT</h3>
      </div>
    </div>
  );
}

export function TableRowsDesktop() {
  return (
    <div className={"desktop-only"}>
      <TableRowDesktop />
      <TableRowDesktop />
      <TableRowDesktop />
      <TableRowDesktop />
      <TableRowDesktop />
    </div>
  );
}
