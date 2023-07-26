import clsx from "clsx";
import { BackArrow } from "~/svg";
import NavListItem from "~/components/Navigation/NavListItem";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { Link } from "@remix-run/react";

function NavBack() {
  const { theme, showBack } = useNavTheme();

  return (
    <>
      <NavListItem
        to={"/"}
        aria-label="Back Button"
        className={clsx(showBack ? "opacity-0" : "opacity-100")}
      >
        BACK
      </NavListItem>

      <Link
        to={"/"}
        className={clsx(
          "mobile-only py-2 transition-opacity",
          showBack ? "opacity-0" : "opacity-100"
        )}
        aria-label="Back Button"
      >
        <BackArrow
          width={"1.25rem"}
          height={"0.8125rem"}
          className={clsx(
            theme === "white" ? "stroke-pure-black" : "stroke-white"
          )}
        />
      </Link>
    </>
  );
}

export default NavBack;
