---
title: Job pin meeting minutes
author: Trent1900
date: 2022-10-10 09:30:00 +1000
categories: [Blogging]
tags: [meeting minute]
---

### 调试 input 框尝希望去掉 Legend

- [x] ~~`InputLabelProps={{ shrink: false }}`~~
- [x] ~~`sx={{'& legend': { display: 'none' },'& fieldset': { top: 0 },}}`~~
- [x] 尝试 className in styled component, with warning.

  > [mui 宝藏库 ](https://v4.mui.com/components/text-fields/#components)<!-- prettier-ignore -->
{:.prompt-tip}

### P3 小故事

- other components with strange margin and padding but I cannot modify on my code. (avatar cropping and display section)

  > solution: with first-child, set the size of first-child, with flex box's justify-contents and align-items that css on upper level but works on child<!-- prettier-ignore -->
{:.prompt-tip}

- [x] 构建 redux for resume
- [ ] storeHase/ useDispatch
- [x] console.log(companyForm, 看看里面有什么,还想看看大写的 Company Form b4, after 有啥变化.)
- [ ] 给 button 加 loading 和 disable

```
company redux 中有 个logo={
    public_id(pin):"pyzkiyjovolgcrkn9pry"
version(pin):some digits一些shu
signature(pin):"3f44c9009c5ce2b52031228e3ababbfe328588d4"
width(pin):273
height(pin):273
format(pin):"png"
resource_type(pin):"image"
}

```

- [ ] 需要把 current user 的 state 转换成 current resume 的 state.
- [ ] Title 有现成的可以用.(import FormItemTitle from './FormItem/Title';)
- [ ] 待确认,avatar 不是 form value 的一部分,所以不要放到 formValue 中去.
- [ ] 在 redux 中,有个 action 叫做 fetchComapayById, 当中的 promise 调用了 service 中的一个 get API,拿到了一个 response.

```tsx
export const getCompanyById = async (id: string) =>
  request({
    method: "GET",
    url: `/api/companies/${id}`,
  });
```

```tsx
把avatar 加入到state 中去.
const [formValues, setFormValues] = useState<IResumeDetail>({
		...userData,
		avatar: {} as IImage
	});
```

what I did

- [ ] create createResume builder in slice
- [ ] create personal detail(profile) interface in interfaces/resume.d.ts

### 11/10/2022

- 宽屏的时候 grid 不够灵活
- focus 边框去掉.

### 13/10/2022

- 用自己能解决的方法解决,不要用自己不能把握的方法.
