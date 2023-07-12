import React from "react";
import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { Button } from "~/components/Button";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { WorkProjectHeroTitle } from "~/slices/WorkProject/WorkProjectHero";
import { PrismicRichText } from "@prismicio/react";
import type { loader } from "~/routes/work.$project";
import type { KeyTextField } from "@prismicio/types";

function Title({ text }: { text: string | KeyTextField }) {
  return <h3 className={"label--2 mb-8 pt-3.5"}>{text}</h3>;
}

function WorkProjectDetails() {
  const { hero, details } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const show = searchParams.get("projectDetails") === "true";

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 h-full w-full overflow-scroll bg-white transition-opacity",
        show ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="grid-container relative pt-header md:pt-headerDesk">
        <WorkProjectHeroTitle title={hero.title} />
      </div>

      <div className={"fixed bottom-0 left-0 md:pb-5 md:pl-8"}>
        <Button onClick={() => setSearchParams()}>CLOSE</Button>
      </div>

      <div>
        <div className="grid-container">
          <div className="cols-span-4 md:col-span-12 md:mb-16">
            <h3 className={"heading--3"}>{asText(hero.capabilities)}</h3>
          </div>
        </div>
        {details.map((detailsItem, detailsIndex) => {
          const title = asText(detailsItem.title);
          return (
            <div
              className={"grid-container md:mb-24"}
              key={`ProjectDetailsTable-${title}-${detailsIndex}`}
            >
              <div className="col-span-12 border-t border-t-pure-black/30"></div>
              <div className={"col-span-4"}>
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

              <div
                className={
                  "relative col-span-5 col-start-8 flex w-full border-b border-b-pure-black/30"
                }
              >
                {detailsItem.columns.map((colsItem, colIndex) => {
                  return (
                    <div
                      className={"w-full"}
                      key={`ProjectDetailsTable-${title}-${colIndex}`}
                    >
                      {colsItem.map((rowItem, rowindex, rowsArray) => {
                        if (rowItem.isheader) {
                          return (
                            <Title
                              text={rowItem.label}
                              key={`ProjectDetailsTableItem-${title}-${rowindex}`}
                            />
                          );
                        } else {
                          return (
                            <div
                              className={"body--3 relative py-2"}
                              key={`ProjectDetailsTableItem-${title}-${rowindex}`}
                            >
                              {rowItem.link ? (
                                <a
                                  rel="noreferrer"
                                  target={"_blank"}
                                  href={rowItem.link.url!}
                                >
                                  {rowItem.label}
                                </a>
                              ) : (
                                <span>{rowItem.label}</span>
                              )}
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
    </div>
  );
}

export default WorkProjectDetails;
