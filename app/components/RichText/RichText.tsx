import { PrismicRichText } from "@prismicio/react";
import type { PrismicRichTextProps } from "@prismicio/react";

function RichText(props: PrismicRichTextProps) {
  return (
    <PrismicRichText
      {...props}
      components={{
        heading1: ({ children }) => (
          <h1 className={"heading--1"}>{children}</h1>
        ),
        paragraph: ({ children }) => <p className={"body--1"}>{children}</p>,
      }}
    />
  );
}

export default RichText;
