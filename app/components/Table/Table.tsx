import React, { useEffect } from "react";
import { TableColumn } from "~/components/Table/TableColumn";
import type { HomepageDocumentDataBodyTableSlice } from "types.generated";
import { asText } from "@prismicio/richtext";
import { useLayoutEffect } from "~/hooks";

export interface TableProps {
  data: HomepageDocumentDataBodyTableSlice;
}

function Table({ data }: TableProps) {
  useLayoutEffect(() => {}, []);

  return (
    <div className={"grid-container--full"}>
      {data.items.map((item, index) => (
        <TableColumn
          key={`TableHeader-${item.title}-${index}`}
          number={asText(item.number)}
          title={asText(item.title)}
          description={asText(item.description)}
          rows={asText(item.rows).split(", ")}
        />
      ))}
    </div>
  );
}

export default Table;
