import { useRef } from "react";
import { useNavigate } from "react-router";
import { Image } from "~/components/Image";
import easings from "~/lib/easings";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import { useLayoutEffect } from "~/hooks";
import HeroCloneMarkup from "~/components/HeroCloneMarkup";
import type { MouseEvent } from "react";
import type { ProjectPageDocumentDataBodyProjectNextBannerSlice } from "types.generated";

interface Props {
  item: ProjectPageDocumentDataBodyProjectNextBannerSlice;
}

function WorkProjectNextProject({ item }: Props) {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.set(".next-subtitle", { opacity: 0 });
  }, []);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const duration = 1.5;
    const ease = easings.mask;

    const title = document.querySelector(".next-title__text")!;
    const cloneTitle = document.querySelector("#next-clone-title");
    const titleState = Flip.getState(title);
    cloneTitle?.appendChild(title);
    const titleFlip = Flip.from(titleState, { duration, ease });

    titleFlip.to(
      title,
      {
        ease,
        duration,
        fontSize: "6.875rem",
        letterSpacing: "-0.1375rem",
        transformOrigin: "top left",
        onComplete: () => {
          gsap.set(title, { lineHeight: "105%" });
        },
      },
      0
    );

    const subTitle = document.querySelector(".next-subtitle")!;
    const cloneSubtitle = document.querySelector("#next-clone-subtitle");
    const subState = Flip.getState(subTitle);
    cloneSubtitle?.appendChild(subTitle);
    const tlSub = Flip.from(subState, { duration, ease });

    tlSub.to(
      subTitle,
      {
        ease,
        duration,
        opacity: 1,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
        onComplete: () => {
          gsap.set(subTitle, { lineHeight: "105%" });
        },
      },
      0
    );

    const titleInfo = document.querySelector(".next-title__info")!;
    titleFlip.to(titleInfo, { autoAlpha: 0, duration: 0.2 }, 0);

    const tl = gsap.timeline({
      onComplete: () => {
        navigate(`/work/${item.primary.slug}`);
      },
    });
    const background = document.querySelector(".next-bg>img");

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
    <div
      ref={container}
      onClick={onClick}
      className={
        "WorkProjectNextProject relative h-screen cursor-pointer overflow-hidden"
      }
    >
      <div
        className={
          "next-bg absolute left-0 top-0 flex h-full w-full items-end overflow-hidden"
        }
      >
        <Image
          loading="lazy"
          className={"min-h-screen w-full object-cover"}
          field={item.primary.background_image1}
        />
      </div>

      <HeroCloneMarkup
        titleId={"next-clone-title"}
        subtitleId={"next-clone-subtitle"}
      />

      <div
        className={
          "absolute flex h-full flex-col justify-center pl-4 pt-5 text-white md:p-8 "
        }
      >
        <h3 className={"heading--3 next-title__info mb-5"}>NEXT PROJECT</h3>
        <h3 className={"display--1 next-title__text"}>{item.primary.title1}</h3>
        <h3 className="next-subtitle heading--3 text-white">
          {item.primary.capabilities1}
        </h3>
      </div>

      <div className="mobile-only--flex absolute left-0 top-0 h-full w-full items-center justify-center">
        <h3 className="heading--3 text-white">{`( VIEW PROJECT )`}</h3>
      </div>
    </div>
  );
}

export default WorkProjectNextProject;
