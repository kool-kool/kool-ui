import { Button, Tabs } from '@kool-kool/kool-ui'
import React, { useState } from 'react'
const BtnApp: React.FC = () => {
  const [position, setPosition] = useState<'top' | 'left' | 'right' | 'bottom'>(
    'top'
  )
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
          setPosition('top')
        }}
      >
        top
      </Button>
      <Button
        onClick={() => {
          setPosition('bottom')
        }}
      >
        bottom
      </Button>
      <Button
        onClick={() => {
          setPosition('left')
        }}
      >
        left
      </Button>
      <Button
        onClick={() => {
          setPosition('right')
        }}
      >
        right
      </Button>
      <div style={{ height: '20px' }} />
      <Tabs
        tabPosition={position}
        className="other"
        item={item}
        closeable={true}
        type="line"
      />
    </div>
  )
}

export default BtnApp
