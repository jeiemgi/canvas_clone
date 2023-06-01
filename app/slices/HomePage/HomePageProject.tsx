import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import type {
  HomepageDocumentDataBodyHomepageProjectSlice,
  HomepageDocumentDataBodyHomepageProjectSliceItem,
} from "types.generated";
import { useCallback, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

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
  id,
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
        "relative flex h-[90vh] flex-col justify-between bg-cover bg-center md:h-screen",
        containerClassName
      )}
      style={{ backgroundImage: `url('${image}')` }}
    >
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
        <div className={"relative col-span-4 h-[500px] md:col-start-9"}>
          <div className="HomepageProject-Slider absolute  w-full">
            <p className={"body--2 mb-5 max-w-[500px] text-white"}>
              {description}
            </p>
            {slides.map((slide, index) => (
              <div
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

function HomePageProjects({
  data,
}: {
  data: HomepageDocumentDataBodyHomepageProjectSlice;
}) {
  const container = useRef<HTMLDivElement>();

  const setRef = useCallback((ref: never) => {
    if (ref) container.current = ref;
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      if (container.current) {
        const slider = container.current?.getElementsByClassName(
          "HomepageProject-Slider"
        );

        gsap.to(slider, {
          y: "-100%",
          scrollTrigger: {
            trigger: container.current,
            end: `+=${slider[0].scrollHeight + window.innerHeight / 2}`,
            pin: true,
            scrub: true,
          },
        });
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
