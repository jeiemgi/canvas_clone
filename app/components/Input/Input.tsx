import clsx from "clsx";
import { useRef } from "react";
import { useField } from "remix-validated-form";
import { Label, Wrapper, ErrorMessage } from "~/components/Input/InputHelpers";
import type { FormInputProps } from "~/components/Input/InputHelpers";
import type { InputProps } from "react-html-props";

function Input({
  id,
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}: FormInputProps & InputProps) {
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
        {...getInputProps({
          id: name,
          ...props,
        })}
      />
      <Label htmlFor={name}>{label}</Label>
      <ErrorMessage error={error} />
    </Wrapper>
  );
}

export default Input;
