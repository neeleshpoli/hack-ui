import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full rounded-md border text-foreground bg-background transition-colors duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-input bg-background shadow-xs hover:border-muted-foreground/40",
        filled:
          "border-transparent bg-muted/60 hover:bg-muted/80 focus-visible:bg-background focus-visible:border-input",
        outline:
          "border-2 border-input bg-background hover:border-muted-foreground/50",
        unstyled:
          "border-0 bg-transparent p-0 shadow-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0",
      },
      inputSize: {
        sm: "h-8 px-2.5 py-1 text-xs",
        default: "h-9 px-3 py-1.5 text-sm",
        md: "h-9 px-3 py-1.5 text-sm",
        lg: "h-11 px-4 py-2 text-base",
      },
      state: {
        default: "",
        error:
          "border-destructive focus-visible:ring-destructive text-destructive",
        success: "border-success focus-visible:ring-success",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      state: "default",
      fullWidth: true,
    },
  },
);

export type InputVariants = VariantProps<typeof inputVariants>;
export type InputVariant = NonNullable<InputVariants["variant"]>;
export type InputSize = NonNullable<InputVariants["inputSize"]>;
export type InputState = NonNullable<InputVariants["state"]>;
