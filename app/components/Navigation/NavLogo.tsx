import clsx from "clsx";
import { CanvasLogo } from "~/svg";
import NavListItem from "~/components/Navigation/NavListItem";
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

export function NavLogoMobile({ isHome = true }) {
  const { theme } = useNavTheme();

  return (
    <NavListItem
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
          "transition-colors ease-out-expo",
          theme === "transparent" ? "fill-white" : "fill-black"
        )}
      />
    </NavListItem>
  );
}
