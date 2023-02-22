---
description: kool_UI Space
group: 布局
keywords: [Kool_UI, flex, '布局', '间距', 'space']
toc: content
---

# Space 间距

设置组件之间的间距

## 使用场景

避免组件紧贴在一起，拉开间距

- 行内元素水平间距
- 水平对齐方式

## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

### 垂直间距

<code src="./demo/vertical.tsx"></code>

### 间距大小

### 对齐

<code src="./demo/align.tsx"></code>

### 自定义尺寸

## API

### Space

|   参数    |                 类型                 |                       描述                        |    默认值    |
| :-------: | :----------------------------------: | :-----------------------------------------------: | :----------: |
|   align   | `start`\|`end`\|`center`\|`baseline` |                     对齐方式                      |      -       |
| direction |       `vertical`\|`horizontal`       |                     间距方向                      | `horizontal` |
|   size    |             Size\|Size[]             |                     间距大小                      |    small     |
|   split   |              ReactNode               |                    设置分隔符                     |      -       |
|   wrap    |               boolean                | 是否自动换行，仅当 direction 为`horizontal`时有效 |    false     |
