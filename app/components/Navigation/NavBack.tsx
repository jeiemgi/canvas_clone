import clsx from "clsx";
import { BackArrow } from "~/svg";
import { Link } from "@remix-run/react";
import NavListItem from "~/components/Navigation/NavListItem";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";

function NavBack() {
  const { theme, showBack } = useNavTheme();

  return (
    <>
      <NavListItem
        to={"/"}
        aria-label="Back Button"
        className={clsx(
          "desktop-only transition-opacity",
          showBack ? "opacity-0" : "opacity-100"
        )}
      >
        BACK
      </NavListItem>

      <Link
        to={"/"}
        aria-label="Back Button"
        className={clsx(
          "mobile-only py-2 transition-opacity",
          showBack ? "opacity-0" : "opacity-100"
        )}
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
