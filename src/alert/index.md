---
description: kool_UI Alert
keywords: [Kool_UI, 'alert', 'tips']
toc: content
group:
  title: 反馈
  order: 6
title: Alert 警告提示
---

# Alert 警告提示

警告提示，展现需要关注的信息。

## 基本概述

- 当某个页面需要向用户显示警告的信息时。
- 非悬浮式的静态呈现，不会自动消失，但用户可以点击关闭

## 代码演示

### 基本

最简单的用法，适用于简短的警告提示。
<code src="./demo/basic.tsx"></code>

### 四种样式

共有四种样式`info`, `success`, `warning`, `error`

<code src="./demo/fourStyle.tsx"></code>

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

<code src="./demo/closeable.tsx"></code>

### 自定义关闭按钮

可以自定义关闭。

<code src="./demo/selfClose.tsx"></code>

### 图标

有趣的图标让信息类型更加醒目。

<code src="./demo/icon.tsx"></code>

## API

|     参数     |                  类型                  |                     描述                     | 默认值 |
| :----------: | :------------------------------------: | :------------------------------------------: | :----: |
|    style     |             CSSPProperties             |                   行内样式                   |   -    |
|  className   |                 string                 |                  classname                   |   -    |
|    action    |               ReactNode                |                 自定义操作项                 |   -    |
|  closeable   |              是否可以关闭              |                   boolean                    |  true  |
|   onClose    |               (e)=>void                |                  关闭的回调                  |   -    |
|     type     | `info` \|`success`\|`warning`\|`error` |                  警告的类型                  | `info` |
|    title     |               ReactNode                |                     标题                     |   -    |
|   content    |               ReactNode                |                     内容                     |   -    |
|     icon     |               ReactNode                | 可以指定自定义图标，`showIcon`为`true`时生效 |   -    |
| closeElement |               ReactNode                |                自定义关闭按钮                |   -    |
|   showIcon   |                boolean                 |                 是否显示图标                 | false  |
|    banner    |                boolean                 |               是否用作顶部公告               |   -    |
