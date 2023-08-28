import { ProjectHeroLine } from "~/components/ProjectHero/ProjectHero";
import type { ReactNode } from "react";
import type { ProjectPageDocument } from "types.generated";

export interface ProjectHeroTableProps {
  roles: ProjectPageDocument["data"]["roles"];
  links: ProjectPageDocument["data"]["links"];
}

function ProjectHeroItem({ children }: { children: ReactNode }) {
  return (
    <span className={"body--3 hero-table-row__item block text-white"}>
      {children}
    </span>
  );
}

export default function ProjectHeroTable({
  data,
  isClone = false,
}: {
  isClone?: boolean;
  data: ProjectHeroTableProps;
}) {
  if (!data || !data.links) return null;

  return (
    <div className="hero-table relative col-span-4 mb-10 md:col-span-5 md:col-start-8 md:mb-40 md:border-t-0">
      <div className={"pb-8"}>
        <div className={"flex w-full overflow-hidden"}>
          <div className={"w-1/2 md:w-2/3"}>
            <div className={"relative overflow-hidden"}>
              <ProjectHeroItem>Role</ProjectHeroItem>
            </div>
          </div>

          {data.links.length > 0 ? (
            <div className={"w-1/2 md:w-1/3"}>
              <div className={"relative overflow-hidden"}>
                <ProjectHeroItem>Links</ProjectHeroItem>
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
            {index === 0 ? (
              <ProjectHeroLine className={"mobile-only"} top={true} />
            ) : null}
            <div className={"flex w-full"}>
              {/* Roles list */}
              <div className={"w-1/2 md:w-2/3"}>
                <div className={"relative overflow-hidden"}>
                  <ProjectHeroItem>{item.role_item}</ProjectHeroItem>
                </div>
              </div>

              {/* Links list */}
              <div className={"w-1/2 md:w-1/3"}>
                {data.links[index] ? (
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    className={"body--3 relative inline-block w-max"}
                    tabIndex={isClone ? -1 : 0}
                    // @ts-ignore
                    href={data.links[index]?.link_item?.url}
                  >
                    <ProjectHeroItem>
                      {data.links[index]?.label}
                    </ProjectHeroItem>
                  </a>
                ) : null}
              </div>
            </div>
            <ProjectHeroLine />
          </div>
        );
      })}
    </div>
  );
}
