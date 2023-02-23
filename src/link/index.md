---
group:
  title: 导航
  order: 3
toc: content
---

# 链接 Link

文字超链接

## 代码演示

<code src="./demo/basicUsage.tsx">基础用法</code>

<code src="./demo/Underline.tsx">下划线</code>

## API

### Props

| 参数      | 类型              | 默认值 | 描述                 |
| :-------- | :---------------- | :----- | :------------------- |
| underline | 'hover' \| 'none' | 'none' | 控制何时应该有下划线 |
| disabled  | boolean           | false  | 是否禁用             |

### css

| 全局类名             | 描述                                               |
| :------------------- | :------------------------------------------------- |
| .koo-link-root       | 应用在根元素上的类名                               |
| .koo-link-disabled   | 禁用链接的类名                                     |
| .koo-underline-none  | 如果 `underline="none"`，此类名将会应用到根元素上  |
| .koo-underline-hover | 如果 `underline="hover"`，此类名将会应用到根元素上 |
