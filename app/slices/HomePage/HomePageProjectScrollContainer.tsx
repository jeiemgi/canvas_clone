import { gsap } from "gsap";
import {
  HOMEPAGE_PROJECT_SUBTITLE_ID,
  HOMEPAGE_PROJECT_TITLE_ID,
} from "~/slices/HomePage/HomePageProjectTitleContainer";
import easings from "~/lib/easings";
import { Image } from "~/components/Image";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import { animateBanner } from "~/components/ProjectHero/ProjectHero";
import HomePageBackgroundContainer from "~/slices/HomePage/HomePageProjectBackground";
import type { MouseEvent } from "react";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";
import { useState } from "react";
import HomePageProjectCursor from "~/slices/HomePage/HomePageProjectCursor";

const HomePageProjectScrollItemContent = ({
  project,
}: {
  project: HomepageDocumentDataBodyHomepageProjectSlice;
}) => {
  return (
    <div className="HomePageProjectScrollItem__content grid-container pointer-events-none relative pb-[20vh] pt-[50vh]">
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
              field={slide}
              className={"w-full object-contain"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  const navigate = useNavigate();

  const onClick = (
    e: MouseEvent<HTMLDivElement>,
    { index, slug = "" }: { index: number; slug: string }
  ) => {
    setClickedIndex(index);

    const duration = 1.5;
    const ease = "power4.inOut";
    const tl = gsap.timeline({
      onComplete: () => {
        navigate(`/work/${slug}`);
        // navigate(`/work/${slug}`, { preventScrollReset: false });
      },
    });

    /* ANIMATE OTHER ITEMS */
    function animateBackground() {
      const background = document
        .querySelectorAll(".HomePageBackground-Image")
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
    }

    function animateContent() {
      const label = document.querySelector(".HomePageProject__labels");
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
    }

    function animateTitles() {
      if (!(e.target instanceof HTMLElement)) return;
      const vars = { ease, duration, position: 0 };
      // prettier-ignore
      const titles = document.querySelectorAll(`.${HOMEPAGE_PROJECT_TITLE_ID}`);
      const title = titles[index] as HTMLElement;
      // prettier-ignore
      const subtitles = document.querySelectorAll(`.${HOMEPAGE_PROJECT_SUBTITLE_ID}`);
      const subtitle = subtitles[index] as HTMLElement;

      //prettier-ignore
      const scope = document.querySelectorAll(".HomePageBackground-Item")[index];
      //prettier-ignore
      const itemsScope = document.querySelectorAll(".HomePageBackground-Item")[index];

      if (scope && itemsScope)
        animateBanner(tl, vars, {
          title,
          subtitle,
          scope,
          itemsScope,
        });
    }

    animateBackground();
    animateContent();
    animateTitles();
  };

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <div
      id={HOME_PAGE_PROJECTS_CONTAINER_ID}
      className={"relative hidden md:block"}
    >
      <HomePageBackgroundContainer clickedIndex={clickedIndex} data={data} />

      {data.map((project, index) => (
        <div
          key={`HomePageProjectScrollItem-${index}`}
          className={"HomePageProjectScrollItem relative"}
          onClick={(e) => {
            onClick(e, { index, slug: project.primary.slug as string });
          }}
        >
          <HomePageProjectScrollItemContent project={project} />
        </div>
      ))}
      <HomePageProjectCursor containerId={HOME_PAGE_PROJECTS_CONTAINER_ID} />
    </div>
  );
}

const HOME_PAGE_PROJECTS_CONTAINER_ID = "home-projects-container";
export default HomePageProjectScrollContainer;
