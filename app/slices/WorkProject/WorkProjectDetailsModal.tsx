import { Fragment } from "react";
import { ModalCloseButton } from "~/components/Modal";
import { Dialog, Transition } from "@headlessui/react";
import type { ReactNode } from "react";

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
            <ModalCloseButton onClick={onClose} />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default WorkProjectDetailsModal;
