import type { ReactNode } from "react";
import type { ButtonProps } from "react-html-props";

interface Props extends ButtonProps {
  children: ReactNode;
}

export const TextCloneButton = ({ children }: Props) => {
  return (
    <div className={"relative overflow-hidden"} aria-label={children as string}>
      <span className={"content block"}>{children}</span>
      <span className={"clone absolute block"}>{children}</span>
    </div>
  );
};

export default TextCloneButton;
