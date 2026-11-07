import { cva, type VariantProps } from "class-variance-authority";

export const radioVariants = cva(
  "relative flex shrink-0 items-center justify-center rounded-full border bg-background transition-all duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      radioSize: {
        sm: "size-3.5",
        default: "size-4",
        md: "size-4",
        lg: "size-5",
      },
      state: {
        default:
          "border-input peer-checked:border-primary peer-checked:bg-primary",
        error:
          "border-destructive peer-checked:border-destructive peer-checked:bg-destructive",
      },
    },
    defaultVariants: {
      radioSize: "default",
      state: "default",
    },
  },
);

export const radioDotVariants = cva(
  "rounded-full bg-primary-foreground transition-transform duration-150",
  {
    variants: {
      radioSize: {
        sm: "size-1.5",
        default: "size-2",
        md: "size-2",
        lg: "size-2.5",
      },
    },
    defaultVariants: {
      radioSize: "default",
    },
  },
);

export type RadioVariants = VariantProps<typeof radioVariants>;
export type RadioSize = NonNullable<RadioVariants["radioSize"]>;
