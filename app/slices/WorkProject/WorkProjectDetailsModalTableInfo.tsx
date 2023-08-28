import { asText } from "@prismicio/richtext";
import type { RichTextField } from "@prismicio/types";
import type { ProjectPageDocumentDataBody2TableSliceItem } from "types.generated";
import { getKey } from "~/lib/projectDetails";
import { TableCell, TableTitle } from "~/slices/WorkProject/WorkProjectDetails";
import { PrismicRichText } from "@prismicio/react";

function TableInfo({
  title,
  description,
}: {
  title: string;
  description: RichTextField;
}) {
  if (!title || !description) return null;

  return (
    <div className={"col-span-4 mb-8 md:col-span-5 md:mb-0"}>
      <TableTitle text={title} />
      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => <p className={"body--3"}>{children}</p>,
        }}
      />
    </div>
  );
}

function WorkProjectDetailsModalTableInfo({
  title,
  description,
  rows,
}: {
  title: RichTextField;
  description: RichTextField;
  rows: ProjectPageDocumentDataBody2TableSliceItem[][];
}) {
  const keyPre = "TableWithInfo";
  const detailsTitle = asText(title);

  return (
    <div className={"grid-container mb-20 md:mb-28"}>
      <div className="col-span-4 border-t border-t-black/30 md:col-span-12 md:mb-3.5" />
      <TableInfo title={detailsTitle} description={description} />

      <div className={"col-span-4 md:col-span-5 md:col-start-8"}>
        {rows.map((row, rowIndex) => {
          const rowKey = getKey(keyPre, "row", detailsTitle, rowIndex);

          return (
            <div key={rowKey} className={"flex border-b border-b-black/30"}>
              {row.map((rowItem, rowItemIndex) => {
                const rowItemKey = getKey(
                  keyPre,
                  "rowItem",
                  detailsTitle,
                  rowItemIndex
                );

                return rowItem?.isheader ? (
                  <div key={rowItemKey} className={"w-1/2"}>
                    <TableTitle text={rowItem.label} />
                  </div>
                ) : (
                  <div key={rowItemKey} className={"w-1/2"}>
                    <TableCell item={rowItem} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkProjectDetailsModalTableInfo;
