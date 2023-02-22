---
description: kool ui 快速开始
keywords: ['kool ui', 'start', '快速开始']
toc: content
---

# 快速开始

## 安装

```bash
# 选择一个你喜欢的包管理器

# npm
npm install @kool-kool/kool-ui --save

# Yarn
yarn add @kool-kool/kool-ui

# pnpm
pnpm install @kool-kool/kool-ui
```

## 使用

### 1. 引入样式

在`index.js(项目入口)`中：

```js
import '@kool-kool/kool-ui/dist/index.css'
```

### 2. 使用组件

#### Old JSX Transform

```js
import React from 'react'
import { Button } from '@kool-kool/kool-ui'

const App = () => (
  <div>
    <Button type="primary">Primary Button</Button>
  </div>
)
```

#### New JSX Transform

```js
import { Button } from '@kool-kool/kool-ui'

const App = () => (
  <div>
    <Button type="primary">Primary Button</Button>
  </div>
)
```

关于 JSX Transform 的详情请参考 [Introducing the New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
