import clsx from "clsx";
import Transition from "~/components/Transition";
import type { DivProps, LabelProps } from "react-html-props";

export interface FormInputProps {
  name: string;
  label: string;
  error?: string;
  containerClassName?: string;
}

export function ErrorMessage({ error }: { error?: string }) {
  return (
    <Transition.FadeInBottom show={Boolean(error)}>
      <div className={"label--2 absolute bottom-5 left-0 text-red"}>
        {error}
      </div>
    </Transition.FadeInBottom>
  );
}

export function Wrapper({ className, ...props }: DivProps) {
  return (
    <div className={"cursor-text"}>
      <div
        className={clsx("relative border-b border-b-white/30 pt-6", className)}
        {...props}
      />
    </div>
  );
}

export function Label(props: LabelProps) {
  return (
    <label
      className={
        "body--1 absolute left-0 top-0 origin-top-left scale-[0.6] transition-transform peer-placeholder-shown:scale-100 peer-focus:scale-[0.6]"
      }
      {...props}
    />
  );
}
