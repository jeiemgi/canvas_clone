import clsx from "clsx";
import { Link } from "@remix-run/react";
import { useScrollPosition } from "~/hooks";
import { CanvasLogo } from "~/svg";

function NavigationLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      {/*Mobile logo*/}
      <div className={"block pl-4 md:hidden"}>
        <div className={clsx(isScrolled ? "block" : "hidden")}>
          <CanvasLogo width={78} height={13} fill={"#000#"} />
        </div>
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
      <NavigationLogo isScrolled={isScrolled} />
      <ul>
        <li
          className={clsx(
            isScrolled ? "text-black" : "text-white",
            "pr-4 md:pr-10",
            "md:text-white",
            "heading--3 md:text-white"
          )}
        >
          <Link to={"contact"}>(Contact)</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
