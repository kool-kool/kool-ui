---
description: kool ui Tabs 标签页
keywords: ['kool ui', 'Tabs', '标签页']
toc: content
---

# Tabs 按钮

标签页用于切换

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Kool UI 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。
- 幽灵按钮：一般用于有色背景，常用在首页/产品页等展示场景。
  以及五种状态属性与上面配合使用。

* 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
* 禁用：行动点不可用的时候，一般需要文案解释。
* 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

<code src="./demo/BasicTab.tsx">基本类型</code>
<code src="./demo/DisableTab.tsx">禁用类型</code>
<code src="./demo/CardTab.tsx">卡片类型</code>
<code src="./demo/CenteredTabs.tsx">居中</code>
<code src="./demo/SizeTab.tsx">大小</code>
<code src="./demo/PositionTab.tsx">位置</code>
