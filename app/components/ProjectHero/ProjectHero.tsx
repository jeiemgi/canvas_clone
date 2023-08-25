import clsx from "clsx";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import easings from "~/lib/easings";
import { asText } from "@prismicio/richtext";
import { Image } from "~/components/Image";
import TextCta from "~/components/CTA/TextCTA";
import ProjectHeroTable from "~/components/ProjectHero/ProjectHeroTable";
import type { ReactNode } from "react";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import type { DivProps, ButtonProps } from "react-html-props";
import type { ImageField, KeyTextField, RichTextField } from "@prismicio/types";

interface TitleProps extends DivProps {
  field?: RichTextField;
}

export const ProjectHeroTitle = ({ field, children, ...props }: TitleProps) => {
  return (
    <div
      {...props}
      className={clsx(
        "ProjectHeroTitle",
        "display--1 leading--none relative col-span-4 my-12 text-white md:col-span-12 md:mb-32 md:mt-24 md:h-[7rem]",
        props.className
      )}
    >
      {field ? (
        <h1
          className={"display--1"}
          dangerouslySetInnerHTML={{
            __html: field ? `${asText(field)}` : "",
          }}
        />
      ) : (
        children
      )}
    </div>
  );
};

export const ProjectHeroSubtitle = ({
  children,
  field,
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
        <h3 className={"heading--3"}>{field ? asText(field) : ""}</h3>
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
  className?: string;
  containerProps?: DivProps;
}

export function ProjectBackground({
  field,
  containerProps,
  ...props
}: ProjectBackgroundProps) {
  return (
    <div
      {...containerProps}
      className={clsx("hero-project-bg-container", containerProps?.className)}
    >
      <Image
        {...props}
        field={field}
        className={clsx(
          props?.className,
          "absolute left-0 top-0 min-h-full w-full object-cover"
        )}
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

export function ProjectContainer({ className, ...props }: DivProps) {
  return (
    <div {...props} className={clsx(className, "grid-container relative")} />
  );
}

interface ProjectHeroProps extends DivProps {
  slug: KeyTextField;
  cta?: Function;
  children?: ReactNode;
  tableData?: ProjectHeroTableProps;
  isClone?: boolean;
  image?: ImageField;
  debug?: boolean;
  titleField?: RichTextField;
  subTitleField?: RichTextField;
}

interface GSAPAnimationFunction extends GSAPTimelineVars {
  tl: GSAPTimeline;
  slug: string;
  scope: Element | Document;
  title: Element;
  subtitle: Element;
}

export const animateBanner = ({
  tl,
  scope = document,
  title,
  subtitle,
  position = 0.5,
  stagger = 0.02,
  duration = 0.6,
  ease = easings.mask,
}: GSAPAnimationFunction) => {
  if (title) {
    const cloneHeroTitle = scope.querySelector(".ProjectHeroTitle");
    const titleState = Flip.getState(title);
    cloneHeroTitle?.appendChild(title);
    const titleTl = Flip.from(titleState, { duration, ease });

    // ANIMATE THE TEXT SIZES
    const titleText = title.querySelector("span");
    titleTl.to(
      titleText,
      {
        ease,
        duration,
        fontSize: "6.875rem",
        letterSpacing: "-0.1375rem",
        transformOrigin: "top left",
      },
      0
    );
    // titleTl.to(titleText, { lineHeight: "105%", ease, duration }, 0);
  } else {
    console.error(`No TITLE found`, title);
    return;
  }

  if (subtitle) {
    const cloneHeroSubtitle = document.querySelector(`.ProjectHeroSubtitle`);
    const subtitleState = Flip.getState(subtitle);
    cloneHeroSubtitle?.appendChild(subtitle);

    const subTl = Flip.from(subtitleState, { duration, ease });
    const subtitleText = subtitle.querySelector("span");
    subTl.to(
      subtitleText,
      {
        ease,
        duration: duration,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
      },
      0
    );
    subTl.set(subtitleText, { lineHeight: "105%" }, 0);
  } else {
    console.error(`No SUB-TITLE found`, subtitle);
    return;
  }

  // ANIMATE TABLE
  const tableLines = scope.querySelectorAll(".hero-table-line");
  const tableItems = scope.querySelectorAll(".hero-table-row__item");
  tl.to(
    tableLines,
    {
      scaleX: 1,
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
    },
    position
  );
};

export const setupBannerAnimation = (scope: Element) => {
  const tableLines = scope.querySelectorAll(".hero-table-line");
  const tableItems = scope.querySelectorAll(".hero-table-row__item");
  gsap.set(tableLines, { scaleX: 0 });
  gsap.set(tableItems, { y: "200%" });
};

function ProjectHero({
  children,
  cta,
  slug,
  tableData,
  className,
  isClone = false,
  image,
  debug = false,
  titleField,
  subTitleField,
  ...props
}: ProjectHeroProps) {
  const extraProps = isClone ? { tabIndex: -1, "aria-hidden": true } : {};

  const baseClassName = "ProjectHero";
  // const cloneClassNameModifier = "__clone";

  const baseClassNames = isClone
    ? "pointer-events-none absolute left-0 top-0 min-h-screen w-full"
    : "relative";

  const debugClassNames = debug ? "border inner border-white" : "";

  // const titleId = `${baseClassName}-title-${slug}${
  //   isClone ? cloneClassNameModifier : ""
  // }`;
  //
  // const subTitleId = `${baseClassName}-subtitle-${slug}${
  //   isClone ? cloneClassNameModifier : ""
  // }`;

  return (
    <div
      {...props}
      {...extraProps}
      className={clsx(
        baseClassName,
        "h-screen",
        className,
        debugClassNames,
        baseClassNames
      )}
    >
      {image ? <ProjectBackground field={image} /> : null}
      <div className="grid-container relative">
        <div className="absolute left-0 top-0 bg-black text-white">
          ProjectHero {slug}
        </div>
        <ProjectHeroTitle
          className={debugClassNames}
          aria-hidden={isClone}
          tabIndex={isClone ? -1 : 0}
          // id={titleId}
          field={titleField}
        />
        <ProjectHeroSubtitle
          className={debugClassNames}
          aria-hidden={isClone}
          tabIndex={isClone ? -1 : 0}
          field={subTitleField}
          // id={subTitleId}
        />
        <div className={"relative col-span-4 mb-3 md:col-span-12"}>
          <ProjectHeroLine />
        </div>
        <ProjectHeroCTA
          tabIndex={-1}
          className={debugClassNames}
          field={"SEE PROJECT DETAILS"}
          onClick={() => {
            if (cta) cta();
          }}
        />
        {tableData ? (
          <ProjectHeroTable focusable={false} data={tableData} />
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default ProjectHero;
