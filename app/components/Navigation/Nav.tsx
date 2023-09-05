import clsx from "clsx";
import type { ReactNode } from "react";
import type { NavThemeType } from "~/components/Navigation/NavThemeProvider";

function getBackground(theme: NavThemeType) {
  switch (theme) {
    case "white":
      return "transition-colors bg-white";
    case "transparent":
      return "transition-colors bg-gradient";
    case "hidden":
      return "";
  }
}

function Nav({
  children,
  theme,
}: {
  children: ReactNode;
  theme: NavThemeType;
}) {
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
