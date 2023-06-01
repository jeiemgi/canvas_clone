import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { Table } from "~/components/Table";
import type { HomepageDocumentDataBodyTableSlice } from "types.generated";

function HomePageTable({
  className,
  data,
}: {
  data: HomepageDocumentDataBodyTableSlice;
  className?: string;
}) {
  return (
    <section>
      {data.primary.title ? (
        <div className="grid-container">
          <div
            className={
              "col-span-4 mb-6 pb-0 pt-40 md:col-span-12 md:mb-0 md:border-b md:border-b-black/30 md:pb-5"
            }
          >
            <h1 className={"display--2"}>{asText(data.primary.title)}</h1>
          </div>
        </div>
      ) : null}

      <div className={clsx("grid-container", className)}>
        <div className="col-span-4 md:col-span-12">
          <Table data={data} />
        </div>
      </div>
    </section>
  );
}

export default HomePageTable;
