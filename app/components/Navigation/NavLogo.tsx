import clsx from "clsx";
import { CanvasLogo } from "~/svg";
import { Link } from "@remix-run/react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";

export function NavLogoDesktop() {
  const { theme } = useNavTheme();

  return (
    <Link
      to={"/"}
      aria-label={"CANVAS"}
      className={"desktop-only absolute left-0 right-0 m-auto w-max"}
    >
      <CanvasLogo
        width={125}
        height={21}
        className={clsx(
          "transition-colors",
          theme === "transparent" ? "fill-white" : "fill-black"
        )}
      />
    </Link>
  );
}

export function NavLogoMobile() {
  const { theme } = useNavTheme();

  return (
    <Link to={"/"} aria-label={"CANVAS"} className={"mobile-only"}>
      <CanvasLogo
        width={78}
        height={13}
        className={clsx(
          "transition-colors",
          theme === "transparent" ? "fill-white" : "fill-black"
        )}
      />
    </Link>
  );
}
