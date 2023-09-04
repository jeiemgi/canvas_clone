import clsx from "clsx";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { NavProps } from "react-html-props";
import type { NavThemeType } from "~/components/Navigation/NavThemeProvider";

function getBackground(theme: NavThemeType) {
  switch (theme) {
    case "white":
      return "transition-colors duration-100 bg-white delay-500";
    case "transparent":
      return "bg-gradient delay-0";
    case "hidden":
      return "";
  }
}

function Nav({ children }: NavProps) {
  const { theme } = useNavTheme();
  const background = getBackground(theme);

  return (
    <header className={"fixed left-0 top-0 z-50 w-full"}>
      <nav
        className={clsx(
          background,
          "flex flex-row items-center justify-between",
          "h-header w-full px-4 md:h-headerDesk md:px-8"
        )}
      >
        {children}
      </nav>
    </header>
  );
}

export default Nav;
