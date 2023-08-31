import React, { Fragment } from "react";
import ContactPage from "~/slices/Contact/ContactPage";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

function LayoutContact() {
  const { toggleContact, showContact } = useNavTheme();
  return (
    <Transition show={showContact} as={Fragment}>
      <Dialog onClose={() => toggleContact} className={"relative"}>
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
            <div className="display--1">HELLO!</div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default LayoutContact;
