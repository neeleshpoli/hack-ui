// typography.tsx
import * as React from "react";
import {
  headingVariants,
  type BaseHeadingProps,
  type HeadingTag,
} from "./typography.variants";
import { cn } from "../utils";

function createHeadingComponent(
  defaultTag: HeadingTag,
  defaultClasses: string,
  displayName: string,
) {
  function HeadingRender<E extends HeadingTag = typeof defaultTag>(
    { as, color, className, children, ...restProps }: BaseHeadingProps<E>,
    ref: React.Ref<any>,
  ) {
    const Component = as || defaultTag;

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ color }), defaultClasses, className)}
        {...restProps}
      >
        {children}
      </Component>
    );
  }

  const Comp = React.forwardRef(HeadingRender) as <
    E extends HeadingTag = typeof defaultTag,
  >(
    props: BaseHeadingProps<E> & { ref?: React.Ref<any> },
  ) => React.ReactElement | null;

  (Comp as React.FC).displayName = displayName;
  return Comp;
}

export const H1 = createHeadingComponent(
  "h1",
  "text-4xl lg:text-5xl font-extrabold",
  "H1",
);

export const H2 = createHeadingComponent(
  "h2",
  "text-3xl lg:text-4xl font-bold",
  "H2",
);

export const H3 = createHeadingComponent(
  "h3",
  "text-2xl lg:text-3xl font-semibold",
  "H3",
);

export const H4 = createHeadingComponent(
  "h4",
  "text-xl lg:text-2xl font-semibold",
  "H4",
);

export const H5 = createHeadingComponent(
  "h5",
  "text-lg lg:text-xl font-medium",
  "H5",
);

export const H6 = createHeadingComponent(
  "h6",
  "text-base lg:text-lg font-medium",
  "H6",
);
