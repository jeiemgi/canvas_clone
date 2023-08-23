import clsx from "clsx";
import { BackArrow } from "~/svg";
import { Link } from "@remix-run/react";
import NavListItem from "~/components/Navigation/NavListItem";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import Transition from "~/components/Transition";

function NavBack() {
  const { theme } = useNavTheme();

  return (
    <>
      <NavListItem
        to={"/"}
        preventScrollReset
        show={false}
        aria-label="Back Button"
        className={clsx("desktop-only transition-opacity")}
      >
        BACK
      </NavListItem>

      <Transition.FadeInOut show={false}>
        <Link
          to={"/"}
          aria-label="Back Button"
          className={clsx("mobile-only py-2")}
        >
          <BackArrow
            width={"1.25rem"}
            height={"0.8125rem"}
            className={clsx(
              theme === "white" ? "stroke-pure-black" : "stroke-white"
            )}
          />
        </Link>
      </Transition.FadeInOut>
    </>
  );
}

export default NavBack;
