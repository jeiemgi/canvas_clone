import { Link } from "@remix-run/react";
import { Image } from "~/components/Image";
import { asText } from "@prismicio/richtext";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import clsx from "clsx";

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  return (
    <div className={"gsap-scroll--container"}>
      {data.map((project, index) => (
        <Link
          key={`HomePageProjectItem-${index}`}
          to={`/work/${project.primary.slug}`}
          className={
            "gsap-scroll--item group relative flex cursor-pointer flex-col justify-between overflow-hidden"
          }
        >
          <div className="desktop-only--grid grid-container">
            <div
              className={clsx(
                index === 0 ? "pt-[50vh]" : "pt-[80vh]",
                "col-span-4 pb-[20vh] md:col-start-9"
              )}
            >
              <p className={"body--2 mb-5 max-w-[500px] text-white"}>
                {asText(project.primary.description)}
              </p>
              {project.items.map(({ slide }, index) => (
                <div
                  data-lag={0.05 * index}
                  className={"mb-5 overflow-hidden"}
                  key={`ProjectImage-${slide.url}-${index}`}
                >
                  <Image
                    field={slide}
                    data-speed={0.95}
                    className={"w-full object-contain"}
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePageProjectScrollContainer;
