import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "~/hooks";
import { ClearIcon } from "~/svg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { MouseEvent } from "react";
import type { HomepageDocumentDataBodyHomeReviewsSlice } from "types.generated";
// @ts-ignore
import random from "canvas-sketch-util/random";
import { mdScreen } from "~/lib/gsapUtils";
import clsx from "clsx";

interface Props {
  data: HomepageDocumentDataBodyHomeReviewsSlice;
}

function HomePageReviews({ data }: Props) {
  const container = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    random.getRandomSeed();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();
      mm.add(mdScreen, () => {
        ScrollTrigger.create({
          trigger: container.current,
          end: "+=100%",
          pin: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const onMouseEnter = (e: MouseEvent<HTMLImageElement>) => {
    // @ts-ignore
    if (e.target.style.opacity === 1) return;

    // @ts-ignore
    e.target.style.display = "block";
  };

  const onClearClick = () => {
    const images = document.getElementsByClassName(
      "review-image"
    ) as HTMLCollection;
    for (let i = 0; i < images.length; i++) {
      // @ts-ignore
      images[i].style.display = "none";
    }
  };

  useEffect(() => {
    gsap.to(".reviews-image-bg", {
      x: -gsap.utils.interpolate(0, sliderWidth, progress),
    });
  }, [progress, sliderWidth]);

  return (
    <section
      ref={container}
      className={
        "relative h-screen w-full select-none overflow-hidden bg-royal-blue pt-headerHeightMobile md:pt-0"
      }
    >
      {/*<div className={"grid-container relative"}>
        <div className="col-span-3">
          <TextBlur black>5 STARS</TextBlur>
        </div>
        <div className="col-span-3 col-start-9">
          <TextBlur black>REVIEWS</TextBlur>
        </div>

        <div className="col-span-3 col-start-4">
          <TextBlur black>REVIEWS</TextBlur>
        </div>

        <div className="col-span-3 col-start-8">
          <TextBlur black>CONQUER</TextBlur>
        </div>

        <div className="col-span-5 col-start-6">
          <TextBlur black>5 STARS CONQUER</TextBlur>
        </div>

        <div className="col-span-1 col-start-12">
          <TextBlur verticalRight black>
            CONQUER
          </TextBlur>
          <TextBlur verticalRight black>
            ROAM
          </TextBlur>
        </div>
        <div className="absolute bottom-0 col-span-1 col-start-1">
          <TextBlur verticalLeft black>
            LEXINGTON
          </TextBlur>
        </div>
      </div>*/}

      <div
        className={clsx(
          "reviews-image-bg",
          "mobile-only pointer-events-none absolute left-0 top-0 h-full md:w-full"
        )}
        style={{ width: `${sliderWidth}px` }}
      >
        <img
          className={"h-full"}
          src={data.primary.background_image.url || ""}
          alt={data.primary.background_image.alt || ""}
        />
      </div>

      <img
        className={
          "desktop-only pointer-events-none h-full w-full object-cover"
        }
        src={data.primary.background_image.url || ""}
        alt={data.primary.background_image.alt || ""}
      />

      <div className={"absolute left-0 top-0 items-center pl-1.5 pt-8 md:p-8"}>
        <h3 className={"heading--3 mr-2 inline-block text-white"}>
          what the users are saying...
        </h3>
      </div>

      <div className={"mobile-only flex h-full items-center"}>
        <Splide
          onMounted={(splide) => {
            const { Layout } = splide.Components;
            setSliderWidth(Layout.sliderSize());
          }}
          onDragging={(splide) => {
            const { Layout, Move, Direction } = splide.Components;
            const position = Direction.orient(Move.getPosition());
            const base = Layout.sliderSize() - Layout.listSize();
            const rate = position / base;
            const progress = Math.min(Math.max(rate, 0), 1);

            setProgress(progress);
          }}
          options={{
            padding: { left: "8%", right: "8%" },
            arrows: false,
          }}
        >
          {data.items.map((item, index) => (
            <SplideSlide key={`Review-Card-Img-Mobile-${index}`}>
              <img src={item.image.url!} alt={item.image.alt || ""} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="desktop-only absolute h-full w-full">
        {data.items.map((item, index) => {
          const x = random.range(0.1, 0.7) * 100;
          const y = random.range(0.2, 0.7) * 100;

          return (
            <img
              onMouseEnter={onMouseEnter}
              style={{ left: `${x}%`, top: `${y}%` }}
              key={`Review-Card-Img-${index}`}
              src={item.image.url || ""}
              alt={item.image.alt || ""}
              className={"review-image display-none absolute left-0 top-0 z-0"}
            />
          );
        })}
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
