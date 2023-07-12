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

export const normalizeProjectDetailsData = (
  body: ProjectPageDocumentDataBody2TableSlice[]
) => {
  return body.map((bodyItem) => {
    return {
      title: bodyItem.primary.title1,
      description: bodyItem.primary.description,
      columns: createTableColumns(bodyItem.items),
    };
  });
};
