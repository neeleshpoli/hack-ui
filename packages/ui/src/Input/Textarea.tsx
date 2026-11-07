import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

export const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border text-foreground bg-background transition-colors duration-150 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
        sm: "px-2.5 py-1.5 text-xs",
        default: "px-3 py-2 text-sm",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
      state: {
        default: "",
        error:
          "border-destructive focus-visible:ring-destructive text-destructive",
        success: "border-success focus-visible:ring-success",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      state: "default",
      resize: "vertical",
    },
  },
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, TextareaVariants {
  isError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      inputSize = "default",
      state,
      resize = "vertical",
      isError,
      disabled,
      ...props
    },
    ref,
  ) => {
    const computedState = isError ? "error" : state;

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          textareaVariants({
            variant,
            inputSize,
            state: computedState,
            resize,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
