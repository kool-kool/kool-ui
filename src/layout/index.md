---
description: kool_UI layout
keywords: [Kool_UI, flex, '布局', 'layout']
toc: content
group:
  title: 布局
  order: 2
---

# Layout 布局

基础布局框架，于其他组件配套使用，构建页面整体布局

## 组件概述

- `Layout`：基础容器，可嵌套`Header` `Side` `Content` `Footer` 或是 `Layout`，可以放在任何容器中
- `Header`：顶部组件，可嵌套任何元素，只能放在 `Layout` 中
- `Side`：侧边组件，可嵌套任何元素，只能放在 `Layout` 中
- `Content`：内容部分，可嵌套任何元素，只能放在 `Layout` 中
- `Footer`：底部组件，可嵌套任何元素，只能放在 `Layout` 中

_注：基于 flex 实现，请注意[兼容性](http://caniuse.com/#search=flex)问题_

## 代码演示

### 基本用法

<code src="./demo/basic.tsx">典型的页面布局类型</code>

[//]: # '### 侧边布局'
[//]: #
[//]: # '<code src="./demo/side.tsx">侧边两列布局</code>'

## API

### Layout

布局容器
|参数|类型|描述|默认值|
|:---:|:----:|:----:|:----:|
|className|string|容器的 className|-|
|hasSide|boolean|表示子元素里有 Side 组件|false|
|style|CSSProperties|指定行内样式|-|

### Layout.Side

侧边栏
| 参数 | 类型 | 描述 | 默认值 |
|:---------------------:|:-----------------------------------:|:--------------------------------------------------------------------:|:------:|
| className | string | 容器的 className | - |
| style | CSSProperties | 指定行内样式 | - |
| breakpoint | `xs`\|`sm`\|`md`\|`lg`\|`xl`\|`xxl` | 触发响应式布局的断点 | - |
| collapsed | boolean | 当前收起状态 | - |
| collapsedWidth | number | 收缩宽度，设置为 0 会出现特殊 trigger | 72 |
| collapsible | boolean | 是否可收起 | false |
| defaultCollapsed | boolean | 是否默认收起 | false |
| reverseArrow | boolean | 翻转折叠提示箭头的方向，当 Side 在右边时可以使用 | false |
| trigger | ReactNode | 自定义 trigger，设置为 null 时隐藏 trigger | |
| width | number\|string | 宽度 | 200 |
| zeroWidthTriggerStyle | object | 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式 | - |
| onBreakpoint | (broken)=>void | 触发响应式布局断点时的回调 | - |
| onCollapse | (collapsed, type)=>void | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | - |
