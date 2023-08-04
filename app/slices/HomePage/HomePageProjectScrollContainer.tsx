import { Link } from "@remix-run/react";
import { Image } from "~/components/Image";
import { asText } from "@prismicio/richtext";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  return (
    <div className={"gsap-scroll--container pointer-events-none"}>
      {data.map((project, index) => (
        <Link
          key={`HomePageProjectItem-${index}`}
          to={`/work/${project.primary.slug}`}
          className={
            "gsap-scroll--item group relative flex cursor-pointer flex-col justify-between overflow-hidden"
          }
        >
          <div className="desktop-only--grid grid-container">
            <div className={"col-span-4 pb-[90vh] pt-[50vh] md:col-start-9"}>
              <p className={"body--2 mb-5 max-w-[500px] text-white"}>
                {asText(project.primary.description)}
              </p>
              {project.items.map(({ slide }, index) => (
                <div key={`ProjectImage-${slide.url}-${index}`}>
                  <Image
                    field={slide}
                    data-lag={0.04 * index}
                    className={"mb-5 w-full object-contain"}
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
