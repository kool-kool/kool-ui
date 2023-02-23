# kool-ui

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@kool-kool/kool-ui.svg)](https://www.npmjs.com/package/@kool-kool/kool-ui)
[![Build Status](https://github.com/kool-kool/kool-ui/workflows/CI/badge.svg)](https://github.com/kool-kool/kool-ui/actions)

</div>

<p align="center">
  基于「 React 」框架的 UI 组件库
</p>

## 特性

- ✔️ 配置简单，上手容易
- 🤟 良好的开发体验
- ✂️ 完善的代码提示
- 🖍️ 使用 TypeScript 开发，拥有完整的类型提示
- 📃 清晰明了的文档
- 🚩 单元测试
- 🛠 更多特性开发中

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

```jsx
import React from 'react'
import { Button } from '@kool-kool/kool-ui'

const App = () => (
  <div>
    <Button type="primary">Primary Button</Button>
  </div>
)
```

其他组件的使用请查看[文档站](https://kool-kool.github.io/kool-ui)
