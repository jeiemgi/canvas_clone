import { Transition } from "@headlessui/react";
import type { ReactNode } from "react";

interface Props {
  show: boolean;
  children: ReactNode;
}

function FadeInOut({ show, ...props }: Props) {
  return (
    <Transition
      show={show}
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

function FadeInBottom({ show, ...props }: Props) {
  return (
    <Transition
      show={show}
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

export default {
  FadeInOut,
  FadeInBottom,
};
