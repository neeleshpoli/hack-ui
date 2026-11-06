import { cva, type VariantProps } from "class-variance-authority";

export const Variants = cva("font-sans text-foreground", {
  variants: {
    variant: {
      h1: "text-4xl lg:text-5xl font-extrabold tracking-tight",
      h2: "text-3xl lg:text-4xl font-bold tracking-tight",
      h3: "text-2xl lg:text-3xl font-semibold tracking-tight",
      h4: "text-xl lg:text-2xl font-semibold tracking-tight",
      h5: "text-lg lg:text-xl font-medium tracking-tight",
      h6: "text-base lg:text-lg font-medium tracking-tight",
      p: "text-base font-normal leading-7",
      span: "text-base font-normal",
      small: "text-sm font-medium leading-none",
      blockquote: "border-l-2 pl-4 italic text-muted-foreground",
      code: "font-mono text-sm bg-muted rounded px-1.5 py-0.5",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export type TypographyVariants = VariantProps<typeof Variants>;
export type TypographyVariant = NonNullable<TypographyVariants["variant"]>;
export type TypographyColor = NonNullable<TypographyVariants["color"]>;
