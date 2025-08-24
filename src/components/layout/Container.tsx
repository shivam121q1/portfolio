// components/layout/container.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

// Map size tokens to Tailwind max-widths
const sizes = {
  sm: "max-w-3xl",
  md: "max-w-3xl",
  lg: "max-w-6xl",
  xl: "max-w-8xl",
  "2xl": "max-w-7xl",
} as const;

type SizeKey = keyof typeof sizes;

// Polymorphic prop helpers
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type ContainerOwnProps = {
  size?: SizeKey;
  className?: string;
};

type ContainerComponent = <C extends React.ElementType = "div">(
  props: PolymorphicComponentProps<C, ContainerOwnProps>
) => React.ReactElement | null;

export const Container: ContainerComponent = ({
  as,
  size = "xl",
  className,
  children,
  ...rest
}: PolymorphicComponentProps<any, ContainerOwnProps>) => {
  const Tag: React.ElementType = as || "div";

  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        sizes[size],
        "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
