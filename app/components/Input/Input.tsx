import type { HTMLProps } from "react";
import React from "react";
import clsx from "clsx";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  containerClassName?: string;
}

export function Input({
  id,
  label,
  placeholder,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <div className={clsx("relative pt-6", containerClassName)}>
      <input
        id={id}
        placeholder={placeholder ? placeholder : " "}
        className={
          "body--1 peer w-full border-b border-b-white/30 bg-transparent py-2 outline-0 ring-0"
        }
        {...props}
      />
      <label
        className={
          "body--1 transition-expo-transform absolute left-0 top-0 origin-top-left scale-[0.6] peer-placeholder-shown:scale-100 peer-focus:scale-[0.6]"
        }
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label: string;
  containerClassName?: string;
}

export function TextArea({
  id,
  label,
  placeholder,
  containerClassName,
  ...props
}: TextAreaProps) {
  return (
    <div className={clsx("relative pt-6", containerClassName)}>
      <textarea
        id={id}
        rows={6}
        placeholder={placeholder ? placeholder : " "}
        className={
          "body--1 peer w-full border-b border-b-white/30 bg-transparent py-2 placeholder-white/30 outline-0 ring-0"
        }
        {...props}
      />
      <label
        className={
          "body--1 absolute left-0 top-0 origin-top-left scale-[0.6] transition-transform peer-placeholder-shown:scale-100 peer-focus:scale-[0.6]"
        }
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
