import clsx from "clsx";
import { getKey } from "~/lib/projectDetails";
import { TableCell, TableTitle } from "~/slices/WorkProject/WorkProjectDetails";
import type { ProjectPageDocumentDataBody2TableSliceItem } from "types.generated";

function WorkProjectDetailsModalTableFull({
  rows,
  columns,
}: {
  columns: ProjectPageDocumentDataBody2TableSliceItem[][];
  rows: ProjectPageDocumentDataBody2TableSliceItem[][];
}) {
  const keyPre = "TableFull";
  const keyPreMobile = "TableFullMobile";

  return (
    <div>
      <div className={"desktop-only"}>
        {rows.map((row, rowIndex) => {
          let rowChunks = [];
          for (let i = 0; i < row.length; i += 2) {
            rowChunks.push(row.slice(i, i + 2));
          }

          return (
            <div
              key={getKey(keyPre, "row", rowIndex)}
              className={"grid-container border-b border-b-black/30"}
            >
              {rowChunks.map((chunk, chunkIndex) => {
                return (
                  <div
                    key={getKey(keyPre, "rowChunk", chunkIndex)}
                    className={clsx(
                      "col-span-4 flex md:col-span-5 md:even:col-start-8"
                    )}
                  >
                    {chunk.map((chunkItem, chunkItemIndex) => {
                      const key = getKey(keyPre, "chunkItem", chunkItemIndex);
                      if (chunkItem?.isheader) {
                        return (
                          <div key={key} className={"w-1/2"}>
                            <TableTitle text={chunkItem.label} />
                          </div>
                        );
                      } else {
                        return (
                          <div key={key} className={"w-1/2"}>
                            <TableCell item={chunkItem} />
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={"mobile-only"}>
        <div
          className={
            "max-container grid grid-cols-4 md:border-b md:border-b-black/30"
          }
        >
          {columns?.map((colItem, colIndex) => {
            return (
              <div
                className={clsx(
                  "relative col-span-2 mb-24 border-b border-b-black/30"
                )}
                key={getKey(keyPreMobile, "column", colIndex)}
              >
                {colItem.map((cellItem, cellItemIndex) => {
                  const key = getKey(keyPreMobile, "cellItem", cellItemIndex);
                  return cellItem.isheader ? (
                    <div
                      key={key}
                      className={
                        colIndex % 2 === 0
                          ? "relative after:absolute after:top-0 after:h-[1px] after:w-[200%] after:bg-black/30" +
                            "last:before:absolute last:before:bottom-0 last:before:h-[1px] last:before:w-[200%] last:before:bg-black/30"
                          : ""
                      }
                    >
                      <TableTitle text={cellItem.label} />
                    </div>
                  ) : (
                    <div
                      key={key}
                      className={
                        colIndex % 2 === 0
                          ? "relative after:absolute after:top-0 after:h-[1px] after:w-[200%] after:bg-black/30"
                          : ""
                      }
                    >
                      <TableCell item={cellItem} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkProjectDetailsModalTableFull;
