import clsx from "clsx";
import { PrimaryCTALink } from "~/components/CTA";
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
      <PrimaryCTALink dark {...props}>
        {children}
      </PrimaryCTALink>
    </li>
  );
}

export default NavListItem;
