import clsx from "clsx";
import { CanvasLogo } from "~/svg";
import { Link, useLocation } from "@remix-run/react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";

export function NavLogoDesktop() {
  const { theme } = useNavTheme();

  return (
    <div className={"desktop-only absolute left-0 right-0 m-auto w-max"}>
      <CanvasLogo
        width={125}
        height={21}
        className={clsx(
          "transition-colors",
          theme === "transparent" ? "fill-white" : "fill-black"
        )}
      />
    </div>
  );
}

export function NavLogoMobile() {
  const { theme } = useNavTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Link
      to={"/"}
      className={clsx(
        "mobile-only transition-expo-transform absolute left-0",
        isHome ? "translate-x-0" : "translate-x-8"
      )}
    >
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
