import easings from "~/lib/easings";
import { gsap } from "gsap";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { useLayoutEffect } from "~/hooks";
import { animateBanner, setupBannerAnimation } from "~/components/ProjectHero";
import ProjectHero from "~/components/ProjectHero/ProjectHero";
import type { MouseEvent } from "react";
import type { ProjectPageDocumentDataBodyProjectNextBannerSlice } from "types.generated";
import type { KeyTextField } from "@prismicio/types";
import { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";

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
            "heading--3 WorkProjectNextContentInfo absolute top-0 mb-5 w-full text-white"
          }
        >
          NEXT PROJECT
        </h3>
        <h1
          className={
            "WorkProjectNextContentTitle display--1 absolute bottom-0 text-white"
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
          navigate(`/work/${item.primary.slug}`);
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
      role={"link"}
      ref={container}
      onClick={(e) => onClick(e, item.primary.slug as string)}
      className={
        "WorkProjectNextProject relative aspect-square cursor-pointer overflow-hidden md:aspect-auto md:h-screen"
      }
    >
      {"data" in item.primary.next_project_data ? (
        <ProjectHero
          isClone={true}
          image={item.primary.background_image1}
          tableData={
            item.primary.next_project_data.data as ProjectHeroTableProps
          }
        />
      ) : null}
      <WorkProjectNextContent title={item.primary.title1} />
    </div>
  );
}

export default WorkProjectNextProject;
