import clsx from "clsx";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { NavProps } from "react-html-props";

function Nav({ children }: NavProps) {
  const { theme } = useNavTheme();

  return (
    <nav
      className={clsx(
        "fixed left-0 top-0 z-50 h-header w-full px-4 md:h-headerDesk md:px-8",
        "flex flex-row items-center justify-between",
        { "bg-white": theme === "white" }
      )}
    >
      {children}
    </nav>
  );
}

export default Nav;
