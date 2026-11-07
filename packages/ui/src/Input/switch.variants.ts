import { cva, type VariantProps } from "class-variance-authority";

export const switchTrackVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      switchSize: {
        sm: "h-4 w-7",
        default: "h-5 w-9",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
      variant: {
        default: "bg-input peer-checked:bg-primary",
        success: "bg-input peer-checked:bg-success",
        destructive: "bg-input peer-checked:bg-destructive",
      },
    },
    defaultVariants: {
      switchSize: "default",
      variant: "default",
    },
  },
);

export const switchThumbVariants = cva(
  "pointer-events-none inline-block rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-in-out",
  {
    variants: {
      switchSize: {
        sm: "size-3 translate-x-0 peer-checked:translate-x-3",
        default: "size-4 translate-x-0 peer-checked:translate-x-4",
        md: "size-4 translate-x-0 peer-checked:translate-x-4",
        lg: "size-5 translate-x-0 peer-checked:translate-x-5",
      },
    },
    defaultVariants: {
      switchSize: "default",
    },
  },
);

export type SwitchVariants = VariantProps<typeof switchTrackVariants>;
export type SwitchSize = NonNullable<SwitchVariants["switchSize"]>;

