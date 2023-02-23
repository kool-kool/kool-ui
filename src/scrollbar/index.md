---
description: kool ui Scrollbar 滚动条
group: 通用
keywords: ['kool ui', 'Scrollbar', '滚动条']
toc: content
---

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 代码演示

### 基础用法

通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。

<code src="./demo/BasicUsage.tsx"></code>

### 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

<code src="./demo/Horizontal.tsx"></code>

### 最大高度

当元素高度超过最大高度，才会显示滚动条。

<code src="./demo/MaxHeight.tsx"></code>

## API

### props

| 参数      | 类型                 | 默认值 | 描述                      |
| :-------- | :------------------- | :----- | :------------------------ |
| height    | number \| string     |        | 滚动条高度                |
| maxHeight | number \| string     |        | 滚动条最大高度            |
| min-size  | number               | 20     | 滚动条最小尺寸,单位为`px` |
| always    | boolean              | false  | 滚动条是否总是显示        |
| component | React.ElementType    | div    | 包裹元素标签名            |
| scroll    | React.UIEventHandler |        | 包裹容器滚动事件          |

### css

| 全局类名                      | 描述                   |
| :---------------------------- | :--------------------- |
| .koo-scrollbar-root           | 应用在根元素上的类名   |
| .koo-scrollbar-wrap           | 应用在包裹容器上的类名 |
| .koo-scrollbar-hide-nativebar | 隐藏原生滚动条的类名   |
| .koo-scrollbar-bar            | 应用在滚动条轨道类名   |
| .koo-scrollbar-bar-vertical   | 垂直滚动条类名         |
| .koo-scrollbar-bar-horizontal | 水平滚动条类名         |
| .koo-scrollbar-thumb          | 应用在滚动条类名       |
| .koo-scroll-bar-visibility    | 控制滚动条可见类名     |
