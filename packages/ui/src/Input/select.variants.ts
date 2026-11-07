import { cva, type VariantProps } from "class-variance-authority";

export const selectVariants = cva(
  "flex w-full appearance-none items-center justify-between rounded-md border text-foreground bg-background transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-input bg-background shadow-xs hover:border-muted-foreground/40",
        filled:
          "border-transparent bg-muted/60 hover:bg-muted/80 focus-visible:bg-background focus-visible:border-input",
        outline:
          "border-2 border-input bg-background hover:border-muted-foreground/50",
      },
      inputSize: {
        sm: "h-8 pl-2.5 pr-8 text-xs",
        default: "h-9 pl-3 pr-9 text-sm",
        md: "h-9 pl-3 pr-9 text-sm",
        lg: "h-11 pl-4 pr-10 text-base",
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

export type SelectVariants = VariantProps<typeof selectVariants>;
export type SelectVariant = NonNullable<SelectVariants["variant"]>;
export type SelectSize = NonNullable<SelectVariants["inputSize"]>;
