import { asText } from "@prismicio/richtext";
import { useLoaderData } from "@remix-run/react";
import { ProjectHeroTitle } from "~/components/ProjectHero/ProjectHero";
import WorkProjectDetailsModal from "~/slices/WorkProject/WorkProjectDetailsModal";
import WorkProjectDetailsModalTableInfo from "~/slices/WorkProject/WorkProjectDetailsModalTableInfo";
import WorkProjectDetailsModalTableFull from "~/slices/WorkProject/WorkProjectDetailsModalTableFull";
import type { loader } from "~/routes/work.$project";
import type { KeyTextField } from "@prismicio/types";
import type { ProjectPageDocumentDataBody2TableSliceItem } from "types.generated";

export function TableTitle({ text }: { text: string | KeyTextField }) {
  return (
    <div className={"mb-8 pt-3.5"}>
      <h3 className={"label--2"}>{text}</h3>
    </div>
  );
}

export function TableCell({
  item,
}: {
  item: ProjectPageDocumentDataBody2TableSliceItem;
}) {
  return (
    <div className={"body--3 py-2"}>
      {item?.link && "url" in item.link && item.link.url ? (
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

function WorkProjectDetailsTables() {
  const { details } = useLoaderData<typeof loader>();

  return (
    <>
      {details.tables.map(({ title, description, rows, columns }, index) => {
        const isFull = !asText(title);
        return (
          <>
            {isFull ? (
              <WorkProjectDetailsModalTableFull
                rows={rows}
                columns={columns}
                key={`TableFull-${index}`}
              />
            ) : (
              <WorkProjectDetailsModalTableInfo
                rows={rows}
                title={title}
                description={description}
                key={`TableWithInfo-${index}`}
              />
            )}
          </>
        );
      })}
    </>
  );
}

function WorkProjectDetails({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  const { hero } = useLoaderData<typeof loader>();
  return (
    <WorkProjectDetailsModal onClose={onClose} isOpen={isOpen}>
      <div
        data-lenis-prevent={true}
        className={"fixed inset-0 h-full w-full overflow-scroll"}
      >
        <div className="grid-container relative pt-header md:pt-headerDesk">
          <ProjectHeroTitle className={"text-black"} field={hero.title} />
        </div>
        <div className="grid-container">
          <div className="col-span-4 mb-10 md:col-span-12 md:mb-16">
            <h3 className={"heading--3"}>{asText(hero.capabilities)}</h3>
          </div>
        </div>

        <div className={"modal-tables mb-[100px] pb-32"}>
          <WorkProjectDetailsTables />
        </div>

        <div className={"mb-20 md:mb-10"}>
          {hero.credits.length > 0
            ? hero.credits.map((item, index) => {
                if (item.value)
                  return (
                    <div
                      key={`Table-credits-${index}`}
                      className="grid-container"
                    >
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
                  );
                return null;
              })
            : null}
        </div>
      </div>
    </WorkProjectDetailsModal>
  );
}

export default WorkProjectDetails;
