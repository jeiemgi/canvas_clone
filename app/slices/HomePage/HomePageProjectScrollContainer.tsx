import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import easings from "~/lib/easings";
import { Image } from "~/components/Image";
import { asText } from "@prismicio/richtext";
import { useNavigate } from "react-router";
import type { KeyTextField } from "@prismicio/types";
import type { HomePageProjectsData } from "~/slices/HomePage/HomePageProjects";
import { useLockedBody } from "usehooks-ts";

function HomePageProjectScrollContainer({
  data,
}: {
  data: HomePageProjectsData;
}) {
  const [, setLocked] = useLockedBody(false);
  const navigate = useNavigate();
  const onClick = (target: EventTarget, index: number, slug: KeyTextField) => {
    setLocked(true);
    const duration = 1;
    const ease = easings.mask;

    const titleItem = document.querySelectorAll(".title-item")[index];
    const name = titleItem.querySelector(".title-item__name")!;
    const label = titleItem.querySelector(".title-item__label")!;
    const counter = document.querySelector(".title-item__index")!;
    const cloneHeroTitle = document.querySelector("#hero-clone-title");
    // Get the state
    const titleState = Flip.getState(titleItem);
    // Re-parent the container
    cloneHeroTitle?.appendChild(titleItem);

    const titleTl = Flip.from(titleState, { duration, ease });

    titleTl.to(
      name,
      {
        ease,
        duration,
        fontSize: "6.875rem",
        letterSpacing: "-0.1375rem",
        transformOrigin: "top left",
        onComplete: () => {
          gsap.set(name, { lineHeight: "105%" });
        },
      },
      0
    );

    titleTl.to(name, { lineHeight: "105%", duration: 0.4 }, 0);

    titleTl.to(
      [label, counter],
      { autoAlpha: 0, absolute: true, duration: 0.4, ease },
      0
    );

    const subtitleItem = document.querySelectorAll(".subtitle-item")[index];
    const subtitleText = subtitleItem.querySelector(".subtitle-item__text")!;
    const cloneHeroSubtitle = document.querySelector("#hero-clone-subtitle");

    const subtitleState = Flip.getState(subtitleItem);
    cloneHeroSubtitle?.appendChild(subtitleItem);
    const subtitleTl = Flip.from(subtitleState, {
      duration,
      ease,
    });

    subtitleTl.to(
      subtitleText,
      {
        ease,
        duration,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
        onComplete: () => {
          gsap.set(subtitleText, { lineHeight: "105%" });
        },
      },
      0
    );

    const tl = gsap.timeline({
      onComplete: () => {
        navigate(`/work/${slug}`);
      },
    });

    const content = document.querySelectorAll(".scroll-item__content")[index];
    const background = document
      .querySelectorAll(".gsap-bg--item")
      [index].querySelector("img");

    tl.to(
      content,
      {
        duration: 0.4,
        autoAlpha: 0,
      },
      0
    );

    tl.to(
      background,
      {
        ease,
        duration,
        y: background ? background?.scrollHeight - window.innerHeight : 0,
      },
      0
    );
  };

  return (
    <div className={"gsap-scroll--container"}>
      {data.map((project, index) => (
        <div
          onClick={(e) => onClick(e.target, index, project.primary.slug)}
          id={`HomePageProjectItem-${project.primary.slug}`}
          key={`HomePageProjectItem-${index}`}
          className={
            "scroll-item relative flex cursor-pointer flex-col justify-between overflow-hidden"
          }
        >
          <div className="desktop-only--grid grid-container">
            <div
              className={
                "scroll-item__content col-span-4 pb-[20vh] pt-[50vh] md:col-start-9"
              }
            >
              <p className={"body--2 mb-5 max-w-[500px] text-white"}>
                {asText(project.primary.description)}
              </p>
              {project.items.map(({ slide }, index) => (
                <div
                  data-lag={0.05 * index}
                  className={"mb-5 overflow-hidden"}
                  key={`ProjectImage-${slide.url}-${index}`}
                >
                  <Image
                    field={slide}
                    data-speed={0.95}
                    className={"w-full object-contain"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePageProjectScrollContainer;
