---
title: use generic to help with the returned value
author: Trent1900
date: 2023-7-2 22:02:00 +1000
categories: [Blogging, jwt]
tags: [jwt decode, type]
---

### data type of jwt verify function

When handling tokens, a common practice is use the jwt.verify function to check if a token is valid, and then add the decoded content from jwt.verify to req.user.

```ts
export function verifyJWT(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return { payload: decoded, expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}
```

- Because the return value of the verifyJWT function is customized based on the project's requirements, it can be challenging to determine its type. In such cases, we can use TypeScript's generics type.

```ts
export function verifyJWT<T>(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey) as T;
    // if no error, that means decoded is working, and add expired :false to frontend
    return { payload: decoded, expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}
```

- When calling this function, we can specify the type of the returned value:

```ts
type Decode = {
  sessionId: string;
  expired: boolean;
};
const decoded = verifyJWT<Decode>(refreshToken).payload;
if (!decoded) {
  return next();
}
const sessionId = decoded.sessionId;
```

> Use generics in react component<!-- prettier-ignore -->
{:.prompt-tip}

```ts
import React from "react";

// Define a generic type for the props of the component
type ButtonProps<T> = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  data: T; // The generic data prop
};

// Create a generic component that accepts the generic type as a prop
function Button<T>({ label, onClick, data }: ButtonProps<T>) {
  return (
    <button onClick={onClick}>
      {label}: {data}
    </button>
  );
}

// Usage example:
const App = () => {
  // Specify the data type when using the Button component
  return (
    <div>
      <Button<string>
        label="String Button"
        onClick={() => alert("Clicked!")}
        data="Hello"
      />
      <Button<number>
        label="Number Button"
        onClick={() => alert("Clicked!")}
        data={42}
      />
    </div>
  );
};

export default App;
```

> Summary<!-- prettier-ignore -->
{:.prompt-tip}

- at the moment when we "use" or "evoke" the function, we can pass the generic types into it. this means, we have the ability to "change" a preset function with the help of generic.
- In our case,` <Button<string>/>` the generic type is set to be `<string>`,and the Component(function) `Button`'s generic `T` is set to be "string" as well and it is very powerful.

- Generics are a powerful feature in statically-typed languages, allowing developers to parameterize types and make components more flexible and reusable. By introducing generics, a component can accept and enforce specific types that are provided when the component is used, improving type safety and reducing code duplication.TypeScript generics is very power when we try to define the type of the parameters or return values whose types may vary.
