import clsx from "clsx";
import useIsScrolled from "~/hooks/useIsScrolled";
import type { NavProps } from "react-html-props";

function Nav({ children }: NavProps) {
  const isScrolled = useIsScrolled();

  return (
    <nav
      className={clsx(
        "fixed left-0 top-0 z-50 h-header w-full px-4 md:h-headerDesk md:px-8",
        "flex flex-row items-center justify-between",
        "transition-colors",
        "bg-gradient-to-b from-pure-black/10 to-transparent",
        isScrolled
          ? "bg-white"
          : "bg-gradient-to-b from-pure-black/10 to-transparent"
      )}
    >
      {children}
    </nav>
  );
}

export default Nav;
