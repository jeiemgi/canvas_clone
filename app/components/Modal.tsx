import clsx from "clsx";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SecondaryCTA } from "~/components/CTA";
import type { ReactNode } from "react";
import type { DivProps } from "react-html-props";

interface ModalProps {
  innerProps?: DivProps;
  backdropProps?: DivProps;
  backdropClassName?: string;
  children: ReactNode;
  innerClassName?: string;
  isOpen: boolean;
  showClose?: boolean;
  toggle: Function;
}

function Modal({
  backdropProps,
  backdropClassName = "bg-white",
  children,
  innerProps,
  isOpen,
  showClose = false,
  toggle,
  ...props
}: ModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          toggle();
        }}
        className={"relative"}
        {...props}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            {...backdropProps}
            className={clsx("fixed inset-0 h-full w-full", backdropClassName)}
          ></div>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            {...innerProps}
            className={clsx(
              "fixed inset-0 h-full w-full",
              innerProps?.className
            )}
          >
            {children}
            {showClose ? <ModalClose toggle={toggle} /> : null}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

function ModalClose({ toggle }: { toggle: Function }) {
  return (
    <div
      className={
        "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-0 md:left-0 md:block md:w-auto md:pb-5 md:pl-8"
      }
    >
      <SecondaryCTA dark onClick={() => toggle()}>
        CLOSE
      </SecondaryCTA>
    </div>
  );
}

export default Modal;
