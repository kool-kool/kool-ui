import { Button } from '@kool-kool/kool-ui'
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
