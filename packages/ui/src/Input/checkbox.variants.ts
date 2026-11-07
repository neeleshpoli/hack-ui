import { cva, type VariantProps } from "class-variance-authority";

export const checkboxVariants = cva(
  "relative flex shrink-0 items-center justify-center rounded border bg-background text-primary-foreground transition-all duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      checkboxSize: {
        sm: "size-3.5 rounded-xs [&_svg]:size-2.5",
        default: "size-4 rounded-sm [&_svg]:size-3",
        md: "size-4 rounded-sm [&_svg]:size-3",
        lg: "size-5 rounded-md [&_svg]:size-3.5",
      },
      state: {
        default:
          "border-input peer-checked:border-primary peer-checked:bg-primary data-[indeterminate=true]:border-primary data-[indeterminate=true]:bg-primary",
        error:
          "border-destructive peer-checked:border-destructive peer-checked:bg-destructive data-[indeterminate=true]:border-destructive data-[indeterminate=true]:bg-destructive",
      },
    },
    defaultVariants: {
      checkboxSize: "default",
      state: "default",
    },
  },
);

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
export type CheckboxSize = NonNullable<CheckboxVariants["checkboxSize"]>;

