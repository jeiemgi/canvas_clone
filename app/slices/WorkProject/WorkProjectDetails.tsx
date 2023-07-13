import React from "react";
import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { Button } from "~/components/Button";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { WorkProjectHeroTitle } from "~/slices/WorkProject/WorkProjectHero";
import { PrismicRichText } from "@prismicio/react";
import type { loader } from "~/routes/work.$project";
import type { KeyTextField } from "@prismicio/types";
import type { ProjectPageDocumentDataBody2TableSliceItem } from "types.generated";

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
        // @ts-ignore
        <a rel="noreferrer" target={"_blank"} href={item.link.url}>
          {item.label}
        </a>
      ) : (
        <span>{item ? item.label : null}</span>
      )}
    </div>
  );
}

function WorkProjectDetails() {
  const { hero, details } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const show = searchParams.get("projectDetails") === "true";

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 z-20 h-full w-full overflow-scroll bg-white transition-opacity",
        show ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="grid-container relative pt-header md:pt-headerDesk">
        <WorkProjectHeroTitle title={hero.title} />
      </div>

      <div className={"fixed bottom-0 left-0 md:pb-5 md:pl-8"}>
        <Button onClick={() => setSearchParams()}>CLOSE</Button>
      </div>

      <div className="grid-container">
        <div className="col-span-4 mb-10 md:col-span-12 md:mb-16">
          <h3 className={"heading--3"}>{asText(hero.capabilities)}</h3>
        </div>
      </div>

      {details.map((detailsItem, detailsIndex) => {
        const title = asText(detailsItem.title);
        const colSpan = title
          ? "col-span-4 md:col-span-5 md:col-start-8"
          : "col-span-4 md:col-span-12";

        return (
          <div
            className={"grid-container mb-20 md:mb-28"}
            key={`ProjectDetailsTable-${title}-${detailsIndex}`}
          >
            <div className="col-span-4 border-t border-t-black/30 md:col-span-12 md:mb-3.5" />
            <div className={"col-span-4 mb-8 md:col-span-5 md:mb-0"}>
              <Title text={title} />
              <PrismicRichText
                field={detailsItem.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className={"body--3"}>{children}</p>
                  ),
                }}
              />
            </div>

            <div className={clsx(colSpan)}>
              {detailsItem.rows.map((rowItem, rowIndex) => {
                return (
                  <div
                    className={
                      "flex w-full border-b border-black/30 first:border-t md:first:border-t-0"
                    }
                    key={`ProjectDetailsTableRow-${title}-${rowIndex}`}
                  >
                    {rowItem.map((cellItem, cellIndex) => {
                      const key = `ProjectDetailsTableRowItem-${title}-${rowIndex}-${cellIndex}`;

                      if (cellItem?.isheader) {
                        return (
                          <div className={"w-1/2 md:w-full"} key={key}>
                            <Title text={cellItem.label} />
                          </div>
                        );
                      } else {
                        return (
                          <div key={key} className={"w-1/2 md:w-full"}>
                            <TableCell item={cellItem} />
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkProjectDetails;
