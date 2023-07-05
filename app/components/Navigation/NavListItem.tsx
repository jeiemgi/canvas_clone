import clsx from "clsx";
import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import useIsScrolled from "~/hooks/useIsScrolled";

export interface NavListItemProps extends LinkProps {
  show?: boolean;
}

function NavListItem({
  show = true,
  children,
  className,
  ...props
}: NavListItemProps) {
  const isScrolled = useIsScrolled();

  return (
    <li
      className={clsx(
        "heading--3 transition-opacity",
        show ? "opacity-100" : "opacity-0",
        isScrolled ? "text-black" : "text-white",
        className
      )}
    >
      <Link {...props}>{children}</Link>
    </li>
  );
}

export default NavListItem;
