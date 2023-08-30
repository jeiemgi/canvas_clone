import { gsap } from "gsap";
import clsx from "clsx";
import { useCallback, useRef } from "react";
import { ClearIcon } from "~/svg";
import { useLayoutEffect } from "~/hooks";
import { Image } from "~/components/Image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import random from "canvas-sketch-util/random";
import type { MouseEvent } from "react";
import type { HomepageDocumentDataBodyHomeReviewsSlice } from "types.generated";

interface Props {
  data: HomepageDocumentDataBodyHomeReviewsSlice;
}

function getRandomCoordinates(width: number, height: number) {
  return [random.rangeFloor(width), random.rangeFloor(height)] as const;
}

function HomePageReviews({ data }: Props) {
  const container = useRef<HTMLDivElement>(null);

  const onClearClick = () => {
    gsap.to(imagesRefs.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "back.out",
      stagger: 0.05,
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (!self.selector) return;

      imagesRefs.current.forEach((img, index) => {
        if (!imagesContainer.current) return;
        const [x, y] = getRandomCoordinates(
          imagesContainer.current.clientWidth - img.clientWidth,
          imagesContainer.current.clientHeight - img.clientHeight
        );
        gsap.set(img, { x, y });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const imagesContainer = useRef<HTMLDivElement>(null);
  const imagesRefs = useRef<Array<HTMLDivElement>>([]);
  const setImgRef = useCallback((node: HTMLDivElement | null) => {
    if (node) imagesRefs.current = [...imagesRefs.current, node];
  }, []);

  const onMouseOverImage = (e: MouseEvent<HTMLDivElement>) => {
    gsap.to(e.target, { opacity: 1, zIndex: 1, duration: 0.3 });

    if (e.target instanceof Element)
      gsap.to(e.target.querySelector("img"), {
        scale: 1,
        duration: 0.4,
        ease: "back.out",
      });
  };
  const onMouseLeaveImage = (e: MouseEvent<HTMLDivElement>) => {
    gsap.to(e.target, { zIndex: 0, duration: 0.3 });

    if (e.target instanceof Element)
      gsap.to(e.target.querySelector("img"), {
        scale: 0.95,
        delay: 0.2,
        duration: 0.2,
        ease: "back.out",
      });
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
          "reviews-image-bg pointer-events-none absolute left-0 top-0 flex h-full w-full items-center"
        )}
      >
        <img
          className={"h-full w-full object-cover md:object-contain"}
          src={data.primary.background_image.url || ""}
          alt={data.primary.background_image.alt || ""}
        />
      </div>

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

      <div className={"desktop-only absolute h-full w-full p-20"}>
        <div ref={imagesContainer} className={"relative h-full w-full"}>
          {data.items.map((field, index) => {
            return (
              <div
                onMouseLeave={onMouseLeaveImage}
                onMouseOver={onMouseOverImage}
                ref={(node) => setImgRef(node)}
                key={`HomePageReviews-${index}`}
                className={"absolute w-[35%] opacity-0"}
              >
                <Image
                  field={field.image}
                  className={"pointer-events-none object-contain"}
                />
              </div>
            );
          })}
        </div>
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
