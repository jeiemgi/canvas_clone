import type { ButtonProps } from "react-html-props";

interface Props extends ButtonProps {
  children: string;
}

const TextCloneButton = ({ children }: Props) => {
  return (
    <div className={"relative overflow-hidden"} aria-label={children}>
      <span className={"content block"}>{children}</span>
      <span className={"clone absolute block"}>{children}</span>
    </div>
  );
};

export default TextCloneButton;
