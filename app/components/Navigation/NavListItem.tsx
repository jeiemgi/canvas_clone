import clsx from "clsx";
import { PrimaryCTALink } from "~/components/CTA";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { LinkProps } from "@remix-run/react";
import Transition from "~/components/Transition";

interface Props {
  show?: boolean;
}

function NavListItem({
  children,
  className,
  show = true,
  ...props
}: Props & LinkProps) {
  const { theme } = useNavTheme();

  return (
    <Transition.FadeInOut show={show}>
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
    </Transition.FadeInOut>
  );
}

export default NavListItem;
