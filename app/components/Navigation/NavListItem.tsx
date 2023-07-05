import clsx from "clsx";
import { Link } from "@remix-run/react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { LinkProps } from "@remix-run/react";

export interface NavListItemProps extends LinkProps {
  show?: boolean;
}

function NavListItem({
  show,
  children,
  className,
  ...props
}: NavListItemProps) {
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
