---
title: 20 September 2022
author: Trent1900
date: 2022-09-21 10:32:00 +1000
categories: [Blogging, Summary]
tags: [fullstack, study]
---

record my todo and technical summary during my study progress.
Mandarin is my MotherLanguage, for easy skimming and scanning, a big part of my summary will be written in Mandarin and it is for my studying and reviewing purpose.

### [deploy to github page with Jekyll(with SEO)](#deploy-问题)

<!-- todo:how Jekyll utilize SEO -->

### [MarkDown anchor point #tag jumping within same page](#markdown-实现跳转)

### [枚举类型想要 map](#枚举类型想要-map)

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

let person = OBJ.people,

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

#### Deploy 问题

5. by bundle lock --add-platform x86_64-linux add a new platform to gemfile. to pass the workflow error.
6. still not show pages, just see the index.html file, but not the file in .site. 系统没有从\_site file render 网页.
7. 直接在 git hub 修改,然后手动 run workflow.最后本地删除在 clone

- 删除 baseurl 的/后

```console
Source: /home/runner/work/Trent1900.github.io/Trent1900.github.io
Destination: /home/runner/work/Trent1900.github.io/Trent1900.github.io/_siteTrent1900.github.io
Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.53 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
htmlproofer 3.19.4 | Error:  _site does not exist
```

- up 主没有写 baseurl,我删除试试看.  
  <span style='color:green; background:pink'>it worked.</span> by compare the GH workflow action

```
Run bash tools/deploy.sh
Configuration file: /home/runner/work/Trent1900.github.io/Trent1900.github.io/_config.yml
 Theme Config file: /home/runner/work/Trent1900.github.io/Trent1900.github.io/vendor/bundle/ruby/2.6.0/gems/jekyll-theme-chirpy-5.2.1/_config.yml
            Source: /home/runner/work/Trent1900.github.io/Trent1900.github.io
       Destination: /home/runner/work/Trent1900.github.io/Trent1900.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.533 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
Running ["HtmlCheck", "ImageCheck", "LinkCheck", "ScriptCheck"] on ["_site"] on *.html...
```

### sectional summary (github hosting)

1. 可以知道,deploy 的 config 写在 tools/deploy.sh 中.
2. 了解了一点点 deploy 的流程
   1. action yml 写在.github/workflows 文件夹下.
   2. workflow 报错的话,需要认真读报错的信息,然后找解决方法.
   3. html pages all hosted on`_site` file,如果 MD 无法写的内容,可以手动修改 html.

## markdown 实现跳转

```js
由于MD自动给每一个标题生成了一个id,这里用<h2>举个例子,<h1>~<h6>~<h100>都支持默认生成id
## markdown 实现跳转
系统自动生成的id=markdown-实现跳转, 全部小写,然后用减号-连接.利用这个我们可以写出锚点(#markdown-实现跳转).

`**如果是中文锚点,那会更加简单,不用加连字符.**`
```

### 枚举类型想要 map ???

```js
Object.keys(EProfileEditField) 这可以形成一个arr,arr里的内容是EProfileEditField这个key的value.
想要map的话要如下:
(Object.keys(MyEnum) as Array<keyof typeof MyEnum>).map((key) => {})
Object.keys(MyEnum) 返回一个key 组成的array.
```

### 枚举类型想要 map 的围魏救赵方法

```js
直接把currentUser这个obj传递给initialForm value.
const initialFormValues = (currentUser: IUserBase | Partial<IUserBase>) => ({ ...currentUser });
use state时候,直接赋值.
const [formValues, setFormValues] = useState<IUserBase | Partial<IUserBase>>(
		initialFormValues(currentUser)
	);

```

### 如何隐藏 input=file 的 box.

```js
有些input是file 类型,默认有一个点击上传文件的框,如果不想要这个框,只想要EDIT这个文字链接,可以用label包起来,然后把input的位置放到最右下脚.
https://stackoverflow.com/questions/572768/styling-an-input-type-file-button
css style for 2nd solution.
http://jsfiddle.net/m8x2fobw/
```
