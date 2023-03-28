---
title: 面试准备
author: Trent1900
date: 2023-3-1 19:02:00 +1000
categories: [Blogging]
tags: [interview]
---

Start date: 2 Mar 2023te
end date: TBC

### 面试准备

#### 逐条STAR
1. •	Implemented font optimization with Next.js's next/font to achieve zero layout shifting and enhance user experience (UX).
   1. 情景/任务：主页第一次load的时候，字体是默认的字体，下一秒，特殊字体加载后，按键的位置变化了。有多烦人取决于当时网络的快慢。
   2. 行动： 测试网页加载时候，字体的加载顺序，如果网速太快，区别就不明显，所以开了3g，清了catch，然后reload页面。
ts 字体：

1. preload，增加了用户体验
2. 字体编译，加了乱码 crypt，不会重复
3. subset, 更小体积

#### 在 form 当中，label 一直是需要的

- placeholder 会不见去，但是 label 一直存在，在 accessibility 中，一定要用到，screen reader 中读的是 label。在找工作中会踩坑。
- promise 视频要看
- [x] 看一下 next/jest 文档
- [x]看一下 react react test library
- [x]写一下 test 部分
  - [x]test for **tests**/components/InfoItem.test.tsx
  - [x]**tests**/works/[id].test.tsx
- [x] 学习一下 next 环境的设置。

#### react test library

- getByTestId

  ```js
  import { render, screen } from "@testing-library/react";
  render(<MyComponent />);
  const element = screen.getByTestId("custom-element");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello World!");
  ```

- 在组件中，需要给 element 加一个 test id

```ts
<div data-testid="custom-element" />
```

```js
be;
```

