import React from "react";
import { TableColumn } from "~/components/Table/TableColumn";
import type { TableColumnProps } from "~/components/Table/TableColumn";

export interface TableProps {
  data: Array<TableColumnProps>;
}

function Table({ data }: TableProps) {
  return (
    <div className={"grid-container--full"}>
      {data.map((item, index) => (
        <TableColumn
          key={`TableHeader-${item.title}-${index}`}
          number={item.number}
          title={item.title}
          description={item.description}
          rows={item.rows}
        />
      ))}
    </div>
  );
}

export default Table;
