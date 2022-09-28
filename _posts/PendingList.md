---
title: Questions and Pending questions
author: Trent1900
date: 2022-09-24 03:32:00 +1000
categories: [Blogging, pending list]
tags: [fullstack, study]
---

#### enum list 如何 map,拿到 key-value pair

#### resume storage location in MongoDB??

- 👇🏻 是 add pdf resume 的网络请求:

```console
http://localhost:3000/api/s3/presignedurl?name=Australia%20VV%20-%20Important%20Information%20-%2013-Mar-13.pdf&type=application/pdf&resType=resume&category=resources
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

#### profile :nationality exist in MongoDB?<span style='color:green; background:pink'>没有<span>

#### 24/09/2022 任务: 1. 做出静态组件.

### ts 可以连续解构赋值吗?

# 考一个 SA AWS 的证书

###  TODO想做个翻页效果给我的P1feature
