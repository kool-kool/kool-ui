---
description: kool_UI Alert
keywords: [Kool_UI, 'alert', 'tips']
toc: content
group:
  title: 数据展示
  order: 5
title: Carousel 轮播图
---

# Carousel 轮播图

一组轮播的区域。

## 基本概述

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

### 基本

最简单的用法

<code src="./demo/basic.tsx"></code>

### 位置

位置有四个方向

<code src="./demo/direction.tsx"></code>

### 定时切换

定时切换到下一张
<code src="./demo/interval.tsx"></code>

### 淡入淡出

切换时动画效果为淡入淡出
<code src="./demo/fade.tsx"></code>

## API

|      参数      | 类型                                                       |                                 描述                                  | 默认值                           |
| :------------: | ---------------------------------------------------------- | :-------------------------------------------------------------------: | -------------------------------- |
|     style      | CSSProperties                                              |                               行内样式                                | -                                |
|   className    | string                                                     |                               classname                               | -                                |
|    autoPlay    | boolean\|{ interval?: number; hoverToPause?: boolean }     | 是否自动播放，或者传入对象`{interval:时间间隔,hoverToPause:悬浮暂停}` | -                                |
| autoPlaySpeed  | number                                                     |                             自动切换速率                              | 3000                             |
|  switchSpeed   | number                                                     |                               切换速率                                | 500                              |
|   animation    | `slide`                                                    |                                `fade`                                 | 切换效果                         |
|    trigger     | `hover`                                                    |                                `click`                                | 切换触发方式                     |
|   direction    | `horizontal`                                               |                              `vertical`                               | 切换方向                         |
|   arrowShow    | `always`                                                   |                                `hover`                                | `never`                          |
| arrowClassName | string\|String[]                                           |                              按钮的类名                               | -                                |
|     icons      | {prev?: ReactNode, next?:ReactNode}                        |                              自定义按钮                               | -                                |
|    dotsType    | `line`                                                     |                                 `dot`                                 | `never`                          |
|  dotsPosition  | `bottom`                                                   |                                 `top`                                 | `left`                           |
| dotsClassName  | string \| string[]                                         |                              控制器类名                               | -                                |
|   timingFunc   | string                                                     |                             过渡时间曲线                              | cubic-bezier(0.34, 0.69, 0.1, 1) |
|    onChange    | (index: number, prevIndex: number, isAuto?: boolean)=>void |                           切换时的回调函数                            | -                                |
