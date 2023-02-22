---
description: kool ui Message
group:
  title: 反馈
keywords: ['kool ui', 'Message']
toc: content
---

# Message 全局提示

`Message` 可以提供使用者操作的反馈信息。包含一般资讯、操作成功、操作失敗、警告信息等。 预设为在顶部置中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

### 基本类型

<code src="./demo/MessageDemo.tsx">基本类型</code>

## API

### props

| 参数     | 说明             | 类型                            | 默认值 |
| -------- | ---------------- | ------------------------------- | ------ |
| type     | 提示信息种类     | `success` `info` `warn` `error` | `info` |
| duration | 提示信息展示时间 | `number`                        | 3000   |
| 内容     | 选中时的内容     | `string` `element`              | -      |
