import { Button } from '@kool-kool/kool-ui'
import React, { useState } from 'react'
const BtnApp: React.FC = () => {
  const [shape, setShape] = useState<'round' | 'circle' | 'default'>('round')
  return (
    <div>
      <Button
        onClick={() => {
          setShape('round')
        }}
      >
        {' '}
        round{' '}
      </Button>
      <Button
        onClick={() => {
          setShape('circle')
        }}
      >
        {' '}
        circle{' '}
      </Button>
      <Button
        onClick={() => {
          setShape('default')
        }}
      >
        {' '}
        default{' '}
      </Button>
      <div style={{ display: 'flex' }}>
        <Button type="primary" shape={shape}>
          Primary
        </Button>
        <Button type="dashed" shape={shape}>
          Dashed
        </Button>
        <Button shape={shape}>Default</Button>
        <Button type="text" shape={shape}>
          Text
        </Button>
        <Button type="link" shape={shape}>
          Link
        </Button>
        <Button type="ghost" shape={shape}>
          Ghost
        </Button>
      </div>
    </div>
  )
}

export default BtnApp
