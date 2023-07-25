import React, { Fragment } from "react";
import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { Button } from "~/components/Button";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { WorkProjectHeroTitle } from "~/slices/WorkProject/WorkProjectHero";
import { PrismicRichText } from "@prismicio/react";
import type { loader } from "~/routes/work.$project";
import type { KeyTextField, RichTextField } from "@prismicio/types";
import type { ProjectPageDocumentDataBody2TableSliceItem } from "types.generated";
import useIsMobile from "~/hooks/useIsMobile";
import { SecondaryCTA } from "~/components/CTA";

function getKey(prefix: string, ...other: Array<string | number>) {
  return `${prefix}-${other.join("-")}`;
}

function Title({ text }: { text: string | KeyTextField }) {
  return (
    <div className={"mb-8 pt-3.5"}>
      <h3 className={"label--2"}>{text}</h3>
    </div>
  );
}

function TableCell({
  item,
}: {
  item: ProjectPageDocumentDataBody2TableSliceItem;
}) {
  return (
    <div className={"body--3 py-2"}>
      {item?.link ? (
        <a
          rel="noreferrer"
          target={"_blank"}
          // @ts-ignore
          href={item.link.url}
        >
          {item.label}
        </a>
      ) : (
        <span>{item ? item.label : null}</span>
      )}
    </div>
  );
}

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
      <Title text={title} />
      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => <p className={"body--3"}>{children}</p>,
        }}
      />
    </div>
  );
}

function TableFull({
  rows,
  columns,
}: {
  columns: ProjectPageDocumentDataBody2TableSliceItem[][];
  rows: ProjectPageDocumentDataBody2TableSliceItem[][];
}) {
  const keyPre = "DetailsTableFull";
  const keyPreMobile = "DetailsTableFull";

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
                    key={getKey(keyPre, "chunk", chunkIndex)}
                    className={clsx(
                      "col-span-4 flex md:col-span-5 md:even:col-start-8"
                    )}
                  >
                    {chunk.map((chunkItem, chunkItemIndex) => {
                      const key = getKey(keyPre, "chunkItem", chunkItemIndex);

                      if (chunkItem?.isheader) {
                        return (
                          <div key={key} className={"w-1/2"}>
                            <Title text={chunkItem.label} />
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
            "max-container grid grid-cols-4 border-b border-b-black/30"
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
                  const key = getKey(keyPreMobile, "cellItem", colIndex);
                  return cellItem.isheader ? (
                    <div
                      className={
                        colIndex % 2 === 0
                          ? "relative after:absolute after:top-0 after:h-[1px] after:w-[200%] after:bg-black/30" +
                            "last:before:absolute last:before:bottom-0 last:before:h-[1px] last:before:w-[200%] last:before:bg-black/30"
                          : ""
                      }
                    >
                      <Title key={key} text={cellItem.label}></Title>
                    </div>
                  ) : (
                    <div
                      className={
                        colIndex % 2 === 0
                          ? "relative after:absolute after:top-0 after:h-[1px] after:w-[200%] after:bg-black/30"
                          : ""
                      }
                    >
                      <TableCell key={key} item={cellItem} />
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

function TableWithInfo({
  title,
  description,
  rows,
}: {
  title: RichTextField;
  description: RichTextField;
  rows: ProjectPageDocumentDataBody2TableSliceItem[][];
}) {
  const keyPre = "DetailsTable";
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
                    <Title text={rowItem.label} />
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

function Tables() {
  const { details } = useLoaderData<typeof loader>();
  return (
    <>
      {details.tables.map(({ title, description, rows, columns }) => {
        const isFull = !asText(title);

        return (
          <>
            {isFull ? (
              <TableFull columns={columns} rows={rows} />
            ) : (
              <TableWithInfo
                rows={rows}
                title={title}
                description={description}
              />
            )}
          </>
        );
      })}
      {details.credits.map((item, index) => (
        <div key={`CREDITS-${index}`} className="grid-container">
          <div className={"label--2 col-span-1"}>CREDIT</div>
          <div className={"label--2 md:col-span-2 md:col-start-8"}>
            {item.type}
          </div>
          <div
            className={
              "label--2 col-span-2 col-start-3 text-right md:col-start-11 md:text-left"
            }
          >
            {item.value}
          </div>
        </div>
      ))}
    </>
  );
}

function WorkProjectDetails() {
  const { hero } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const show = searchParams.get("projectDetails") === "true";

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 z-20 h-full w-full overflow-scroll bg-white pb-[10vh] pt-header  transition-opacity md:pb-[10vh] md:pt-headerDesk",
        show ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="grid-container relative">
        <WorkProjectHeroTitle title={hero.title} />
      </div>

      <div
        className={
          "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-0 md:left-0 md:block md:w-auto md:pb-5 md:pl-8"
        }
      >
        <SecondaryCTA dark onClick={() => setSearchParams()}>
          CLOSE
        </SecondaryCTA>
      </div>

      <div className="grid-container">
        <div className="col-span-4 mb-10 md:col-span-12 md:mb-16">
          <h3 className={"heading--3"}>{asText(hero.capabilities)}</h3>
        </div>
      </div>

      <Tables />
    </div>
  );
}

export default WorkProjectDetails;
