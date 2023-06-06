import clsx from "clsx";
import { useLayoutEffect } from "~/hooks";
import { useCallback, useRef } from "react";
import { asText } from "@prismicio/richtext";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

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
      const background = gsap.utils.toArray<HTMLDivElement>(".background")[0];
      const slider = gsap.utils.toArray<HTMLDivElement>(".slider")[0];

      if (background && slider) {
        const scrollHeight = slider.scrollHeight;
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `bottom+=${scrollHeight} top`,
          scrub: true,
          pin: background,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={"HomePageProject"} ref={setRef}>
      <div
        className={clsx(
          "bg-blue-500",
          "relative flex  flex-col justify-between overflow-hidden"
        )}
      >
        <div
          className={
            "background absolute inset-0 flex h-screen w-full items-end overflow-hidden bg-cover bg-fixed"
          }
        >
          <img
            alt="Background"
            className={"w-full object-cover "}
            src={data.primary.background_image.url || ""}
          />
        </div>

        <div className="grid-container">
          <div
            className={
              "col-span-4 flex items-end justify-between pt-5 md:col-span-3 md:pt-8"
            }
          >
            <h3 className={"heading--3 text-white"}>
              {asText(data.primary.title)} <br /> CASE STUDY
            </h3>
            <h3 className={"desktop-only heading--3 text-white"}>1 / 5</h3>
          </div>
        </div>

        <div className={"mobile-only col-span-4"}>
          <h3 className={"heading--3 text-center text-white"}>{`( ${asText(
            data.primary.cta
          )} )`}</h3>
        </div>

        <div className="grid-container bottom-0 overflow-hidden pb-28 md:absolute md:pb-0">
          <div className="col-span-5 mb-11 self-end md:mb-0 md:py-8">
            <h3 className={"heading--3 text-white"}>
              {asText(data.primary.capabilities)}
            </h3>
          </div>
        </div>

        <div className="desktop-only--grid grid-container">
          <div
            className={
              "slider relative col-span-4 pb-[50vh] pt-[50vh] md:col-start-9"
            }
          >
            <p className={"body--2 mb-5 max-w-[500px] text-white"}>
              {asText(data.primary.description)}
            </p>
            {data.items.map(({ slide }, index) => (
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
    </div>
  );
}

export default HomePageProjects;
