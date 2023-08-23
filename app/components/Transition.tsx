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

interface SwitchProps {
  show: boolean;
  onTrue: (show: boolean) => ReactNode;
  onFalse: (show: boolean) => ReactNode;
}

function SwitchFadeInFadeOut({ show, onTrue, onFalse, ...props }: SwitchProps) {
  return (
    <div className={"relative"}>
      <Transition
        show={show}
        enterTo="opacity-100 translate-y-0"
        enterFrom="opacity-0 translate-y-1/2"
        enter="transition-opacity transition-transform duration-150 ease-in-out"
        leaveTo="opacity-0 translate-y-[1rem]"
        leaveFrom="opacity-100 translate-y-0"
        leave="transition-opacity transition-transform duration-200 ease-in-out "
        {...props}
      >
        {onTrue(show)}
      </Transition>
      <Transition
        show={!show}
        enter="transition-opacity transition-transform duration-150 ease-in-out "
        enterFrom="opacity-0 translate-y-[-1rem]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity transition-transform duration-200 ease-in-out "
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[1rem]"
        {...props}
      >
        {onFalse(show)}
      </Transition>
    </div>
  );
}

export default {
  FadeInOut,
  FadeInBottom,
  SwitchFadeInFadeOut,
};
