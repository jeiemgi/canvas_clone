import type { PrismicRichTextProps } from "@prismicio/react";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";

const defaultComponents = {
  heading1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-bold">{children}</h1>
  ),
};

const PrismicRichText = ({ components, ...props }: PrismicRichTextProps) => {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
};

export default PrismicRichText;
