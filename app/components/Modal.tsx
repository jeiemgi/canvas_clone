import clsx from "clsx";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SecondaryCTA } from "~/components/CTA";
import type { ReactNode } from "react";

interface ModalProps {
  innerClassName?: string;
  backdropClassName?: string;
  children: ReactNode;
  isOpen: boolean;
  showClose?: boolean;
  scroll?: boolean;
  toggle: Function;
}

function Modal({
  scroll = false,
  children,
  backdropClassName = "bg-white",
  innerClassName,
  isOpen,
  toggle,
  showClose = false,
}: ModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => {
          toggle();
        }}
        className={"relative"}
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
            className={clsx("fixed inset-0 h-full w-full", backdropClassName)}
          />
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
            className={clsx(
              "fixed inset-0 h-full w-full",
              scroll ? "overflow-scroll" : "",
              innerClassName
            )}
            data-lenis-prevent={scroll}
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
