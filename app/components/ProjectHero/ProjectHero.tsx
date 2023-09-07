import clsx from "clsx";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import { useRef } from "react";
import { useLayoutEffect } from "~/hooks";
import { Link } from "@remix-run/react";
import { asText } from "@prismicio/richtext";
import { Image } from "~/components/Image";
import TextCta from "~/components/CTA/TextCTA";
import { Video } from "~/components/Video";
import ProjectHeroTable from "~/components/ProjectHero/ProjectHeroTable";
import type { ReactNode } from "react";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import type { DivProps, ButtonProps } from "react-html-props";
import type {
  FilledLinkToWebField,
  ImageField,
  KeyTextField,
  RichTextField,
} from "@prismicio/types";
import { useLockedBody } from "usehooks-ts";
import easings from "~/lib/easings";

interface TitleProps extends DivProps {
  field?: RichTextField;
  animateTitles?: boolean;
}

export const ProjectHeroTitle = ({
  field,
  children,
  animateTitles,
  ...props
}: TitleProps) => {
  return (
    <div
      {...props}
      className={clsx(
        "ProjectHeroTitle",
        "relative col-span-4 my-12 md:col-span-12 md:mb-32 md:mt-24 md:h-[7rem]",
        props.className ? props.className : "text-white"
      )}
    >
      {field ? (
        <h1
          className={"display--1 overflow-hidden"}
          dangerouslySetInnerHTML={{
            __html: field ? `${asText(field)}` : "",
          }}
        />
      ) : animateTitles ? (
        <span className={"hero-table-row__item block"}>{children}</span>
      ) : (
        children
      )}
    </div>
  );
};

export const ProjectHeroSubtitle = ({
  children,
  field,
  animateTitles,
  ...props
}: TitleProps) => {
  return (
    <div
      {...props}
      className={clsx(
        "ProjectHeroSubtitle",
        "relative col-span-4 mb-12 text-white md:col-span-12 md:mb-2 md:h-[1rem] md:pb-20",
        props.className
      )}
    >
      {field ? (
        <h3 className={"heading--3 overflow-hidden"}>
          {animateTitles ? (
            <span className={"hero-table-row__item block translate-y-[200%]"}>
              {field ? asText(field) : ""}
            </span>
          ) : field ? (
            asText(field)
          ) : (
            ""
          )}
        </h3>
      ) : (
        <h3 className={"heading--3"}>{children}</h3>
      )}
    </div>
  );
};

interface ProjectHeroCTAProps {
  isClone?: boolean;
  field?: RichTextField | string;
}

export function ProjectHeroCTA({
  field,
  isClone = false,
  ...props
}: ProjectHeroCTAProps & ButtonProps) {
  return (
    <div className="desktop-only relative overflow-hidden md:col-span-5">
      <button {...props} className={clsx("overflow-hidden", props.className)}>
        <div
          className={clsx(
            "hero-table-row__item flex items-center",
            isClone ? "translate-y-full" : ""
          )}
        >
          <span className={"heading--3 mr-1 inline-block text-white"}>( </span>
          <TextCta className={"heading--3 text-white"}>
            {typeof field === "string" ? field : field ? asText(field) : ""}
          </TextCta>
          <span className={"heading--3 ml-1 inline-block text-white"}> )</span>
        </div>
      </button>
    </div>
  );
}

interface ProjectBackgroundProps {
  field: ImageField;
  isClone: boolean;
  className?: string;
}

export function ProjectBackground({
  field,
  isClone,
  ...props
}: ProjectBackgroundProps) {
  return (
    <div
      className={clsx(
        "ProjectHeroBackground",
        "absolute flex h-full w-full overflow-hidden",
        isClone ? "items-end" : "items-start"
      )}
    >
      <Image
        {...props}
        field={field}
        className={clsx(props?.className, "min-h-full w-full object-cover")}
      />
    </div>
  );
}

export const ProjectHeroLine = ({
  top = false,
  isClone = false,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        className,
        isClone ? "scale-x-0" : "",
        top ? "top-0" : "bottom-0",
        "hero-table-line absolute bottom-0 left-0 block h-[1px] w-full origin-left bg-white/30"
      )}
    />
  );
};

type GSAPAnimationFunction = (
  tl: GSAPTimeline,
  options: {
    titlesVars: GSAPTimelineVars;
    itemsVars: GSAPTimelineVars;

    title: HTMLElement;
    subtitle?: HTMLElement;

    itemsScope?: Element;
    scope: Element | Document;
  }
) => Function;

export const animateBanner: GSAPAnimationFunction = (
  tl,
  { title, subtitle, scope, itemsScope, itemsVars, titlesVars }
) => {
  function animateVideo() {
    const { position } = itemsVars;
    // ANIMATE TABLE
    const video = itemsScope
      ? itemsScope.querySelectorAll(".ProjectHero-Video")
      : scope.querySelectorAll(".ProjectHero-Video");
    console.log(video);
    tl.to(video, { y: 0, opacity: 1, ...itemsVars }, position);
  }

  function animateTable() {
    const { position } = itemsVars;
    // ANIMATE TABLE
    const tableLines = itemsScope
      ? itemsScope.querySelectorAll(".hero-table-line")
      : scope.querySelectorAll(".hero-table-line");

    const tableItems = itemsScope
      ? itemsScope.querySelectorAll(".hero-table-row__item")
      : scope.querySelectorAll(".hero-table-row__item");

    tl.to(tableLines, { scaleX: 1, ...itemsVars }, position);
    tl.to(tableItems, { y: "0%", ...itemsVars }, position);
  }

  function animateTitle() {
    let originalDiv: Node;
    let originalDivParent: HTMLElement | null;
    const cloneTitle = scope.querySelector(".ProjectHeroTitle");

    const reverseTitle = () => {
      cloneTitle?.replaceChildren();
      originalDivParent?.replaceChildren(originalDiv);
    };

    if (cloneTitle) {
      originalDiv = title.cloneNode(true);
      originalDivParent = title.parentElement;
      const state = Flip.getState(title);
      cloneTitle?.appendChild(title);
      const _tl = Flip.from(state, {
        ...titlesVars,
        onComplete: () => {
          title.style.cssText = "";
        },
      });
      _tl.to(title, { scale: 1, ...titlesVars }, 0);
      return reverseTitle;
    } else {
      console.warn("NO CLONE TITLE DETECTED IN SCOPE");
    }

    return reverseTitle;
  }

  function animateSubTitle() {
    if (subtitle) {
      const cloneSubtitle = scope.querySelector(`.ProjectHeroSubtitle`);
      if (cloneSubtitle) {
        const subtitleState = Flip.getState(subtitle);
        cloneSubtitle?.replaceChildren(subtitle);
        Flip.from(subtitleState, { ...titlesVars });
      } else {
        console.warn("NO CLONE SUBTITLE DETECTED IN SCOPE");
      }
    }
  }

  animateTable();
  animateSubTitle();
  animateVideo();
  return animateTitle();
};

export function ProjectPrefetchLink({ slug }: { slug: string | KeyTextField }) {
  return (
    <div className={"absolute left-0 top-0 opacity-0"}>
      <Link prefetch="viewport" to={`/work/${slug}`}>
        Prefetch link
      </Link>
    </div>
  );
}

export function ProjectHeroVideo({
  animate = true,
  animateDelay = 0,
  field,
  poster,
  className,
}: {
  animate?: boolean;
  animateDelay: number;
  field: FilledLinkToWebField;
  poster?: ImageField;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [, setLocked] = useLockedBody(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        autoRemoveChildren: true,
        onComplete: () => {
          setLocked(false);
        },
      });

      tl.to(ref.current, {
        y: 0,
        duration: 1,
        autoAlpha: 1,
        ease: easings.mask,
        delay: animateDelay,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "ProjectHero-Video",
        animate ? "translate-y-1/2 opacity-0" : "",
        "col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3 md:aspect-video",
        className
      )}
    >
      <Video autoPlay src={field.url} poster={poster?.url ?? ""} />
    </div>
  );
}

export interface ProjectHeroProps extends DivProps {
  absolute?: boolean;
  animateDelay?: number;
  animateTitles?: boolean;
  animateVideo?: boolean;
  children?: ReactNode;
  cta?: Function;
  debug?: boolean;
  focusable?: boolean;
  image?: ImageField;
  isClone?: boolean;
  subTitleField?: RichTextField;
  tableData?: ProjectHeroTableProps;
  titleField?: RichTextField;
  video?: {
    poster?: ImageField;
    field?: FilledLinkToWebField;
  };
}

function ProjectHero({
  animateVideo = false,
  animateDelay = 0,
  absolute = false,
  animateTitles = false,
  children,
  className,
  cta,
  debug = false,
  focusable = false,
  image,
  isClone = false,
  subTitleField,
  tableData,
  titleField,
  video,
  ...props
}: ProjectHeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const extraProps = isClone ? { tabIndex: -1, "aria-hidden": true } : {};
  const baseClassNames = isClone ? "pointer-events-none" : "";
  const debugClassNames = debug ? "border inner border-white" : "";

  const positionClassNames = absolute
    ? "absolute min-h-screen w-full left-0 top-0"
    : "relative";

  return (
    <div
      {...props}
      {...extraProps}
      ref={container}
      className={clsx(
        "ProjectHero",
        className,
        baseClassNames,
        positionClassNames,
        debugClassNames
      )}
    >
      {image ? <ProjectBackground isClone={isClone} field={image} /> : null}

      <div
        className={clsx(
          "grid-container relative pt-header md:pt-headerDesk",
          debugClassNames
        )}
      >
        {debug ? (
          <div className="absolute left-0 top-0 bg-black text-white">
            ProjectHero
          </div>
        ) : null}
        <ProjectHeroTitle
          animateTitles={animateTitles}
          className={debugClassNames}
          aria-hidden={isClone}
          tabIndex={isClone ? -1 : 0}
          field={titleField}
        />
        <ProjectHeroSubtitle
          animateTitles={animateTitles}
          className={debugClassNames}
          aria-hidden={isClone}
          tabIndex={isClone ? -1 : 0}
          field={subTitleField}
        />
        <div className={"relative col-span-4 mb-3 md:col-span-12"}>
          <ProjectHeroLine isClone={isClone} />
        </div>
        <ProjectHeroCTA
          isClone={isClone}
          tabIndex={isClone ? -1 : 0}
          className={debugClassNames}
          field={"SEE PROJECT DETAILS"}
          onClick={() => {
            if (cta) cta();
          }}
        />

        {tableData ? (
          <ProjectHeroTable isClone={isClone} data={tableData} />
        ) : null}

        {video && video.field && !isClone ? (
          <ProjectHeroVideo
            animateDelay={animateDelay}
            animate={animateVideo}
            className={debugClassNames}
            poster={video.poster}
            field={video.field}
          />
        ) : (
          <div
            className={clsx(
              "ProjectHero-Video",
              "pointer-events-none translate-y-1/3 opacity-0",
              "col-span-4 mb-10 aspect-video bg-black md:col-span-8 md:col-start-3",
              debugClassNames
            )}
          >
            <Image
              field={video?.poster}
              className={"h-full w-full object-cover"}
            />
          </div>
        )}
      </div>
      {/*<div className="grid-container">
          <div className="col-span-4 flex w-full justify-between md:hidden">
            <span className={"label--2 text-white"}>CREDIT</span>
            <span className={"label--2 text-white"}>PHOTOGRAPHY:</span>
            <span className={"label--2 text-white"}>JORDAN NELSON</span>
          </div>
        </div>*/}
    </div>
  );
}

export default ProjectHero;
