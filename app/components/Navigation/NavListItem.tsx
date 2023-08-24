import clsx from "clsx";
import Transition from "~/components/Transition";
import type { DivProps } from "react-html-props";

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
