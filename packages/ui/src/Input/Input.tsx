import * as React from "react";
import { inputVariants, type InputVariants } from "./input.variants";
import { cn } from "../utils";

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariants {
  isError?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant,
      inputSize = "default",
      state,
      isError,
      fullWidth,
      startAdornment,
      endAdornment,
      disabled,
      ...props
    },
    ref,
  ) => {
    const computedState = isError ? "error" : state;

    if (startAdornment || endAdornment) {
      return (
        <div
          className={cn(
            "relative flex items-center",
            fullWidth !== false ? "w-full" : "w-auto inline-flex",
          )}
        >
          {startAdornment && (
            <div className="absolute left-3 flex items-center pointer-events-none text-muted-foreground [&_svg]:size-4">
              {startAdornment}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={cn(
              inputVariants({
                variant,
                inputSize,
                state: computedState,
                fullWidth,
              }),
              startAdornment && "pl-9",
              endAdornment && "pr-9",
              className,
            )}
            {...props}
          />
          {endAdornment && (
            <div className="absolute right-3 flex items-center text-muted-foreground [&_svg]:size-4">
              {endAdornment}
            </div>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          inputVariants({
            variant,
            inputSize,
            state: computedState,
            fullWidth,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
