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
    <li>
      <Transition.FadeInOut show={show}>
        <div className={clsx("heading--3", className)}>
          <PrimaryCTALink dark={theme === "transparent"} {...props}>
            {children}
          </PrimaryCTALink>
        </div>
      </Transition.FadeInOut>
    </li>
  );
}

export default NavListItem;
