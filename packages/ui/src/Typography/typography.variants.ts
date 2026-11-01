import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const headingVariants = cva(
  "font-sans font-bold tracking-tight text-foreground",
  {
    variants: {
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

export type HeadingVariantProps = VariantProps<typeof headingVariants>;

export type HeadingTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

type HeadingOwnProps<E extends HeadingTag> = {
  as?: E;
  className?: string;
  children?: React.ReactNode;
} & HeadingVariantProps;

export type BaseHeadingProps<E extends HeadingTag> = HeadingOwnProps<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof HeadingOwnProps<E>>;