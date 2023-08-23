import clsx from "clsx";
import { gsap } from "gsap";
import easings from "~/lib/easings";
import { asText } from "@prismicio/richtext";
import { useLockedBody } from "usehooks-ts";
import { useLoaderData } from "@remix-run/react";
import { useLayoutEffect } from "~/hooks";
import { Video } from "~/components/Video";
import { Image } from "~/components/Image";
import TextCta from "~/components/CTA/TextCTA";
import WorkProjectHeroTable from "~/slices/WorkProject/WorkProjectHeroTable";
import type { MouseEventHandler } from "react";
import type {
  FilledLinkToWebField,
  ImageField,
  RichTextField,
} from "@prismicio/types";
import type { ButtonProps } from "react-html-props";
import type { loader } from "~/routes/work.$project";

export function WorkProjectHeroTitle({ title }: { title?: RichTextField }) {
  return (
    <div
      className={"col-span-4 my-12 h-[7rem] md:col-span-12 md:mb-32 md:mt-24"}
    >
      <h1
        className={"display--1"}
        dangerouslySetInnerHTML={{ __html: title ? `${asText(title)}` : "" }}
      />
    </div>
  );
}

export function WorkProjectHeroCapabilities({
  field,
}: {
  field?: RichTextField;
}) {
  return (
    <div
      className={"relative col-span-4 mb-12 md:col-span-12 md:mb-2 md:pb-20"}
    >
      <h3 className={"heading--3"}>{field ? asText(field) : ""}</h3>
    </div>
  );
}

export function WorkProjectHeroCTA({
  field,
  ...props
}: {
  field?: RichTextField | string;
} & ButtonProps) {
  return (
    <div className="desktop-only md:col-span-5">
      <button className={"heading--3 overflow-hidden"} {...props}>
        <div className={"hero-table-row__item"}>
          <span className={"inline-block"}>( </span>
          <TextCta className={"heading--3"}>
            {typeof field === "string" ? field : field ? asText(field) : ""}
          </TextCta>
          <span className={"inline-block"}> )</span>
        </div>
      </button>
    </div>
  );
}

export function WorkProjectHeroLine({ className }: { className?: string }) {
  return (
    <div className="desktop-only relative mb-2 md:col-span-12">
      <div
        className={clsx(
          className,
          "hero-table-line absolute bottom-0 hidden w-full origin-left border-b border-b-white/30 md:block"
        )}
      ></div>
    </div>
  );
}

export function WorkProjectHeroVideo({
  field,
  poster,
  className,
}: {
  field: FilledLinkToWebField;
  poster: ImageField;
  className?: string;
}) {
  return (
    <div
      className={
        "hero-video col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3"
      }
    >
      <Video
        autoPlay
        src={field.url}
        className={className}
        poster={poster.url ?? ""}
      />
    </div>
  );
}

function WorkProjectHero({
  toggleProjectDetails,
}: {
  toggleProjectDetails?: MouseEventHandler;
}) {
  const [, setLocked] = useLockedBody(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        autoRemoveChildren: true,
        onComplete: () => {
          setLocked(false);
        },
      });

      const video = document.querySelector(".hero-video>video");

      tl.to(video, {
        y: 0,
        duration: 1,
        autoAlpha: 1,
        ease: easings.mask,
      });
    });

    return () => ctx.revert();
  }, []);

  const { hero } = useLoaderData<typeof loader>();

  return (
    <div id={"project-hero"} className={"relative overflow-hidden bg-black"}>
      <div className={"hero-project-bg-container"}>
        <Image
          field={hero.background_image}
          className={"absolute left-0 top-0 min-h-full w-full object-cover"}
        />
      </div>

      <div className="grid-container relative pt-header text-white md:pt-headerDesk">
        <WorkProjectHeroTitle title={hero.title} />
        <WorkProjectHeroCapabilities field={hero.capabilities} />
        <WorkProjectHeroLine />
        <WorkProjectHeroCTA field={hero.cta} onClick={toggleProjectDetails} />
        <WorkProjectHeroTable data={hero} />
      </div>

      <div className="grid-container relative pb-10 text-white md:pb-52">
        <WorkProjectHeroVideo
          // @ts-ignore
          field={hero.reel}
          poster={hero.reel_cover}
          className={"translate-y-1/2 opacity-0"}
        />
      </div>

      {/*<div className="grid-container">
        <div className="col-span-4 flex w-full justify-between md:hidden">
          <span className={"label--2 text-white"}>CREDIT</span>
          <span className={"label--2 text-white"}>PHOTOGRAPHY:</span>
          <span className={"label--2 text-white"}>JORDAN NELSON</span>
        </div>
      </div>*/}
    </div>
  );
}

export default WorkProjectHero;
