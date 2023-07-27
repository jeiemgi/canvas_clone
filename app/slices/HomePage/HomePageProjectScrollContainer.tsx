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
            "gsap-scroll--item group relative flex cursor-pointer flex-col justify-between overflow-hidden"
          )}
        >
          <div className="desktop-only--grid grid-container">
            <div className={clsx("col-span-4 py-[50vh] md:col-start-9")}>
              <p className={"body--2 mb-5 max-w-[500px] text-white"}>
                {asText(project.primary.description)}
              </p>
              {project.items.map(({ slide }, index) => (
                <div
                  data-lag={0.05 * index}
                  key={`ProjectImage-${slide.url}-${index}`}
                >
                  <Image
                    field={slide}
                    className={"mb-5 w-full object-contain"}
                  />
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
