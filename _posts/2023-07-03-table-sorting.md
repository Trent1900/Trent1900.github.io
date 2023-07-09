---
title: create a sorting table in React
author: Trent1900
date: 2023-7-3 22:02:00 +1000
categories: [Blogging, jwt]
tags: [logout]
---

### Create a react sorting table



<p style="color:red">Property 'user' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.</p>

To fix the error,two things needs to be done

1. add type roots in `tsconfig.json`

```ts
// tsconfig.json
"typeRoots": [
      "./typings",
      "./node_modules/@types"
    ] /* List of folders to include type definitions from. */,
```

2. add the custom type here

```ts
// typings/express/index.d.ts
declare namespace Express {
  interface Request {
    customTypes: {
      // add the custom types here
    };
  }
}
```

> more infos refers to the [link](https://github.com/TypeStrong/ts-node/issues/745)<!-- prettier-ignore -->
{:.prompt-tip}
