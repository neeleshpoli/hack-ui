import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

export const labelVariants = cva(
  "text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none",
  {
    variants: {
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      disabled: false,
    },
  },
);

export type LabelVariants = VariantProps<typeof labelVariants>;

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>, LabelVariants {
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, size, disabled, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ size, disabled }), className)}
        {...props}
      >
        {children}
        {required && (
          <span
            className="ml-1 text-destructive font-semibold"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label";
