import clsx from "clsx";
import { PrimaryCTALink } from "~/components/CTA";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { LinkProps } from "@remix-run/react";
import Transition from "~/components/Transition";
import { DivProps } from "react-html-props";

interface Props {
  show?: boolean;
}

function NavListItem({
  children,
  className,
  show = true,
  ...props
}: Props & DivProps) {
  return (
    <li>
      <Transition.FadeInOut show={show}>
        <div className={clsx("heading--3", className)} {...props}>
          {children}
        </div>
      </Transition.FadeInOut>
    </li>
  );
}

export default NavListItem;
