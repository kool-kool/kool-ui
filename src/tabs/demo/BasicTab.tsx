import { Tabs } from '@kool-kool/kool-ui'
import React from 'react'
const BtnApp: React.FC = () => {
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
    <Tabs
      className="other"
      item={item}
      closeable={true}
      type="line"
      onSelect={(selectedIndex) => {
        console.log(selectedIndex)
      }}
    />
  )
}

export default BtnApp
