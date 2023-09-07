---
title: Strong typed Polymorphic component
author: Trent1900
date: 2023-9-6 10:02:00 +1000
categories: [strong typed component, polymorphic component]
tags: [type script, typed]
---

### Creating an polymorphic component

> In this example, we'll leverage `typescript` to build a strong typed component that can have its only props instead of setting all props as optional props<!-- prettier-ignore -->
{:.prompt-info}

- strong typed component, let say if we have an Component called 'MyComponent' with as props to be `img`, then the compiler should give us a warning that img element need to have `src` and `alt` pros

```js
<MyComponent as="img" src="" alt="" />
```

> how can we achieve this?<!-- prettier-ignore -->
{:.prompt-tip}

- we can set src and alt in the component props.like this:

```tsx
type Props = {
  as: React.ElementType;
  children: React.ReactNode;
  src: string;
  alt: string;
};
const MyComponent = ({ as, children }: Props) => {
  const Component = as || "div";
  return <Component> {children}</Component>;
};

export default MyComponent;
```

- the above method has a big issue,if the as props is set to be, let say, <p> element, the src and alt is not needed in the props. to this point, we can use generic to solve this issue.

- and the component will looks like this:

```tsx
type Props<C extends React.ElementType> = {
  as: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;
const MyComponent = ({ as, children }: Props) => {
  const Component = as || "div";
  return <Component> {children}</Component>;
};

export default MyComponent;
```

- so the final result will looks like this:

```tsx
type RainBow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "lime"
  | "blue"
  | "purple";

type TextProps = {
  color?: RainBow | "black";
};
type AsProp<C> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  color,
  ...restProps
}: PolymorphicComponentProp<C, TextProps>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};
```
