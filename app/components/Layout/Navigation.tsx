import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { useScrollPosition } from "~/hooks";
import { CanvasLogo } from "~/svg";
import { Link, useLoaderData } from "@remix-run/react";
import type { loader } from "~/root";

function NavigationLogo({
  src,
  isScrolled,
}: {
  src?: string | null;
  isScrolled: boolean;
}) {
  return (
    <>
      {/*Mobile logo*/}
      <div className={"block pl-4 md:hidden"}>
        {src ? (
          <div className={clsx(isScrolled ? "block" : "hidden")}>
            <img src={src} width={78} height={13} alt={"Canvas Studio Logo"} />
          </div>
        ) : (
          <div className={clsx(isScrolled ? "block" : "hidden")}>
            <CanvasLogo width={78} height={13} fill={"#000#"} />
          </div>
        )}
      </div>

      {/*Desk centered logo*/}
      <div
        className={
          "absolute left-0 right-0 m-auto hidden md:block md:w-[125px]"
        }
      >
        <div
          className={clsx(
            "transition-opacity",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        >
          <CanvasLogo width={125} height={21} fill={"#fff"} />
        </div>
      </div>
    </>
  );
}

function Navigation() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 0;
  const { navigation } = useLoaderData<typeof loader>();

  return (
    <nav
      className={clsx(
        "h-[60px] md:h-[86px]",
        "flex flex-row items-center justify-between md:justify-end ",
        "fixed left-0 top-0 z-50 w-full " +
          "transition-colors md:bg-transparent ",
        isScrolled ? "bg-white" : "bg-transparent"
      )}
    >
      <NavigationLogo
        src={navigation.data.logo_mark1.url}
        isScrolled={isScrolled}
      />
      <ul>
        {navigation.data.body.map((item) => (
          <li
            key={`${asText(item.primary.link)}`}
            className={clsx(
              isScrolled ? "text-black" : "text-white",
              "inline-block pr-4 md:pr-10",
              "md:text-white",
              "heading--3 md:text-white"
            )}
          >
            <Link to={asText(item.primary.link)}>
              ({asText(item.primary.title)})
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
