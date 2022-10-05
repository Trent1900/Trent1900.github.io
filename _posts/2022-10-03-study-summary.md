---
title: week 41 summary
author: Trent1900
date: 2022-10-03 05:32:00 +1000
categories: [Blogging]
tags: [project summary, JobPin project]
---

### Nextjs public folder

> Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).(import is not needed)<!-- prettier-ignore -->
{:.prompt-info}
For example, if you add an file to `public/default_avatar.svg`{:.filepath}, then `img.scr` will be direct to default_avatar.svg in public folder.

```tsx
<AvatarImage src={imageUrl || `/default_avatar.svg`} />
```

> The nullish coalescing operator `??` is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 有点像 logic or. <!-- prettier-ignore -->
{:.prompt-info}

```js
const foo = null ?? "default string";
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

### npm run start

- new repo, npm install, npm run start 后,网页报错

```
code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: eslint-plugin-compat@2.7.0
npm ERR! Found: eslint@7.32.0
...
...
...
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/.../.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/usr/.npm/_logs/2022-10-04T23_11_22_934Z-debug-0.log
```

the above error indicates a version conflict caused by npm version. use nvm change version

### "lockfileVersion" in package-lock.json

lockfileVersion will appear at the top (3rd line for my case) in the package-lock.json file, it will tell you which npm version to use when you try to run `npm install`, if the npm version does not match, the package-lock.json might be rewritten by `npm install`.

1. The lockfile version used by npm v5 and v6.
2. The lockfile version used by npm v7, which is backwards compatible to v1 lockfiles.
3. The lockfile version used by npm v7, without backwards compatibility affordances. This is used for the hidden lockfile at node_modules/.package-lock.json, and will likely be used in a future version of npm, once support for npm v6 is no longer relevant.
   > check readme.md and package-lock.json to determine which npm to use <!-- prettier-ignore -->
{:.prompt-tip}
