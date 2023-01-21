import { Button } from 'kool-ui'
import React, { useState } from 'react'

const BtnApp: React.FC = () => {
  const [size, setsize] = useState<'middle' | 'large' | 'small'>('middle')
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
