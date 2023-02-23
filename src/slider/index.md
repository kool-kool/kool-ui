---
description: kool ui Slider 滑动输入条
group: 数据录入
keywords: ['kool ui', 'Slider', '滑动输入条']
toc: content
---

# slider 滑动输入条

滑动条

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值

## 代码演示

<code src="./demo/BasicSlider.tsx">基本类型</code>
<code src="./demo/SilderRange.tsx">Range 类型</code>
<code src="./demo/BasicSliderVertical.tsx">垂直类型</code>
<code src="./demo/SliderRangeVertical.tsx">垂直 Range 类型</code>
<code src="./demo/InputSlider.tsx">input 类型</code>
<code src="./demo/StepSlider.tsx">step 类型</code>
<code src="./demo/FormatterSlider.tsx">formatter 类型</code>
<code src="./demo/StepVerticalSlider.tsx">step vertical 类型</code>

## API

### props

|     参数     |           类型            |    默认值    |                                                描述                                                |
| :----------: | :-----------------------: | :----------: | :------------------------------------------------------------------------------------------------: |
|   disabled   |          boolean          |    false     |                                              是否禁用                                              |
|     max      |          number           |     100      |                                               最大值                                               |
|     min      |          number           |      0       |                                               最小值                                               |
|    range     |          boolean          |    false     |                                             双滑块模式                                             |
|     step     |          number           |      1       |                         步长，取值必须大于 0，并且可被 (max - min) 整除。                          |
|    value     |  number/[number, number]  |      -       |              设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]              |
|   onChange   |      (value) => void      |      -       |             当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入             |
|   disabled   |          boolean          |    false     |                                    值为 true 时，滑块为禁用状态                                    |
| defaultValue | number / [number, number] | 0 / [55, 45] |              设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]              |
|  formatter   | value => ReactNode/ null  |      -       | Slider 会把当前值传给 formatter，并在 Tooltip 中显示 formatter 的返回值，若为 null，则隐藏 Tooltip |
|  lineWidth   |          number           |      -       |                                                宽度                                                |

### vertical

|    参数    |  类型  | 默认值 | 描述 |
| :--------: | :----: | :----: | :--: |
| lineHeight | number |   -    | 高度 |
