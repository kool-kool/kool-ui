import { Button, Space } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Button type="link">Space</Button>
      <Button type="primary">Button</Button>
      <Button>Default</Button>
    </Space>
  )
}

export default App
