import clsx from "clsx";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import type { DivProps } from "react-html-props";

export interface TextCloneButtonProps extends DivProps {
  children: ReactNode;
  className?: string;
}

export const TextCloneButton = forwardRef<HTMLDivElement, TextCloneButtonProps>(
  ({ children, className = "" }, ref) => {
    return (
      <div
        ref={ref}
        aria-label={children as string}
        className={clsx(className, "relative overflow-hidden")}
      >
        <span className={"content block"}>{children}</span>
        <span className={"clone absolute block"}>{children}</span>
      </div>
    );
  }
);

TextCloneButton.displayName = "TextCloneButton";

export default TextCloneButton;
