import React from "react";

export interface TableColumnProps {
  title: string;
  number?: string;
  description: string;
  rows: string[];
}

export function TableColumn({
  number,
  title,
  description,
  rows,
}: TableColumnProps) {
  return (
    <div
      className={
        "TableColumn__row-element " +
        "col-span-4 w-full border-t border-t-black/30 pt-2.5 text-left md:col-span-3 md:border-none"
      }
    >
      {number ? (
        <h2 className={"heading--2 mb-10 md:mb-44"}>{number}</h2>
      ) : null}
      <h3 className={"heading--2 mb-5"}>{title}</h3>
      <p className={"body--3 mb-6 whitespace-pre-line md:max-w-[22rem]"}>
        {description}
      </p>

      <div
        className={
          "TableColumn__cell-group body--3 relative col-span-4 mb-24 border-t border-black/30 md:border-0"
        }
      >
        {rows.map((row, index) => (
          <div
            key={`${row}-${index}`}
            className={
              "body--3 TableColumn__cell-element relative w-full border-b border-black/30 py-2.5 md:border-0"
            }
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
