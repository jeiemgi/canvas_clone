import clsx from "clsx";
import { useRef } from "react";
import type { ReactNode } from "react";
import type { ProjectPageDocument } from "types.generated";

export interface ProjectHeroTableProps {
  roles: ProjectPageDocument["data"]["roles"];
  links: ProjectPageDocument["data"]["links"];
}

export const ProjectHeroTableLine = ({
  className = "",
  top = false,
  isClone = false,
}) => {
  return (
    <div
      className={clsx(
        className,
        isClone ? "scale-x-0" : "",
        top ? "top-0" : "bottom-0",
        "hero-table-line absolute bottom-0 left-0 block h-[1px] w-full origin-left bg-white/30"
      )}
    />
  );
};

function ProjectHeroTableItem({
  children,
  isClone,
}: {
  children: ReactNode;
  isClone: boolean;
}) {
  return (
    <span
      className={clsx(
        "body--3 hero-table-row__item block text-white",
        isClone ? "translate-y-[200%]" : ""
      )}
    >
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
  const container = useRef<HTMLDivElement>(null);

  if (!data || !data.links) return null;

  return (
    <div
      ref={container}
      className="hero-table relative col-span-4 mb-10 md:col-span-5 md:col-start-8 md:mb-40 md:border-t-0"
    >
      <div className={"pb-8"}>
        <div className={"flex w-full overflow-hidden"}>
          <div className={"w-1/2 md:w-2/3"}>
            <div className={"relative overflow-hidden"}>
              <ProjectHeroTableItem isClone={isClone}>
                Role
              </ProjectHeroTableItem>
            </div>
          </div>

          {data.links.length > 0 ? (
            <div className={"w-1/2 md:w-1/3"}>
              <div className={"relative overflow-hidden"}>
                <ProjectHeroTableItem isClone={isClone}>
                  Links
                </ProjectHeroTableItem>
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
              <ProjectHeroTableLine
                top={true}
                isClone={isClone}
                className={"mobile-only"}
              />
            ) : null}
            <div className={"flex w-full"}>
              {/* Roles list */}
              <div className={"w-1/2 md:w-2/3"}>
                <div className={"relative overflow-hidden"}>
                  <ProjectHeroTableItem isClone={isClone}>
                    {item.role_item}
                  </ProjectHeroTableItem>
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
                    <ProjectHeroTableItem isClone={isClone}>
                      {data.links[index]?.label}
                    </ProjectHeroTableItem>
                  </a>
                ) : null}
              </div>
            </div>
            <ProjectHeroTableLine isClone={isClone} />
          </div>
        );
      })}
    </div>
  );
}
