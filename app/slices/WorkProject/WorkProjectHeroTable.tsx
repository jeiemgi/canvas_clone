import type { ProjectPageDocument } from "types.generated";
import React from "react";

export interface WorkProjectHeroTableProps {
  roles: ProjectPageDocument["data"]["roles"];
  links: ProjectPageDocument["data"]["links"];
}

export default function WorkProjectHeroTable({
  data,
  focusable = true,
}: {
  data: WorkProjectHeroTableProps;
  focusable?: boolean;
}) {
  if (!data || !data.links) return null;

  return (
    <div className="hero-table relative col-span-4 mb-10 border-t border-white/30 md:col-span-5 md:col-start-8 md:mb-40 md:border-t-0">
      <div
        className={
          "hero-table-line absolute bottom-0 hidden w-full origin-left border-b-2 border-b-red"
        }
      ></div>

      <div className={"pb-8 pt-3"}>
        <div className={"hero-table-row flex w-full overflow-hidden"}>
          <div className={"w-1/2"}>
            <div className={"relative overflow-hidden"}>
              <span className={"hero-table-row__item label--2 block"}>
                Role
              </span>
            </div>
          </div>

          {data.links.length > 0 ? (
            <div className={"w-1/2"}>
              <div className={"relative overflow-hidden"}>
                <span className={"hero-table-row__item label--2 block"}>
                  Links
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {data.roles.map((item, index) => {
        return (
          <div
            key={`WorkHero-Roles-${index}`}
            className={"relative flex overflow-hidden py-2.5"}
          >
            <div className={"hero-table-row flex w-full"}>
              <div className={"w-1/2"}>
                <div className={"relative overflow-hidden"}>
                  <span className={"body--3 hero-table-row__item block"}>
                    {item.role_item}
                  </span>
                </div>
              </div>
              <div className={"w-1/2"}>
                {data.links[index] ? (
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    className={"body--3 relative"}
                    tabIndex={!focusable ? -1 : 0}
                    // @ts-ignore
                    href={data.links[index]?.link_item?.url}
                  >
                    <span className={"body--3 hero-table-row__item block"}>
                      {data.links[index]?.label}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
            <div
              className={
                "hero-table-line absolute bottom-0 w-full origin-left border-t border-white/30 last:border-b"
              }
            ></div>
          </div>
        );
      })}
    </div>
  );
}
