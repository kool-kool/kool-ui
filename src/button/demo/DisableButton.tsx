import { Button, Space } from '@kool-kool/kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <Space size="large">
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
    </Space>
  )
}
export default BtnApp
