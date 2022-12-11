---
title: Notions, ideas and pending
author: Trent1900
date: 2022-09-24 03:32:00 +1000
categories: [Blogging, pending list]
tags: [notion, pending]
pin: true
published: false
---

> record flash of thoughts during project that might worth of spending some time on, but don't wanted to be distracted and lose focus.<!-- prettier-ignore -->
{:.prompt-info}

#### enum list 如何 map,拿到 key-value pair

#### resume storage location in MongoDB??

- 👇🏻 是 add pdf resume 的网络请求:

```console
http://localhost:3000/api/s3/presignedurl?name=(....)/pdf&resType=resume&category=resources
看到s3 => AWS s3.
```

- 👇🏻 是 delete request

```js
exports.deleteResume = function(req, res, next) {
	const resourceId = req.params.id;
	Resource.model.findById(resourceId).exec(function(err, item) {
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		if (item.key) req.s3Key = item.key;
		item.remove(function(err) {
			if (err) return res.apiError('database error', err);
			return next();
		});
	});
    通过这个代码可以知道,pdf文档存放在AWS S3上面.可以检查一下post/put.
```

#### ~~profile :nationality exist in MongoDB?<span style='color:green; background:pink'>老板说不用做了<span>~~

- [x] 24/09/2022 任务: 1. 做出静态组件.

### ts 可以连续解构赋值吗?

- [ ] 考一个 SA AWS certificate
- [x] TODO 想做个翻页效果给我的 P1feature
- [x] study how to change favicon(tried 20 mins failed on 2/Oct/2022)

### 创建一个常量用来放 resume 相关的.

### 添加搜索记录,点击搜索记录,可以重新搜索

- [x] 添加 3 天预测.
- [ ] 增加常量,比如预报的天数
- [ ] 优化 hourly forecast 的设计(拖拽)
- [ ] check box 做成 toggle
- [ ] 设置 ci/cd,让我的网页只做本地部署.(不重要)
- [x] error handling
- [x] 日期格式在手机端报错.需要检查.

### JobPin

- [x] 用 mui 作静态
- [x] 在 test branch 上写代码,如果需要,复制到 21 branch 上面.
- [x] 系统学习一下 typescript 的代码
- [x] 为什么 button 的周围会有一圈自己的 position 包围着,right:不起作用.

```tsx
const ButtonWrapper = styled(Button)`
  align-items: flex-end;
  position: absolute;
  left: 100%;
`;
```

### 
