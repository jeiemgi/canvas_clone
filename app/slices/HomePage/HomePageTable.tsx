import clsx from "clsx";
import { Table } from "~/components/Table";
import { HomepageDocumentDataBodyTableSlice } from "types.generated";

function HomePageTable({
  className,
  data,
}: {
  className?: string;
  data: HomepageDocumentDataBodyTableSlice;
}) {
  return (
    <div className={clsx("grid-container", className)}>
      <div className="col-span-4 md:col-span-12">
        <Table data={data} />
      </div>
    </div>
  );
}

export default HomePageTable;
