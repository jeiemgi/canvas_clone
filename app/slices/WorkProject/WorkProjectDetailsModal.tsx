import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import type { ReactNode } from "react";
import { SecondaryCTA } from "~/components/CTA";

interface Props {
  isOpen: boolean;
  onClose: Function;
  children: ReactNode;
}

function WorkProjectDetailsModal({ isOpen, onClose, children }: Props) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => onClose()} className={"relative"}>
        {/*Backdrop*/}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={"fixed inset-0 h-full w-full bg-white"} />
        </Transition.Child>

        {/*Content*/}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel>
            {children}
            <CloseButton onClick={onClose} />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export function CloseButton({ onClick }: { onClick: Function }) {
  return (
    <div
      className={
        "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-0 md:left-0 md:block md:w-auto md:pb-5 md:pl-8"
      }
    >
      <SecondaryCTA className={"min-w-[195px]"} dark onClick={() => onClick()}>
        CLOSE
      </SecondaryCTA>
    </div>
  );
}

export default WorkProjectDetailsModal;
