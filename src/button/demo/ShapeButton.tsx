import { Button, Space } from '@kool-kool/kool-ui'
import React, { useState } from 'react'
const BtnApp: React.FC = () => {
  const [shape, setShape] = useState<'round' | 'circle' | 'default'>('round')
  return (
    <div>
      <Space size="large">
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
      </Space>
      <Space size="normal">
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
      </Space>
    </div>
  )
}

export default BtnApp
