import { PrismicRichText } from "@prismicio/react";
import type { PrismicRichTextProps } from "@prismicio/react";

function RichText(props: PrismicRichTextProps) {
  return (
    <PrismicRichText
      {...props}
      components={{
        heading1: ({ children }) => (
          <h1 className={"display--1 hyphens-auto break-words text-white"}>
            {children}
          </h1>
        ),
        paragraph: ({ children }) => (
          <span className={"body--1 text-white"}>{children}</span>
        ),
      }}
    />
  );
}

export default RichText;
