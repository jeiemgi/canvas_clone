import React from "react";
import clsx from "clsx";

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
      className={clsx(
        "col-span-4 w-full border-t border-t-black/30 pt-2.5 text-left md:col-span-3 md:border-none",
        "group"
      )}
    >
      {number ? (
        <h2 className={"heading--2 mb-10 md:mb-44"}>{number}</h2>
      ) : null}
      <h3 className={"heading--2 mb-5"}>{title}</h3>
      <p
        className={
          "body--3 mb-6 h-[200px] whitespace-pre-line md:max-w-[22rem]"
        }
      >
        {description}
      </p>

      <div
        className={
          "relative col-span-4 mb-24 border-t border-black/30 md:border-0"
        }
      >
        {rows.map((row, index) => (
          <div
            key={`${row}-${index}`}
            className={clsx(
              "body--3 relative w-full border-b border-black/30 py-2.5 md:border-0",
              "group-first:after:absolute group-first:after:bottom-0 group-first:after:block group-first:after:h-[1px] group-first:after:w-[500%] group-first:after:bg-black/30"
            )}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
