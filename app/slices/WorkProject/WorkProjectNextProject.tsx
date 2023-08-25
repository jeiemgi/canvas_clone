import easings from "~/lib/easings";
import { gsap } from "gsap";
import { MouseEvent, MouseEventHandler, useRef } from "react";
import { useNavigate } from "react-router";
import { useLayoutEffect } from "~/hooks";
import { animateBanner, setupBannerAnimation } from "~/components/ProjectHero";
import ProjectHero from "~/components/ProjectHero/ProjectHero";
import type { ProjectPageDocumentDataBodyProjectNextBannerSlice } from "types.generated";
import type { KeyTextField } from "@prismicio/types";

interface Props {
  item: ProjectPageDocumentDataBodyProjectNextBannerSlice;
}

function WorkProjectContent({
  title,
  subtitle,
}: {
  title: KeyTextField;
  subtitle: KeyTextField;
}) {
  return (
    <div
      className={
        "absolute top-0 flex h-full flex-col justify-center pl-4 pt-5 text-white md:p-8"
      }
    >
      <h3 className={"heading--3 next-title__info mb-5"}>NEXT PROJECT</h3>
      <h3 className={"display--1 next-title__text"}>{title}</h3>
      <h3 className="next-subtitle heading--3 text-white">{subtitle}</h3>
    </div>
  );
}

function WorkProjectNextProject({ item }: Props) {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      setupBannerAnimation(container.current);
    }
    gsap.set(".next-subtitle", { opacity: 0 });
  }, []);

  const onClick = (e: MouseEvent<HTMLDivElement>, slug: string) => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate(`/work/${item.primary.slug}`);
      },
    });

    if (e.target instanceof Element) {
      animateBanner({
        scope: e.target,
        tl,
        slug,
        position: 0.3,
      });
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
      <ProjectHero
        isClone={true}
        slug={item.primary.slug}
        image={item.primary.background_image1}
        // @ts-ignore
        tableData={item.primary.next_project_data.data}
      />
      <WorkProjectContent
        title={item.primary.title1}
        subtitle={item.primary.capabilities1}
      />
    </div>
  );
}

export default WorkProjectNextProject;
