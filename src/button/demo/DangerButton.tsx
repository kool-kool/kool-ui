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
