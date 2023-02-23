---
description: kool ui Switch 开关
group: 数据录入
keywords: ['kool ui', 'Switch', '开关']
toc: content
---

# Switch 开关

开关选择器。

## 何时使用

Switch 元件是一个开关的选择器，在我们表示开关状态，或两种状态之间的切换时，很适合使用。和`Checkbox`的区别是，`Checkbox`一般只用来标记状态是否被选取，需要提交之后才会生效，而`Switch`
则会在触发的当下直接触发状态的改变

## 代码演示

<code src="./demo/basic.tsx">基本类型</code>

<code src="./demo/disabled.tsx">禁用类型</code>

<code src="./demo/loading.tsx">加载类型</code>

<code src="./demo/size.tsx">大小类型</code>

<code src="./demo/text.tsx">文字类型</code>

## API

### props

| 参数              | 说明                                | 类型                                     | 默认值  |
| ----------------- | ----------------------------------- | ---------------------------------------- | ------- |
| autoFocus         | 组件自动获取焦点                    | boolean                                  | false   |
| checked           | 指定当前是否选中                    | boolean                                  | false   |
| checkedChildren   | 选中时的内容                        | ReactNode                                | -       |
| className         | Switch 器类名                       | string                                   | -       |
| defaultChecked    | 初始是否选中                        | boolean                                  | false   |
| disabled          | 是否禁用                            | boolean                                  | false   |
| loading           | 加载中的开关                        | boolean                                  | false   |
| size              | 开关大小，可选值：`default` `small` | string                                   | default |
| unCheckedChildren | 非选中时的内容                      | ReactNode                                | -       |
| onChange          | 变化时的回调函数                    | function(checked: boolean, event: Event) | -       |
| onClick           | 点击时的回调函数                    | function(checked: boolean, event: Event) | -       |
