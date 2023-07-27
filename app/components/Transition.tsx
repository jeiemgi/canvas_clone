import { Transition as HTransition } from "@headlessui/react";
import type { PropsWithChildren } from "react";

interface FadeInOutProps extends PropsWithChildren {
  show: boolean;
}

function FadeInOut({ show = true, children }: FadeInOutProps) {
  return (
    <HTransition
      show={show}
      enter="transition-opacity duration-150 ease-in-out "
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150 ease-in-out "
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </HTransition>
  );
}

const Transition = {
  FadeInOut,
};
export default Transition;
