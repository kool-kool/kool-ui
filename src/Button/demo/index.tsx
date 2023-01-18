import React from 'react'
import Button from '../index'
import '../style/index'

const ButtonDeom = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" loading>
        测试按钮
      </Button>
      <Button type="dashed">幽灵按钮</Button>
      <Button>default</Button>
      <Button type="text">文字</Button>
      <Button type="link">link</Button>
      <Button type="ghost" disabled>
        ghost
      </Button>
    </div>
  )
}

export default ButtonDeom
