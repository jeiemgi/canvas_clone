import { asText } from "@prismicio/richtext";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import ButtonCTA from "~/components/Button/ButtonCTA";
// import { useLockedBody } from "usehooks-ts";
import type { loader } from "~/routes/work.$project";
import type { RichTextField } from "@prismicio/types";

export function WorkProjectHeroTitle({ title }: { title: RichTextField }) {
  return (
    <div className={"col-span-4 my-12 md:col-span-12 md:mb-32 md:mt-24"}>
      <h1
        className={"display--1"}
        dangerouslySetInnerHTML={{ __html: `${asText(title)}` }}
      />
    </div>
  );
}

function WorkProjectHero() {
  const [, setSearchParams] = useSearchParams();
  const { hero } = useLoaderData<typeof loader>();
  return (
    <div className={"relative overflow-hidden bg-black"}>
      <Image
        field={hero.background_image}
        className={"absolute left-0 top-0 h-full object-cover"}
      />
      <div className="grid-container relative pb-10 pt-header text-white md:pb-52 md:pt-headerDesk">
        <WorkProjectHeroTitle title={hero.title} />
        <div
          className={
            "col-span-4 mb-12 md:col-span-12 md:mb-2 md:border-b md:border-b-white/30 md:pb-20"
          }
        >
          <h3 className={"heading--3"}>{asText(hero.capabilities)}</h3>
        </div>

        <div className="desktop-only md:col-span-4">
          <ButtonCTA
            onClick={() => {
              // setLock(true);
              setSearchParams("projectDetails=true");
            }}
          >
            {asText(hero.cta)}
          </ButtonCTA>
        </div>

        <div className="col-span-4 mb-10 border-t border-white/30 md:col-span-5 md:col-start-8 md:mb-40 md:border-t-0">
          <div className={"flex items-center pb-8 pt-3"}>
            <span className={"label--2 w-1/2"}>Role</span>
            <span className={"label--2 w-1/2"}>Links</span>
          </div>

          {hero.roles.map((item, index) => {
            return (
              <div
                key={`WorkHero-Roles-${index}`}
                className={"flex border-t border-white/30 py-2.5 last:border-b"}
              >
                <div className={"w-1/2"}>
                  <span className={"body--3"}>{item.role_item}</span>
                </div>
                <div className={"w-1/2"}>
                  {hero.links[index] ? (
                    <a
                      rel="noreferrer"
                      target={"_blank"}
                      className={"body--3"}
                      // @ts-ignore
                      href={hero.links[index]?.link_item?.url}
                    >
                      {hero.links[index]?.label}
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className={"col-span-4 mb-10 md:col-span-8 md:col-start-3"}>
          <Video
            autoPlay
            // @ts-ignore
            src={hero.reel.url}
            poster={hero.reel_cover.url ?? ""}
          />
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
