import clsx from "clsx";
import { gsap } from "gsap";
import easings from "~/lib/easings";
import { asText } from "@prismicio/richtext";
import { Image } from "~/components/Image";
import TextCta from "~/components/CTA/TextCTA";
import ProjectHeroTable from "~/components/ProjectHero/ProjectHeroTable";
import type { ProjectHeroTableProps } from "~/components/ProjectHero/ProjectHeroTable";
import type { ReactNode } from "react";
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
        "display--1 relative col-span-4 my-12 text-white md:col-span-12 md:mb-32 md:mt-24 md:h-[7rem]",
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
        "leading--3 relative col-span-4 mb-12 text-white md:col-span-12 md:mb-2 md:pb-20",
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
    <div className="desktop-only relative md:col-span-5">
      <button className={"overflow-hidden"} {...props}>
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

interface Props extends DivProps {
  slug: KeyTextField;
  cta?: Function;
  children?: ReactNode;
  tableData?: ProjectHeroTableProps;
  isClone?: boolean;
  image?: ImageField;
  debug?: boolean;
}

interface GSAPAnimationFunction extends GSAPTweenVars {
  tl: GSAPTimeline;
  slug: string;
  scope: Element | Document;
}

export const animateBanner = ({ tl, slug, scope }: GSAPAnimationFunction) => {
  console.log("animateBanner");

  const position = 0;
  const stagger = 0.2;
  const duration = 0.6;
  const ease = easings.mask;

  const titleID = "";
  const titleItem = scope.querySelector(titleID);

  if (titleItem) {
    const cloneHeroTitle = scope.querySelector(
      `#home-menu-clone-title-${slug}`
    );
    const titleState = Flip.getState(titleItem);
    cloneHeroTitle?.appendChild(titleItem);

    const titleTl = Flip.from(titleState, { duration, ease });
    const titleText = titleItem.querySelector(".title-item__text")!;
    titleTl.to(
      titleText,
      {
        ease,
        duration: duration - 0.2,
        fontSize: "6.875rem",
        letterSpacing: "-0.1375rem",
        transformOrigin: "top left",
      },
      0
    );
    titleTl.set(titleText, { lineHeight: "105%" });
  }

  const subtitleID = "";
  const subtitleItem = document.querySelector(subtitleID);
  if (subtitleItem) {
    const cloneHeroSubtitle = document.querySelector(
      `#home-menu-clone-subtitle-${slug}`
    );
    const subtitleState = Flip.getState(subtitleItem);
    cloneHeroSubtitle?.appendChild(subtitleItem);
    const subTl = Flip.from(subtitleState, { duration, ease });

    const subtitleText = subtitleItem.querySelector(".subtitle-item__text")!;
    subTl.to(
      subtitleText,
      {
        ease,
        duration: duration - 0.2,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
      },
      0
    );
    subTl.set(subtitleText, { lineHeight: "105%" }, 0);
  }

  // ANIMATE TABLE
  const tableLines = scope.querySelectorAll(".hero-table-line");
  const tableItems = scope.querySelectorAll(".hero-table-row__item");
  tl?.to(
    tableLines,
    {
      ease,
      duration,
      scaleX: 1,
    },
    position
  );

  tl?.to(
    tableItems,
    {
      ease,
      duration,
      stagger,
      y: "0%",
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
  debug = true,
  ...props
}: Props) {
  const extraProps = isClone ? { tabIndex: -1, "aria-hidden": true } : {};

  const baseClassName = "ProjectHero";
  const cloneClassNameModifier = "__clone";

  const baseClassNames = isClone
    ? "pointer-events-none absolute left-0 top-0 min-h-screen w-full"
    : "relative";

  const debugClassNames = debug ? "border inner border-white" : "";

  const titleId = `${baseClassName}-title-${slug}${
    isClone ? cloneClassNameModifier : ""
  }`;

  const subTitleId = `${baseClassName}-subtitle-${slug}${
    isClone ? cloneClassNameModifier : ""
  }`;

  return (
    <div
      {...props}
      {...extraProps}
      className={clsx(
        "ProjectHero",
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
          id={titleId}
        />
        <ProjectHeroSubtitle
          className={debugClassNames}
          aria-hidden={isClone}
          tabIndex={isClone ? -1 : 0}
          id={subTitleId}
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
