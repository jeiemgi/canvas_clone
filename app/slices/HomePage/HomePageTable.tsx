import { asText } from "@prismicio/richtext";
import { PrismicRichText } from "@prismicio/react";
import HomePageTableColumn from "./HomePageTableColumn";
import type { HomepageDocumentDataBodyTableSlice } from "types.generated";

function HomePageTable({ data }: { data: HomepageDocumentDataBodyTableSlice }) {
  const descriptions = data.items.map((item) => item.description);

  return (
    <section className={!data.primary.mobile ? "desktop-only" : ""}>
      {asText(data.primary.title) !== "" ? (
        <div className="grid-container">
          <div
            className={
              "col-span-4 mb-6 pb-0 pt-14 md:col-span-12 md:mb-0 md:border-b md:border-b-black/30 md:pb-5"
            }
          >
            <h1 className={"display--2"}>{asText(data.primary.title)}</h1>
          </div>
        </div>
      ) : null}

      <div className="max-container">
        <div className="desktop-only--grid grid-container--full">
          {data.items.map((item, index) => {
            return (
              <div
                key={`Title-${item.title}-${index}`}
                className={"col-span-4 md:col-span-3"}
              >
                {asText(item.number) !== "" ? (
                  <h2 className={"heading--2 mb-10 pt-2 md:mb-44"}>
                    {asText(item.number)}
                  </h2>
                ) : null}
                <h3 className={"heading--2 mb-5"}>{asText(item.title)}</h3>
              </div>
            );
          })}
        </div>

        <div className="desktop-only--grid grid-container--full">
          {descriptions.map((description, index) => {
            return (
              <div
                key={`Description-${index}`}
                className={"col-span-4 md:col-span-3"}
              >
                <PrismicRichText
                  field={description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className={"body--3 mb-10 whitespace-pre-line"}>
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            );
          })}
        </div>

        <div
          className={
            "grid-container--full overflow-hidden md:border-t md:border-t-black/30"
          }
        >
          {data.items.map((item, index) => {
            return (
              <HomePageTableColumn key={`TableHeader-${index}`} item={item} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomePageTable;
