import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Image } from "~/components/Image";
import { useLenis } from "@studio-freight/react-lenis";
import { useLayoutEffect } from "~/hooks";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import { useLockedBody } from "usehooks-ts";
import {
  animateBanner,
  setupBannerAnimation,
} from "~/components/ProjectHero/ProjectHero";
import ProjectHero from "~/components/ProjectHero";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import type { MouseEvent } from "react";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "../../../types.generated";

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  const lenis = useLenis();
  const navigate = useNavigate();
  const [, setLocked] = useLockedBody(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(
        ".HomePageProjectScrollItem"
      );

      items.forEach((item) => {
        const clone = item.querySelector(".ProjectHero");
        const content = item.querySelector(
          ".HomePageProjectScrollItem__content"
        );

        if (clone && content) {
          const contentHeight = content.scrollHeight - window.innerHeight || 0;

          ScrollTrigger.create({
            pin: true,
            trigger: clone,
            start: "top top",
            end: () => `+=${contentHeight}px`,
          });
        }
        setupBannerAnimation(item);
      });
    });

    return () => ctx.revert();
  }, []);

  const onClick = (
    e: MouseEvent<HTMLDivElement>,
    { index, slug = "" }: { index: number; slug: string }
  ) => {
    setLocked(true);

    lenis.scrollTo(`#HomePageProjectScrollItem-${slug}`, {
      offset: window.innerHeight * 0.2,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        console.log("navigate");
        // navigate(`/work/${slug}`, { preventScrollReset: false });
      },
    });

    const ease = "linear";
    const duration = 1;

    if (e.target instanceof Element) {
      animateBanner({
        scope: e.target,
        tl,
        slug,
      });
    }

    const background = document
      .querySelectorAll(".hero-project-bg-container")
      [index].querySelector("img");

    tl.to(
      background,
      {
        ease,
        duration: duration - 0.3,
        y: background ? background?.scrollHeight - window.innerHeight : 0,
      },
      0
    );

    const label = document.querySelector(".title-item__label")!;
    tl.to(
      label,
      { ease, duration: duration - 0.5, y: "100%", autoAlpha: 0 },
      0
    );

    const content = document.querySelectorAll(
      ".HomePageProjectScrollItem__content"
    )[index];
    tl.to(
      content,
      {
        ease,
        autoAlpha: 0,
        duration: duration - 0.5,
      },
      0
    );
  };

  return (
    <div id={"home-projects-container"}>
      {data.map((project, index) => (
        <div
          className={"HomePageProjectScrollItem scroll-item relative"}
          key={`HomePageProjectScrollItem-${index}`}
          onClick={(e) =>
            onClick(e, { index, slug: project.primary.slug as string })
          }
        >
          {"data" in project.primary.project_data ? (
            <ProjectHero
              isClone={true}
              slug={project.primary.slug}
              tableData={
                project.primary.project_data?.data as ProjectHeroTableProps
              }
            />
          ) : null}

          <HomePageProjectScrollItemContent project={project} />
        </div>
      ))}
    </div>
  );
}

const HomePageProjectScrollItemContent = ({
  project,
}: {
  project: HomepageDocumentDataBodyHomepageProjectSlice;
}) => {
  return (
    <div className="grid-container HomePageProjectScrollItem__content relative pb-[20vh] pt-[50vh]">
      <div className={"col-span-4 md:col-start-9"}>
        {/*ANCHOR ONLY TO scrollTo on click*/}
        <div id={`HomePageProjectScrollItem-${project.primary.slug}`} />
        <p className={"body--2 mb-5 max-w-[500px] text-white"}>
          {asText(project.primary.description)}
        </p>
        {project.items.map(({ slide }, index) => (
          <div
            key={`ProjectImage-${slide.url}-${index}`}
            className={"mb-5 overflow-hidden"}
          >
            <Image
              loading={"eager"}
              width={"100vw"}
              height={"100vh"}
              field={slide}
              className={"w-full object-contain"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePageProjectScrollContainer;
