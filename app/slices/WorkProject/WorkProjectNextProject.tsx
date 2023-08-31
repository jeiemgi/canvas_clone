import easings from "~/lib/easings";
import { gsap } from "gsap";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { useLayoutEffect } from "~/hooks";
import {
  animateBanner,
  ProjectPrefetchLink,
  setupBannerAnimation,
} from "~/components/ProjectHero";
import ProjectHero from "~/components/ProjectHero/ProjectHero";
import type { MouseEvent } from "react";
import type { ProjectPageDocumentDataBodyProjectNextBannerSlice } from "types.generated";
import type { KeyTextField, RichTextField } from "@prismicio/types";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";

interface Props {
  item: ProjectPageDocumentDataBodyProjectNextBannerSlice;
}

function WorkProjectNextContent({ title }: { title: KeyTextField }) {
  return (
    <div
      className={
        "pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col justify-center pl-4 pt-5 md:p-8"
      }
    >
      <div className={"relative h-[10rem]"}>
        <h3
          className={
            "heading--3 WorkProjectNextContentInfo absolute top-0 mb-5 w-full text-left text-white"
          }
        >
          NEXT PROJECT
        </h3>
        <h1
          className={
            "WorkProjectNextContentTitle display--1 absolute bottom-0 text-left text-white"
          }
        >
          <span>{title}</span>
        </h1>
      </div>
    </div>
  );
}

function WorkProjectNextProject({ item }: Props) {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) setupBannerAnimation(container.current);
  }, []);

  const onClick = (e: MouseEvent<HTMLDivElement>, slug: string) => {
    const duration = 1;
    const ease = easings.mask;

    if (e.target instanceof Element) {
      const tl = gsap.timeline({
        onComplete: () => {
          navigate(`/work/${slug}`);
        },
      });

      const other = e.target.querySelectorAll(".WorkProjectNextContentInfo");
      tl.to(
        other,
        {
          autoAlpha: 0,
          duration: 0.5,
          ease,
        },
        0
      );

      const title = e.target.querySelector(".WorkProjectNextContentTitle");
      if (title) {
        animateBanner(
          tl,
          {
            ease,
            duration,
            position: 0.5,
          },
          {
            title,
            scope: e.target,
          }
        );
      }
    }
  };

  return (
    <div
      ref={container}
      role={"button"}
      id={"WorkProjectNextProject"}
      onClick={(e) => onClick(e, item.primary.slug as string)}
      className={
        "relative aspect-square w-full cursor-pointer overflow-hidden md:aspect-auto md:h-screen"
      }
    >
      <ProjectHero
        isClone={true}
        image={item.primary.background_image1}
        animateTitles={true}
        //@ts-ignore
        subTitleField={item.primary.next_project_data.data.capabilities}
        //@ts-ignore
        tableData={item.primary.next_project_data.data}
      />
      <WorkProjectNextContent title={item.primary.title1} />
      <ProjectPrefetchLink slug={item.primary.slug} />
    </div>
  );
}

export default WorkProjectNextProject;
