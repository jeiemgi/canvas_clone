import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

interface HomepageProjectProps {
  title: string;
  capabilities: string;
  description: string;
  cta: string;
  image: string;
  containerClassName?: string;
}

function HomePageProject({
  title,
  capabilities,
  description,
  cta,
  image,
  containerClassName = "",
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
          <h3 className={"heading--3 text-white"}>{title}</h3>
          <h3 className={"desktop-only heading--3 text-white"}>1 / 5</h3>
        </div>
      </div>

      <div className={"mobile-only col-span-4"}>
        <h3 className={"heading--3 text-center text-white"}>( {cta} )</h3>
      </div>

      <div className="grid-container bottom-0 overflow-hidden pb-28 md:absolute md:h-[500px] md:pb-0">
        <div className="col-span-5 mb-11 self-end md:mb-0 md:py-8">
          <h3 className={"heading--3 text-white"}>{capabilities}</h3>
        </div>

        <div className={"col-span-4 md:col-start-9"}>
          <p className={"body--2 mb-5 text-white"}>{description}</p>
          <div className="desktop-only">
            <div className={"mb-5 h-[300px] w-full bg-grey"}></div>
            <div className={"mb-5 h-[300px] w-full bg-grey"}></div>
            <div className={"mb-5 h-[300px] w-full bg-grey"}></div>
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
  return (
    <section>
      <HomePageProject
        image={data.primary.background_image.url || ""}
        cta={asText(data.primary.cta) || ""}
        title={asText(data.primary.title) || ""}
        capabilities={asText(data.primary.capabilities) || ""}
        description={asText(data.primary.description) || ""}
      />
    </section>
  );
}

export default HomePageProjects;
