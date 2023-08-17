import { gsap } from "gsap";
import easings from "~/lib/easings";
import { asText } from "@prismicio/richtext";
import { useLockedBody } from "usehooks-ts";
import { useLoaderData, useLocation } from "@remix-run/react";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import TextCta from "~/components/CTA/TextCTA";
import { useLayoutEffect } from "~/hooks";
import type { loader } from "~/routes/work.$project";
import type { RichTextField } from "@prismicio/types";

export function WorkProjectHeroTitle({ title }: { title: RichTextField }) {
  return (
    <div
      className={"col-span-4 my-12 h-[7rem] md:col-span-12 md:mb-32 md:mt-24"}
    >
      <h1
        className={"display--1"}
        dangerouslySetInnerHTML={{ __html: `${asText(title)}` }}
      />
    </div>
  );
}

function WorkProjectHero({
  toggleProjectDetails,
}: {
  toggleProjectDetails: Function;
}) {
  const location = useLocation();
  const [, setLocked] = useLockedBody(true);
  const { hero } = useLoaderData<typeof loader>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        autoRemoveChildren: true,
      });

      const tableItems = document.querySelectorAll(".hero-table-row > *");
      const tableLines = document.querySelectorAll(".hero-table-line");
      const video = document.querySelector(".hero-video");

      const duration = 0.6;
      const ease = easings.mask;
      const stagger = 0.02;

      tl.fromTo(
        tableLines,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration,
          ease,
        }
      );

      tl.fromTo(
        tableItems,
        {
          y: "200%",
        },
        {
          ease,
          duration,
          y: "0%",
          stagger,
        },
        0.2
      );

      tl.fromTo(
        video,
        {
          y: "50%",
          autoAlpha: 0,
        },
        {
          ease,
          y: 0,
          autoAlpha: 1,
          duration,
          onComplete: () => {
            setLocked(false);
          },
        },
        0.2
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id={"project-hero"} className={"relative overflow-hidden bg-black"}>
      <div className={"hero-bg-container"}>
        <Image
          field={hero.background_image}
          className={"absolute left-0 top-0 min-h-full w-full object-cover"}
        />
      </div>

      <div className="grid-container relative pb-10 pt-header text-white md:pb-52 md:pt-headerDesk">
        <WorkProjectHeroTitle key={location.pathname} title={hero.title} />
        <div
          className={
            "relative col-span-4 mb-12 md:col-span-12 md:mb-2 md:pb-20"
          }
        >
          <h3 className={"heading--3"}>{asText(hero.capabilities)}</h3>
          <div
            className={
              "hero-table-line absolute bottom-0 hidden w-full origin-left scale-x-0 border-b border-b-white/30 md:block"
            }
          ></div>
        </div>

        <div className="desktop-only heading--3 md:col-span-5">
          <button
            className={"overflow-hidden"}
            onClick={() => toggleProjectDetails()}
          >
            <div className={"hero-table-row"}>
              <span className={"inline-block"}>( </span>
              <TextCta className={"heading--3"}>{asText(hero.cta)}</TextCta>
              <span className={"inline-block"}> )</span>
            </div>
          </button>
        </div>

        <div className="hero-table col-span-4 mb-10 border-t border-white/30 md:col-span-5 md:col-start-8 md:mb-40 md:border-t-0">
          <div className={"pb-8 pt-3"}>
            <div
              className={"label--2 hero-table-row flex w-full overflow-hidden"}
            >
              <span className={"hero-table-row__item w-1/2"}>Role</span>

              {hero.links.length > 0 ? (
                <span className={"hero-table-row__item w-1/2"}>Links</span>
              ) : null}
            </div>
          </div>

          {hero.roles.map((item, index) => {
            return (
              <div
                key={`WorkHero-Roles-${index}`}
                className={"relative flex overflow-hidden py-2.5"}
              >
                <div className={"hero-table-row flex w-full overflow-hidden"}>
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
                <div
                  className={
                    "hero-table-line absolute bottom-0 w-full origin-left scale-x-0 border-t border-white/30 last:border-b"
                  }
                ></div>
              </div>
            );
          })}
        </div>

        <div
          className={"hero-video col-span-4 mb-10 md:col-span-8 md:col-start-3"}
        >
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
