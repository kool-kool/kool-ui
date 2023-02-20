import { Button, HomeIcon, Space } from '@kool-kool/kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
  return (
    <Space size="large">
      <Button type="primary" icon={<HomeIcon />}>
        Primary Button
      </Button>
      <Button type="dashed">Dashed Button</Button>
      <Button>Default Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="ghost">Ghost Button</Button>
    </Space>
  )
}

export default BtnApp
