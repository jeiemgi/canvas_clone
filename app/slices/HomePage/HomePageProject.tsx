import clsx from "clsx";
import { useLayoutEffect } from "~/hooks";
import { useCallback, useRef } from "react";
import { asText } from "@prismicio/richtext";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import type {
  HomepageDocumentDataBodyHomepageProjectSlice,
  HomepageDocumentDataBodyHomepageProjectSliceItem,
} from "types.generated";

function HomePageProjects({
  data,
}: {
  data: HomepageDocumentDataBodyHomepageProjectSlice;
}) {
  const containerRef = useRef<HTMLDivElement>();

  const setRef = useCallback((ref: never) => {
    if (ref) containerRef.current = ref;
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      try {
        const container = containerRef.current;
        const background = container?.getElementsByClassName(
          "HomepageProject-Background"
        )[0];
        const backgroundImage = background?.getElementsByTagName("img")[0];
        const slider = container?.getElementsByClassName(
          "HomepageProject-Slider"
        )[0];

        if (container && background && backgroundImage && slider) {
          const scrollHeight = slider.scrollHeight;

          ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: `bottom+=${scrollHeight} top`,
            scrub: true,
            pin: background,
          });

          // PIN AND MOVE THE IMAGE UP FOR PARALLAX EFFECT
          gsap.to(backgroundImage, {
            y: "10%",
            scrollTrigger: {
              trigger: slider,
              start: "bottom bottom",
              end: `bottom top`,
              scrub: true,
              markers: true,
            },
          });
        }
      } catch (error) {
        console.log("HomePageProject [ERROR]", error);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={"HomePageProject"} ref={setRef}>
      <HomePageProject
        image={data.primary.background_image.url || ""}
        cta={asText(data.primary.cta) || ""}
        title={asText(data.primary.title) || ""}
        capabilities={asText(data.primary.capabilities) || ""}
        description={asText(data.primary.description) || ""}
        slides={data.items.map((item) => item.slide)}
      />
    </div>
  );
}

export default HomePageProjects;

interface HomepageProjectProps {
  capabilities: string;
  containerClassName?: string;
  cta: string;
  description: string;
  image: string;
  slides: HomepageDocumentDataBodyHomepageProjectSliceItem["slide"][];
  title: string;
}

function HomePageProject({
  capabilities,
  containerClassName,
  cta,
  description,
  image,
  slides,
  title,
}: HomepageProjectProps) {
  return (
    <div
      className={clsx(
        "relative flex  flex-col justify-between overflow-hidden",
        containerClassName
      )}
    >
      <div
        className={
          "HomepageProject-Background absolute inset-0 flex h-screen w-full items-end overflow-hidden"
        }
      >
        <img src={image} alt="Background" className={"w-full object-cover "} />
      </div>

      <div className="grid-container">
        <div
          className={
            "col-span-4 flex items-end justify-between pt-5 md:col-span-3 md:pt-8"
          }
        >
          <h3 className={"heading--3 text-white"}>
            {title} <br /> CASE STUDY
          </h3>
          <h3 className={"desktop-only heading--3 text-white"}>1 / 5</h3>
        </div>
      </div>

      <div className={"mobile-only col-span-4"}>
        <h3 className={"heading--3 text-center text-white"}>{`( ${cta} )`}</h3>
      </div>

      <div className="grid-container bottom-0 overflow-hidden pb-28 md:absolute md:pb-0">
        <div className="col-span-5 mb-11 self-end md:mb-0 md:py-8">
          <h3 className={"heading--3 text-white"}>{capabilities}</h3>
        </div>
      </div>

      <div className="desktop-only--grid grid-container">
        <div
          className={
            "HomepageProject-Slider relative col-span-4 pb-[50vh] pt-[50vh] md:col-start-9"
          }
        >
          <p className={"body--2 mb-5 max-w-[500px] text-white"}>
            {description}
          </p>
          {slides.map((slide, index) => (
            <div
              data-lag={0.1 * index}
              key={`ProjectImage-${slide.url}-${index}`}
              className={"mb-5 w-full"}
            >
              {slide.url ? (
                <img
                  src={slide.url}
                  alt={slide.alt || ""}
                  className={"h-full w-full object-contain"}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
