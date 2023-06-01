import { asText } from "@prismicio/richtext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import type { HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlice } from "types.generated";

type Props = {
  data: HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlice;
};

export default function HomePagePortfolioMobile({ data }: Props) {
  return (
    <section className={"w-full bg-white"}>
      <div
        className={
          "mobile-only noise-background bg-black pt-[6.5rem] text-white last:pb-8"
        }
      >
        <div className="max-container">
          <h2 className={"heading--2 mb-7 border-t border-t-white/30 pt-2.5"}>
            {asText(data.primary.title)}
          </h2>
        </div>
        <div className={"w-full"}>
          <Splide
            extensions={{ AutoScroll }}
            options={{
              type: "loop",
              drag: "free",
              perPage: 1,
              focus: "center",
              fixedWidth: "15.5rem",
              gap: "0.625rem",
              autoScroll: {
                speed: 1,
              },
            }}
            className={"splide mb-7"}
          >
            {data.items.map((item, index) => (
              <SplideSlide className={"max-w-2"} key={item.images.url!}>
                <img src={item.images.url!} alt={item.images.alt || ""} />
              </SplideSlide>
            ))}
          </Splide>

          <p className={"body--3 whitespace-pre-line"}>
            {asText(data.primary.description)}
          </p>
        </div>
      </div>
    </section>
  );
}
