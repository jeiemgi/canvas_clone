import React from "react";
import { TableColumn } from "~/components/Table/TableColumn";
import type { TableColumnProps } from "~/components/Table/TableColumn";

export interface TableProps {
  data: TableColumnProps[];
}

function Table({ data }: TableProps) {
  return (
    <div className={"grid-container--full"}>
      {data.map((item, index) => (
        <TableColumn key={`TableHeader-${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
}

export default Table;
