---
description: kool ui Breadcrumb 面包屑
group: 导航
keywords: ['kool ui', 'Breadcrumb', '面包屑']
toc: content
---

# Breadcrumb 面包屑

面包屑由一个链接列表组成，这些链接可帮助用户在网站的层次结构中可视化页面的位置，并能向上返回。

## 代码演示

### 基础使用

<code src="./demo/BasicUsage.tsx"></code>
<code src="./demo/CustomSeparator.tsx">自定义分隔符</code>
<code src="./demo/Collapsed.tsx">子项超出折叠</code>

## API

### props

| 参数      | 类型      | 默认值 | 描述                                                                                             |
| :-------- | :-------- | :----- | :----------------------------------------------------------------------------------------------- |
| separator | ReactNode |        | 自定义分隔符                                                                                     |
| maxItem   | number    | 7      | 指定要显示的面包屑的最大数量。当数量超过最大值时，将只显示第一个项和最后一个项，中间带有省略号。 |

### css

| 全局类名                  | 描述                   |
| :------------------------ | :--------------------- |
| .koo-breadcrumb-root      | 应用在根元素上类名     |
| .koo-breadcrumb-item      | 应用在每一项元素上类名 |
| .koo-breadcrumb-separator | 应用在分割元素上的类名 |
