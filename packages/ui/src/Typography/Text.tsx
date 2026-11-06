import * as React from "react";
import {
  Variants,
  type TypographyVariants,
  type TypographyVariant,
} from "./typography.variants";
import { cn } from "../utils";

export type TypographyElementProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & TypographyVariants;

function createSemanticComponent<
  T extends keyof React.JSX.IntrinsicElements,
  V extends TypographyVariant,
>(tag: T, defaultVariant: V, displayName: string) {
  type Element = React.ComponentRef<T>;
  type Props = React.ComponentPropsWithoutRef<T> & TypographyVariants;

  const Component = React.forwardRef<Element, Props>((props, ref) => {
    const {
      variant = defaultVariant,
      color,
      className,
      ...restProps
    } = props as Props;
    const ComponentTag = tag as React.ElementType;

    return (
      <ComponentTag
        ref={ref}
        className={cn(
          Variants({
            variant: variant ?? defaultVariant,
            color,
          }),
          className,
        )}
        {...restProps}
      />
    );
  });

  Component.displayName = displayName;
  return Component;
}

export const H1 = createSemanticComponent("h1", "h1", "H1");
export const H2 = createSemanticComponent("h2", "h2", "H2");
export const H3 = createSemanticComponent("h3", "h3", "H3");
export const H4 = createSemanticComponent("h4", "h4", "H4");
export const H5 = createSemanticComponent("h5", "h5", "H5");
export const H6 = createSemanticComponent("h6", "h6", "H6");

/** Paragraph tag */
export const P = createSemanticComponent("p", "p", "P");
export const Span = createSemanticComponent("span", "span", "Span");
export const Small = createSemanticComponent("small", "small", "Small");
export const Blockquote = createSemanticComponent(
  "blockquote",
  "blockquote",
  "Blockquote",
);
export const Code = createSemanticComponent("code", "code", "Code");

export type H1Props = TypographyElementProps<"h1">;
export type H2Props = TypographyElementProps<"h2">;
export type H3Props = TypographyElementProps<"h3">;
export type H4Props = TypographyElementProps<"h4">;
export type H5Props = TypographyElementProps<"h5">;
export type H6Props = TypographyElementProps<"h6">;
export type PProps = TypographyElementProps<"p">;
export type ParagraphProps = PProps;
export type TextProps = PProps;
export type SpanProps = TypographyElementProps<"span">;
export type SmallProps = TypographyElementProps<"small">;
export type BlockquoteProps = TypographyElementProps<"blockquote">;
export type CodeProps = TypographyElementProps<"code">;
