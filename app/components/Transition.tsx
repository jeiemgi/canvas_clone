import { Transition as HTransition } from "@headlessui/react";
import type { ReactNode } from "react";

interface Props {
  show: boolean;
  children: ReactNode;
}

function FadeInOut(props: Props) {
  return (
    <HTransition
      enter="transition-opacity duration-150 ease-in-out "
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150 ease-in-out "
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      {...props}
    />
  );
}

function FadeInBottom(props: Props) {
  return (
    <HTransition
      enter="transition-opacity transition-transform duration-150 ease-in-out "
      enterFrom="opacity-0 translate-y-1/2"
      enterTo="opacity-100 translate-y-0"
      leave="transition-opacity duration-150 ease-in-out "
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1/2"
      {...props}
    />
  );
}

const Transition = {
  FadeInOut,
  FadeInBottom,
};
export default Transition;
