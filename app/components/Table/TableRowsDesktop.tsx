import React from "react";

export function TableRowDesktop({ number, title, description }) {
  return (
    <div className={"grid-container--full border-b border-b-black"}>
      <div
        className={
          "md:border-b-none col-span-4 w-full border-b border-b-black text-left md:col-span-3"
        }
      >
        <h3 className={"body--3 my-1"}>STRATEGY</h3>
      </div>
      <div
        className={
          "md:border-b-none col-span-4 w-full border-b border-b-black text-left md:col-span-3"
        }
      >
        <h3 className={"body--3 my-1"}>DESIGN</h3>
      </div>
      <div
        className={
          "md:border-b-none col-span-4 w-full border-b border-b-black text-left md:col-span-3"
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
