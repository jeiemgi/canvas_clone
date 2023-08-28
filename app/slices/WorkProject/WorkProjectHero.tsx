import { gsap } from "gsap";
import easings from "~/lib/easings";
import { useLockedBody } from "usehooks-ts";
import { useLoaderData } from "@remix-run/react";
import { useLayoutEffect } from "~/hooks";
import { Video } from "~/components/Video";

import type { MouseEventHandler } from "react";
import type { ImageField, FilledLinkToWebField } from "@prismicio/types";
import type { loader } from "~/routes/work.$project";
import ProjectHero from "~/components/ProjectHero";

export function WorkProjectHeroVideo({
  field,
  poster,
  className,
}: {
  field: FilledLinkToWebField;
  poster: ImageField;
  className?: string;
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
  const { hero } = useLoaderData<typeof loader>();

  return (
    <div className={"relative"}>
      <ProjectHero
        cta={toggleProjectDetails}
        image={hero.background_image}
        subTitleField={hero.capabilities}
        tableData={hero}
        titleField={hero.title}
      >
        <div className="grid-container pb-10 md:pb-52">
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
      </ProjectHero>
    </div>
  );
}

export default WorkProjectHero;
