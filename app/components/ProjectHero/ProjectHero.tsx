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
        "display--1 leading--none relative col-span-4 my-12 md:col-span-12 md:mb-32 md:mt-24 md:h-[7rem]",
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
        "heading--3 relative col-span-4 mb-12 text-white md:col-span-12 md:mb-2 md:h-[1rem] md:pb-20",
        props.className
      )}
    >
      {field ? (
        <h3 className={"heading--3 overflow-hidden"}>
          {animateTitles ? (
            <span className={"hero-table-row__item block"}>
              {field ? asText(field) : ""}
            </span>
          ) : field ? (
            asText(field)
          ) : (
            ""
          )}
        </h3>
      ) : (
        children
      )}
    </div>
  );
};

interface ProjectHeroCTAProps {
  isClone?: boolean;
  field?: RichTextField | string;
}

export function ProjectHeroCTA({
  isClone = false,
  field,
  ...props
}: ProjectHeroCTAProps & ButtonProps) {
  return (
    <div className="desktop-only relative overflow-hidden md:col-span-5">
      <button {...props} className={clsx("overflow-hidden", props.className)}>
        <div className={"hero-table-row__item flex items-center"}>
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
        className={clsx(props?.className, "min-h-screen w-full object-cover")}
      />
    </div>
  );
}

export const ProjectHeroLine = ({ top = false, className = "" }) => {
  return (
    <div
      className={clsx(
        className,
        top ? "top-0" : "bottom-0",
        "hero-table-line absolute bottom-0 left-0 block h-[1px] w-full origin-left bg-white/30"
      )}
    />
  );
};

type GSAPAnimationFunction = (
  tl: GSAPTimeline,
  vars: GSAPTimelineVars,
  elements: {
    title: Element;
    subtitle?: Element;
    background?: Element;
    scope: Element | Document;
    itemsScope?: Element;
  }
) => void;

export const animateBanner: GSAPAnimationFunction = (
  tl,
  { position, stagger, ease, duration, ...vars },
  { title, subtitle, scope, itemsScope }
) => {
  // ANIMATE TABLE
  const tableLines = itemsScope
    ? itemsScope.querySelectorAll(".hero-table-line")
    : scope.querySelectorAll(".hero-table-line");

  const tableItems = itemsScope
    ? itemsScope.querySelectorAll(".hero-table-row__item")
    : scope.querySelectorAll(".hero-table-row__item");

  tl.to(
    tableLines,
    {
      scaleX: 1,
      ...vars,
    },
    position
  );
  tl.to(
    tableItems,
    {
      y: "0%",
      ease,
      duration,
      stagger,
      ...vars,
    },
    position
  );
  // ADD ANIMATION TO TEXT SIZES
  const titleText = title.querySelector("span");
  tl.to(
    titleText,
    {
      ease,
      duration,
      fontSize: "6.875rem",
      letterSpacing: "-0.1375rem",
      transformOrigin: "top left",
      ...vars,
    },
    position
  );

  if (subtitle) {
    const subtitleText = subtitle.querySelector("span");
    tl.to(
      subtitleText,
      {
        ease,
        duration,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
        ...vars,
      },
      position
    );
  }

  const cloneHeroTitle = scope.querySelector(".ProjectHeroTitle");
  if (cloneHeroTitle) {
    console.log(cloneHeroTitle);
    const titleState = Flip.getState(title);
    cloneHeroTitle.appendChild(title);
    Flip.from(titleState, { duration, ease, ...vars });
  } else {
    console.warn("NO CLONE TITLE DETECTED IN SCOPE");
  }

  if (subtitle) {
    const cloneHeroSubtitle = scope.querySelector(`.ProjectHeroSubtitle`);
    if (cloneHeroSubtitle) {
      const subtitleState = Flip.getState(subtitle);
      cloneHeroSubtitle?.appendChild(subtitle);
      Flip.from(subtitleState, { duration, ease, ...vars });
    } else {
      console.warn("NO CLONE SUBTITLE DETECTED IN SCOPE");
    }
  }
};

export const setupBannerAnimation = (scope: Element) => {
  const tableLines = scope.querySelectorAll(".hero-table-line");
  const tableItems = scope.querySelectorAll(".hero-table-row__item");
  gsap.set(tableLines, { scaleX: 0 });
  gsap.set(tableItems, { y: "200%" });
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
  field,
  poster,
  className,
}: {
  animate?: boolean;
  field: FilledLinkToWebField;
  poster: ImageField;
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
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        animate ? "translate-y-1/2 opacity-0" : "",
        "col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3 md:aspect-video",
        className
      )}
    >
      <Video autoPlay src={field.url} poster={poster.url ?? ""} />
    </div>
  );
}

export interface ProjectHeroProps extends DivProps {
  absolute?: boolean;
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
    poster: ImageField;
    field: FilledLinkToWebField;
  };
}

function ProjectHero({
  animateVideo = false,
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

  useLayoutEffect(() => {
    if (isClone && container.current) {
      setupBannerAnimation(container.current);
    }
  }, [isClone]);

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
          <ProjectHeroLine />
        </div>
        <ProjectHeroCTA
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

        {video && !isClone ? (
          <ProjectHeroVideo
            animate={animateVideo}
            className={debugClassNames}
            {...video}
          />
        ) : (
          <div
            className={clsx(
              "col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3",
              debugClassNames
            )}
          ></div>
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
