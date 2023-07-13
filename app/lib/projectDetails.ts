import type {
  ProjectPageDocumentDataBody2TableSlice,
  ProjectPageDocumentDataBody2TableSliceItem,
} from "types.generated";

export const createTableColumns = (
  items: ProjectPageDocumentDataBody2TableSliceItem[]
) => {
  let columns: ProjectPageDocumentDataBody2TableSliceItem[][] = [];
  let columnItem: ProjectPageDocumentDataBody2TableSliceItem[] = [];

  items.forEach((item) => {
    if (item.isheader) {
      columnItem = [];
      columnItem.push(item);
      columns.push(columnItem);
    } else {
      columnItem.push(item);
    }
  });

  return columns;
};

type Cell = ProjectPageDocumentDataBody2TableSliceItem | null;
export const createTableRows = (
  items: ProjectPageDocumentDataBody2TableSliceItem[]
) => {
  const columns = createTableColumns(items);
  const headers = items.filter((a) => a.isheader);
  const longestCol = columns.reduce((a, b) => (a.length > b.length ? a : b));

  console.log(
    "--------------------------------------------------------------------------------"
  );

  const rowsLength = longestCol.length;
  const colsLength = headers.length;
  let rows = Array.from(Array(rowsLength), () => new Array(colsLength));

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
      rows[rowIndex][cellIndex] = columns[cellIndex][rowIndex];
    }
  }

  return rows;
};

export const normalizeProjectDetailsData = (
  body: ProjectPageDocumentDataBody2TableSlice[]
) => {
  return body.map((bodyItem) => {
    return {
      title: bodyItem.primary.title1,
      description: bodyItem.primary.description,
      columns: createTableColumns(bodyItem.items),
      rows: createTableRows(bodyItem.items),
    };
  });
};
