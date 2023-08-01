import clsx from "clsx";
import { useRef } from "react";
import { useField } from "remix-validated-form";
import Transition from "~/components/Transition";
import type { FieldError } from "react-hook-form";
import type {
  DivProps,
  InputProps,
  LabelProps,
  TextAreaProps,
} from "react-html-props";

interface Props {
  name: string;
  label: string;
  error?: FieldError;
  containerClassName?: string;
}

function ErrorMessage({ error }: { error?: string }) {
  return (
    <Transition.FadeInBottom show={Boolean(error)}>
      <div className={"label--2 absolute bottom-5 left-0 text-red"}>
        {error}
      </div>
    </Transition.FadeInBottom>
  );
}

function Wrapper({ className, ...props }: DivProps) {
  return (
    <div className={"cursor-text"}>
      <div
        className={clsx("relative border-b border-b-white/30 pt-6", className)}
        {...props}
      />
    </div>
  );
}

function Label(props: LabelProps) {
  return (
    <label
      className={
        "body--1 absolute left-0 top-0 origin-top-left scale-[0.6] transition-transform peer-placeholder-shown:scale-100 peer-focus:scale-[0.6]"
      }
      {...props}
    />
  );
}

export function Input({
  id,
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}: Props & InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const { error, getInputProps } = useField(name, {
    validationBehavior: {
      initial: "onSubmit",
      whenTouched: "onSubmit",
      whenSubmitted: "onSubmit",
    },
  });

  return (
    <Wrapper
      onClick={() => ref.current?.focus()}
      className={containerClassName}
    >
      <input
        ref={ref}
        id={name}
        name={name}
        className={clsx(
          "body--1 peer w-full bg-transparent outline-0 ring-0 transition-[padding]",
          error ? "pb-8 text-red" : "pb-5 text-white"
        )}
        placeholder={placeholder ? placeholder : " "}
        {...getInputProps({ id: name, ...props })}
      />
      <Label htmlFor={name}>{label}</Label>
      <ErrorMessage error={error} />
    </Wrapper>
  );
}

export function TextArea({
  id,
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}: TextAreaProps & Props) {
  const ref = useRef<HTMLInputElement>(null);
  const { error, getInputProps } = useField(name, {
    validationBehavior: {
      initial: "onSubmit",
      whenTouched: "onSubmit",
      whenSubmitted: "onSubmit",
    },
  });

  return (
    <Wrapper
      onClick={() => ref.current?.focus()}
      className={containerClassName}
    >
      <textarea
        id={name}
        name={name}
        rows={6}
        placeholder={placeholder ? placeholder : " "}
        className={clsx(
          "body--1 peer w-full bg-transparent py-2 placeholder-white/30 outline-0 ring-0",
          error ? "text-red" : "text-white"
        )}
        {...getInputProps({ id: name, ...props })}
      />
      <Label htmlFor={name}>{label}</Label>
      <ErrorMessage error={error} />
    </Wrapper>
  );
}

export default Input;
