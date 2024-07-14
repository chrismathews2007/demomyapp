"use client";

import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import classNames from "classnames";

interface TextProps {
  asChild?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  smSize?: "sm" | "md" | "lg";
  mdSize?: "sm" | "md" | "lg";
  lgSize?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "bold";
  smWeight?: "normal" | "medium" | "bold";
  mdWeight?: "normal" | "medium" | "bold";
  lgWeight?: "normal" | "medium" | "bold";
  children: React.ReactNode;
}

const Text = React.forwardRef<React.ElementRef<typeof Primitive.span>, TextProps>(
  (
    {
      asChild = false,
      className,
      size = "md",
      smSize,
      mdSize,
      lgSize,
      weight = "normal",
      smWeight,
      mdWeight,
      lgWeight,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Primitive.span : "span";

    const baseClasses = "leading-relaxed";
    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    };

    const responsiveSizeClasses = {
      sm: smSize ? `sm:${sizeClasses[smSize]}` : "",
      md: mdSize ? `md:${sizeClasses[mdSize]}` : "",
      lg: lgSize ? `lg:${sizeClasses[lgSize]}` : "",
    };

    const responsiveWeightClasses = {
      sm: smWeight ? `sm:${weightClasses[smWeight]}` : "",
      md: mdWeight ? `md:${weightClasses[mdWeight]}` : "",
      lg: lgWeight ? `lg:${weightClasses[lgWeight]}` : "",
    };

    return (
      <Component
        ref={ref}
        className={classNames(
          baseClasses,
          sizeClasses[size],
          weightClasses[weight],
          responsiveSizeClasses.sm,
          responsiveSizeClasses.md,
          responsiveSizeClasses.lg,
          responsiveWeightClasses.sm,
          responsiveWeightClasses.md,
          responsiveWeightClasses.lg,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export default Text;
