import React from "react";
import { useLoaderData } from "@remix-run/react";
import { RichText } from "~/components/RichText";
import type { loader } from "~/routes/work.$project";
import Video from "../../components/Video/Video";
import { ButtonCTA } from "~/components/Button";

function WorkProjectHero() {
  const { hero } = useLoaderData<typeof loader>();
  return (
    <div
      className={"relative bg-black bg-cover bg-top"}
      style={{ backgroundImage: `url(${hero.background_image.url || ""})` }}
    >
      <div className="grid-container relative pb-10 pt-header text-white md:pb-52">
        <div className={"col-span-4 my-12 md:col-span-12 md:mb-32 md:mt-20"}>
          <RichText field={hero.title} />
        </div>

        <div
          className={
            "col-span-4 mb-12 md:col-span-12 md:mb-2 md:border-b md:border-b-white/30 md:pb-20"
          }
        >
          <RichText field={hero.capabilities} />
        </div>

        <div className="desktop-only md:col-span-4">
          <ButtonCTA>
            <RichText field={hero.cta} />
          </ButtonCTA>
        </div>

        <div className="col-span-4 mb-10 border-t border-white/30 md:col-span-5 md:col-start-8 md:border-t-0">
          <div className={"flex items-center pb-8 pt-3"}>
            <span className={"label--2 w-1/2"}>Role</span>
            <span className={"label--2 w-1/2"}>Links</span>
          </div>

          {hero.roles.map((item, index) => {
            return (
              <div
                key={`WorkHero-Roles-${index}`}
                className={"flex border-t border-t-white/30 py-2.5"}
              >
                <div className={"w-1/2"}>
                  <span className={"body--3"}>{item.role_item}</span>
                </div>
                <div className={"w-1/2"}>
                  <span className={"body--3"}>{hero.links[index]?.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={"col-span-4 mb-10 md:col-span-8 md:col-start-3"}>
          <Video />
        </div>

        <div className="col-span-4 flex w-full justify-between md:hidden">
          <span className={"label--2 text-white"}>credit</span>
          <span className={"label--2 text-white"}>photography:</span>
          <span className={"label--2 text-white"}>jordan nelson</span>
        </div>
      </div>
    </div>
  );
}

export default WorkProjectHero;
