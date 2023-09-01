import { gsap } from "gsap";
import HomePageTitleContainer, {
  HOMEPAGE_PROJECT_SUBTITLE_ID,
  HOMEPAGE_PROJECT_TITLE_ID,
} from "~/slices/HomePage/HomePageProjectTitleContainer";
import easings from "~/lib/easings";
import { Image } from "~/components/Image";
import { useLenis } from "@studio-freight/react-lenis";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import { animateBanner } from "~/components/ProjectHero/ProjectHero";
import HomePageBackgroundContainer from "~/slices/HomePage/HomePageProjectBackground";
import type { MouseEvent } from "react";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import type { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

const HomePageProjectScrollItemContent = ({
  project,
}: {
  project: HomepageDocumentDataBodyHomepageProjectSlice;
}) => {
  return (
    <div className="HomePageProjectScrollItem__content desktop-only--grid grid-container pointer-events-none relative pb-[20vh] pt-[50vh]">
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
  // const lenis = useLenis();
  const navigate = useNavigate();

  const onClick = (
    e: MouseEvent<HTMLDivElement>,
    { index, slug = "" }: { index: number; slug: string }
  ) => {
    // lenis.scrollTo(`#HomePageProjectScrollItem-${slug}`);

    const duration = 1;
    const ease = easings.mask;
    const tl = gsap.timeline({
      onComplete: () => {
        navigate(`/work/${slug}`);
      },
    });

    /* ANIMATE OTHER ITEMS */
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

    if (e.target instanceof Element) {
      const vars = { ease, duration, position: 0 };
      // prettier-ignore
      const titles = document.querySelectorAll(`.${HOMEPAGE_PROJECT_TITLE_ID}`);
      const title = titles[index];
      // prettier-ignore
      const subtitles = document.querySelectorAll(`.${HOMEPAGE_PROJECT_SUBTITLE_ID}`);
      const subtitle = subtitles[index];
      const scope = document.querySelector("#home-projects-container")!;
      const itemsScope = document.querySelectorAll(".HomePageBackground-Item")[
        index
      ];

      animateBanner(tl, vars, {
        title,
        subtitle,
        scope,
        itemsScope,
      });
    }
  };

  return (
    <div id={"home-projects-container"}>
      <HomePageBackgroundContainer data={data} />

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
    </div>
  );
}

export default HomePageProjectScrollContainer;
