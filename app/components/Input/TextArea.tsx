import clsx from "clsx";
import { useRef } from "react";
import { useControlField, useField } from "remix-validated-form";
import { ErrorMessage, Label, Wrapper } from "~/components/Input/InputHelpers";
import type { TextAreaProps } from "react-html-props";
import type { FormInputProps } from "~/components/Input/InputHelpers";

function TextArea({
  id,
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}: TextAreaProps & FormInputProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useControlField<string>(name);
  const { error, getInputProps } = useField(name, {
    validationBehavior: {
      initial: "onSubmit",
      whenTouched: "onSubmit",
      whenSubmitted: "onSubmit",
    },
  });

  // useAutosizeTextArea(ref.current, value);

  return (
    <Wrapper
      onClick={() => ref.current?.focus()}
      className={containerClassName}
    >
      <textarea
        ref={ref}
        id={name}
        name={name}
        rows={2}
        placeholder={placeholder ? placeholder : " "}
        className={clsx(
          "body--1 peer min-h-[150px] w-full resize-none bg-transparent py-2 placeholder-white/30 outline-0 ring-0 transition-[height]",
          error ? "text-red" : "text-white"
        )}
        {...getInputProps({
          id: name,
          value,
          onChange: (e) => setValue(e.target.value),
          ...props,
        })}
      />
      <Label htmlFor={name}>{label}</Label>
      <ErrorMessage error={error} />
    </Wrapper>
  );
}

export default TextArea;
