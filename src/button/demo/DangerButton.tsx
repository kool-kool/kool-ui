import { Button, Space } from '@kool-kool/kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <Space size="large">
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
    </Space>
  )
}

export default BtnApp
