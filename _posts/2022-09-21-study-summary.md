---
title: Study Summary
author: Trent1900
date: 2022-09-21 10:32:00 +1000
categories: [Blogging, Summary]
tags: [fullstack, study]
pin: true
---

record my todo and technical summary during my study progress.
Mandarin is my MotherLanguage, for easy skimming and scanning, a big part of my summary will be written in Mandarin and it is for my studying and reviewing purpose.

## Today's Todo

- [X]host my blog for daily study summery
- []host my blog for daily study summery
- [X]host my blog for daily study summery

## Knowledge and summary

1. [**Mermaid**](https://github.com/mermaid-js/mermaid) is a great diagrams generation tool. To enable it on your post, add the following to the YAML block:

- Mermaid 用于画思维导图,流程图,值得学习.

```yaml
---
mermaid: true
---
```

3. 解构赋值类似于剥壳

- destructure

```js
//解构赋值可以拿到深入一层的内容.比如说

let OBJ = {

people: { 名字: "小明", age: 25 },

money: { 美金: 100, 日元: 1000 },

};

//如果不用解构赋值,那么

let xiaoming = OBJ.people,

//如果用了解构 with destructure

{people} = OBJ,

//这个people就是OBJ中的那个people.

```

4. type(interface) before use.

- Typescript TS 在 component 中，想要使用一个变量，需要先在 IProps 中定义好。然后将 IProps 包裹在`React.FC<IProps>`之中。如下：

```js
const List: React.FC<IProps> = ({ people, test }) => {
  console.log(test);
};
```

5. by bundle lock --add-platform x86_64-linux add a new platform to gemfile. to pass the workflow error.
