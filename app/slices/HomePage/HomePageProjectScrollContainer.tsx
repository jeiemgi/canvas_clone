import { gsap } from "gsap";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useLockedBody } from "usehooks-ts";
import { animateBanner } from "~/components/ProjectHero/ProjectHero";
import { Image } from "~/components/Image";
import HomePageBackgroundContainer from "~/slices/HomePage/HomePageProjectBackground";
import HomePageProjectCursor from "~/slices/HomePage/HomePageProjectCursor";
import {
  HOMEPAGE_PROJECT_SUBTITLE_ID,
  HOMEPAGE_PROJECT_TITLE_ID,
} from "~/slices/HomePage/HomePageProjectTitleContainer";
import type { MouseEvent } from "react";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";
import easings from "~/lib/easings";

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
  const [, setLocked] = useLockedBody(false);
  const navigate = useNavigate();
  const [showCursor, setShowCursor] = useState(true);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const onClick = (
    e: MouseEvent<HTMLDivElement>,
    { index, slug = "" }: { index: number; slug: string }
  ) => {
    setShowCursor(false);
    setLocked(true);
    setClickedIndex(index);

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
        ease: easings.one,
      },
      onComplete: () => {
        navigate(`/work/${slug}`);
      },
    });

    function animateBackground() {
      // prettier-ignore
      const backgrounds = document.querySelectorAll(".HomePageBackground-Image");
      const bgImg = backgrounds[index].querySelector("img");
      // const bgPos = bgImg ? bgImg?.scrollHeight - window.innerHeight : 0;

      if (bgImg) tl.to(bgImg, { y: 0 }, 0);
    }

    function animateContent() {
      const label = document.querySelector(".HomePageProject__labels");
      tl.to(label, { duration: 0.3, autoAlpha: 0 }, 0);

      const content = document.querySelectorAll(
        ".HomePageProjectScrollItem__content"
      )[index];
      tl.to(content, { autoAlpha: 0, duration: 0.3 }, 0);
    }

    function animateTitles() {
      if (!(e.target instanceof HTMLElement)) return;
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
        return animateBanner(tl, {
          scope,
          itemsScope,
          title,
          subtitle,
          itemsVars: {
            position: 0,
          },
          titlesVars: {
            duration: 0.8,
            ease: easings.one,
          },
        });
    }

    animateBackground();
    animateContent();
    animateTitles();

    tl.play();
  };

  return (
    <HomePageProjectCursor
      show={showCursor}
      cursorLabel={"VIEW PROJECT"}
      id={HOME_PAGE_PROJECTS_CONTAINER_ID}
      className={"relative hidden cursor-pointer md:block"}
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
    </HomePageProjectCursor>
  );
}

const HOME_PAGE_PROJECTS_CONTAINER_ID = "home-projects-container";
export default HomePageProjectScrollContainer;
