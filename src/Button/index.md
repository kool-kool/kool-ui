---
title: Button按钮
nav:
title: 组件
order: 3
---

# Button 按钮

按钮用于开始一个即时操作。

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

## 基本用法示例

```tsx
/**
 * title: 按钮类型
 * description: 按钮有六种类型：primary,Dashed, Default,Text,Link,Ghost
 */

import { Button } from 'kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button>Default Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="ghost">Ghost Button</Button>
    </div>
  )
}

export default BtnApp
```

```tsx
/**
 * title: 禁用类型
 * description: 按钮有六种类型：primary,Dashed, Default,Text,Link,Ghost
 */

import { Button } from 'kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <div style={{ display: 'flex', marginRight: '5px' }}>
      <Button type="primary" disabled>
        Primary Button
      </Button>
      <Button type="dashed" disabled>
        Dashed Button
      </Button>
      <Button disabled>Default Button</Button>
      <Button type="text" disabled>
        Text Button
      </Button>
      <Button type="link" disabled>
        Link Button
      </Button>
      <Button type="ghost" disabled>
        Ghost Button
      </Button>
    </div>
  )
}

export default BtnApp
```

```tsx
/**
 * title: 不同大小
 * description: 按钮有三种大小：large, middle, small
 */

import { Button } from 'kool-ui'
import React, { useState } from 'react'

const BtnApp: React.FC = () => {
  const [size, setsize] = useState('middle')
  return (
    <div>
      <Button
        onClick={() => {
          setsize('large')
        }}
      >
        {' '}
        large{' '}
      </Button>
      <Button
        onClick={() => {
          setsize('middle')
        }}
      >
        {' '}
        middle{' '}
      </Button>
      <Button
        onClick={() => {
          setsize('small')
        }}
      >
        {' '}
        small{' '}
      </Button>
      <div style={{ display: 'flex' }}>
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button size={size}>Default</Button>
        <Button type="text" size={size}>
          Text
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <Button type="ghost" size={size}>
          Ghost
        </Button>
      </div>
    </div>
  )
}

export default BtnApp
```

```tsx
/**
 * title: 不同shape
 * description: 按钮有三种大小：default circle round
 */

import { Button } from 'kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <div style={{ display: 'flex', marginRight: '5px' }}>
      <Button type="primary" shape="round">
        Daaaaaaa
      </Button>
      <Button shape="round">Default Button</Button>
      <Button type="text" shape="round">
        Text Button
      </Button>
      <Button
        shape="round"
        type="link"
        href="https://www.baidu.com"
        target="_blank"
      >
        Link Button
      </Button>
      <Button type="ghost" shape="round">
        Ghost Button
      </Button>
    </div>
  )
}

export default BtnApp
```

```tsx
/**
 * title: 危险按钮
 * description: danger属性
 */

import { Button } from 'kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" danger>
        primary
      </Button>
      <Button type="dashed" danger>
        dashed
      </Button>
      <Button danger>Default Button</Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
      <Button type="ghost" danger>
        Ghost
      </Button>
    </div>
  )
}

export default BtnApp
```
