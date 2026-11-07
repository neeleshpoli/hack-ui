import * as React from "react";
import { Label } from "./Label";
import { cn } from "../utils";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      label,
      htmlFor,
      required,
      helperText,
      error,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5 w-full", className)}
        {...props}
      >
        {label && (
          <Label htmlFor={htmlFor} required={required} disabled={disabled}>
            {label}
          </Label>
        )}
        {children}
        {error ? (
          <p className="text-xs text-destructive font-medium leading-tight">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-muted-foreground leading-tight">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

FormField.displayName = "FormField";
