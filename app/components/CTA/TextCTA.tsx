import TextCloneButton from "~/components/CTA/TextCloneButton";
import useTextAnimation from "~/components/CTA/useTextAnimation";
import type { DivProps } from "react-html-props";

function TextCta({ children, ...props }: Omit<DivProps, "ref">) {
  const { ref } = useTextAnimation<HTMLDivElement>();

  return (
    <TextCloneButton ref={ref} {...props}>
      {children}
    </TextCloneButton>
  );
}

export default TextCta;
