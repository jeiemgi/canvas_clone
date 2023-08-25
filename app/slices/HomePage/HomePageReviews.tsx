import { gsap } from "gsap";
import clsx from "clsx";
import { useRef } from "react";
import { useLayoutEffect } from "~/hooks";
import { ClearIcon } from "~/svg";
import { Image } from "~/components/Image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { mdScreen } from "~/lib/gsapUtils";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomepageDocumentDataBodyHomeReviewsSlice } from "types.generated";

interface Props {
  data: HomepageDocumentDataBodyHomeReviewsSlice;
}

function HomePageReviews({ data }: Props) {
  const container = useRef(null);

  const onClearClick = () => {
    gsap.set(".review-image-desk", { opacity: 0 });
  };

  return (
    <section
      ref={container}
      className={
        "relative h-screen w-full select-none overflow-hidden bg-royal-blue"
      }
    >
      <div
        className={clsx(
          "mobile-only",
          "reviews-image-bg pointer-events-none absolute left-0 top-0 h-full md:w-full"
        )}
      >
        <img
          className={"h-full object-cover"}
          src={data.primary.background_image.url || ""}
          alt={data.primary.background_image.alt || ""}
        />
      </div>

      <img
        className={
          "desktop-only pointer-events-none absolute h-full w-full object-contain"
        }
        src={data.primary.background_image.url || ""}
        alt={data.primary.background_image.alt || ""}
      />

      <div className={"absolute left-0 top-0 items-center pl-1.5 pt-8 md:p-8"}>
        <h3 className={"heading--3 mr-2 inline-block text-white"}>
          what the users are saying...
        </h3>
      </div>

      <div className={"mobile-only--flex h-full items-center"}>
        <Splide
          options={{
            perMove: 1,
            padding: { left: "8%", right: "8%" },
            arrows: false,
            pagination: false,
          }}
        >
          {data.items.map((item, index) => (
            <SplideSlide key={`Review-Card-Img-Mobile-${index}`}>
              <Image field={item.image} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div
        id={"desktop-reviews-container"}
        className={clsx(
          "desktop-only--flex absolute left-0 top-0 h-full w-full",
          "md:items-center md:justify-center"
        )}
      >
        <img src="/images/reviews-sample.png" alt="" />
      </div>

      <div
        className={
          "desktop-only absolute bottom-0 right-0 cursor-pointer items-center p-8"
        }
        onClick={onClearClick}
      >
        <h3 className={"heading--3 mr-2 inline-block text-white"}>( CLEAR )</h3>
        <span className={"inline-block"}>
          <ClearIcon />
        </span>
      </div>
    </section>
  );
}

export default HomePageReviews;
