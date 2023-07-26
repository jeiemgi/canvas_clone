import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { PrismicRichText } from "@prismicio/react";
import type { HomepageDocumentDataBodyTableSliceItem } from "types.generated";

export interface TableColumnProps {
  item: HomepageDocumentDataBodyTableSliceItem;
}

function HomePageTableColumn({ item }: TableColumnProps) {
  return (
    <div
      className={
        "group col-span-4 mb-24 border-t border-t-black/30 text-left md:col-span-3 md:mb-28 md:border-t-0"
      }
    >
      <div className={"mobile-only pt-2.5"}>
        {item.number.length > 0 ? (
          <h2 className={"heading--2 mb-10 md:mb-44"}>{asText(item.number)}</h2>
        ) : null}
        <h3 className={"heading--2 mb-5"}>{asText(item.title)}</h3>
        <PrismicRichText
          field={item.description}
          components={{
            paragraph: ({ children }) => (
              <p className={"body--3 mb-6 whitespace-pre-line"}>{children}</p>
            ),
          }}
        />
      </div>

      <div
        className={"relative col-span-4 border-t border-black/30 md:border-0"}
      >
        {asText(item.rows)
          .split(", ")
          .map((row, index) => {
            return (
              <div
                key={`${row}-${index}`}
                className={clsx(
                  "body--3 relative w-full border-b border-black/30 py-2.5 last:border-b-0 md:border-0",
                  "md:group-first:after:absolute md:group-first:after:bottom-0 md:group-first:after:block md:group-first:after:h-[1px] md:group-first:after:w-[500%] md:group-first:after:bg-black/30"
                )}
              >
                {row}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomePageTableColumn;
