import clsx from "clsx";
import { useNavigate } from "react-router";
import { asText } from "@prismicio/richtext";
import { Image } from "~/components/Image";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  const navigate = useNavigate();

  return (
    <div className={"gsap-scroll--container"}>
      {data.map((project, index) => (
        <div
          key={`HomePageProjectItem-${index}`}
          onClick={() => navigate(`/work/${project.primary.slug}`)}
          className={clsx(
            "gsap-scroll--item",
            "group relative flex cursor-pointer flex-col justify-between overflow-hidden"
          )}
        >
          <div className="desktop-only--grid grid-container">
            <div
              className={clsx(
                index === 0 ? "pt-0" : "pt-[50vh]",
                "col-span-4 pb-[50vh] pt-[50vh] md:col-start-9"
              )}
            >
              <p
                data-lag={0.2}
                data-speed={"clamp(1.5)"}
                className={"body--2 mb-5 max-w-[500px] text-white"}
              >
                {asText(project.primary.description)}
              </p>
              {project.items.map(({ slide }, index) => (
                <div
                  data-lag={0.2 * index}
                  key={`ProjectImage-${slide.url}-${index}`}
                  className={"mb-5 w-full"}
                >
                  {slide.url ? (
                    <Image
                      field={slide}
                      className={"h-full w-full object-contain"}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePageProjectScrollContainer;
