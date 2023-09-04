import React, { Fragment } from "react";
import ContactPage from "~/slices/Contact/ContactPage";
import { Dialog, Transition } from "@headlessui/react";

function LayoutContact({
  show,
  onClose,
}: {
  show: boolean;
  onClose: (show: boolean) => void;
}) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog onClose={onClose} className={"relative"}>
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
            className={
              "noise-background fixed inset-0 h-full w-full bg-pure-black"
            }
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
            data-lenis-prevent={true}
            className={"fixed inset-0 h-full w-full overflow-scroll"}
          >
            <ContactPage />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default LayoutContact;
