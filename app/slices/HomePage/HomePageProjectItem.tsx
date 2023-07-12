import clsx from "clsx";
import { useNavigate } from "react-router";
import { asText } from "@prismicio/richtext";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "../../../types.generated";
import { Image } from "~/components/Image";

interface HomePageProjectItemProps {
  className?: string;
  data: HomepageDocumentDataBodyHomepageProjectSlice;
}

function HomePageProjectItem({ className, data }: HomePageProjectItemProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/work/${data.primary.slug}`)}
      className={clsx(
        className,
        "HomePageProjects--project",
        "relative flex cursor-pointer flex-col justify-between overflow-hidden"
      )}
    >
      <div className="desktop-only--grid grid-container">
        <div className={"col-span-4 pb-[50vh] pt-[50vh] md:col-start-9"}>
          <p
            data-lag={0.2}
            data-speed={"clamp(1.5)"}
            className={"body--2 mb-5 max-w-[500px] text-white"}
          >
            {asText(data.primary.description)}
          </p>
          {data.items.map(({ slide }, index) => (
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
  );
}

export default HomePageProjectItem;
