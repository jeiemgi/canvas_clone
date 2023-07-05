import clsx from "clsx";
import type { ULProps } from "react-html-props";

function NavList({ children, className }: ULProps) {
  return (
    <ul
      className={clsx("relative flex items-center gap-4 md:gap-10", className)}
    >
      {children}
    </ul>
  );
}

export default NavList;
