---
description: kool ui progress 进度条
group:
  title: 反馈
keywords: ['kool ui', 'progress', '进度条']
toc: content
---

# progress 进度条

进度条。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

<code src="./demo/BasicProgress.tsx">基本类型</code>
<code src="./demo/SuccessProgress.tsx">基本类型</code>

## API

### props

| 参数    | 类型               | 默认值 | 描述         |
| :------ | :----------------- | :----- | :----------- |
| width   | string             | -      | 可定义的宽度 |
| percent | number             | -      | 目前的进度   |
| status  | 'success'/ 'error' | -      | 显示当前状态 |
