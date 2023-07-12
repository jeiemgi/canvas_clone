import clsx from "clsx";
import { Link } from "@remix-run/react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { LinkProps } from "@remix-run/react";

function NavListItem({ children, className, ...props }: LinkProps) {
  const { theme } = useNavTheme();

  return (
    <li
      className={clsx(
        "heading--3",
        theme === "transparent" ? "text-white" : "text-black",
        className
      )}
    >
      <Link {...props}>{children}</Link>
    </li>
  );
}

export default NavListItem;
