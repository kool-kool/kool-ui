import { Button, Tabs } from '@kool-kool/kool-ui'
import React, { useState } from 'react'
const BtnApp: React.FC = () => {
  const [size, setSize] = useState<'small' | 'large' | 'middle'>('middle')
  const item = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`
    }
  ]
  return (
    <div>
      <Button
        onClick={() => {
          setSize('small')
        }}
      >
        small
      </Button>
      <Button
        onClick={() => {
          setSize('middle')
        }}
      >
        middle
      </Button>
      <Button
        onClick={() => {
          setSize('large')
        }}
      >
        large
      </Button>
      <Tabs
        className="other"
        item={item}
        closeable={true}
        size={size}
        type="line"
      />
      <Tabs
        className="other"
        item={item}
        closeable={true}
        size={size}
        type="card"
      />
    </div>
  )
}

export default BtnApp
