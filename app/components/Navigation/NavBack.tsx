import clsx from "clsx";
import { BackArrow } from "~/svg";
import NavListItem from "~/components/Navigation/NavListItem";
import useIsScrolled from "~/hooks/useIsScrolled";

function NavBack({ isHome }: { isHome: boolean }) {
  const isScrolled = useIsScrolled();

  return (
    <NavListItem
      to={"/"}
      className={clsx(
        "transition-opacity",
        isHome ? "opacity-0" : "opacity-100"
      )}
    >
      <button
        aria-label="Back Button"
        className={"desktop-only"}
      >{`( BACK )`}</button>
      <button aria-label="Back Button" className={"mobile-only py-2"}>
        <BackArrow
          width={"1.25rem"}
          height={"0.8125rem"}
          className={clsx(isScrolled ? "stroke-pure-black" : "stroke-white")}
        />
      </button>
    </NavListItem>
  );
}

export default NavBack;
