---
description: kool ui 自定义
keywords: ['kool ui', 'customize', '自定义']
toc: content
---

# 自定义

kool ui 采用 CSS variables 默认提供一套主题, 方便使用者覆盖样式。例如：将主题颜色从蓝色改成紫色或粉色

## 更换主题

### 全局更换

通过`:root`这个伪类匹配文档树的根元素，修改 CSS variables

就像这样:

```css
:root {
  --koo-main-color: #purple;
}
```

### 局部更换

```css
.custom-class {
  --koo-main-color: #purple;
}
```

在组件中应用类名

```js
<Button className="custom-class"></Button>
```

或者为组件单独添加内联样式

```js
<Button className="custom-class"></Button>
```

## 更改组件样式

为组件添加自定义类名, 通过 CSS 选择器权重更改组件样式

例如:

<code src="./demo/CustomIcon.tsx"></code>
