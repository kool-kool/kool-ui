import { render } from '@testing-library/react'
import React from 'react'
import Tabs from '../Tabs'

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

test(' Tabs exist ', () => {
  const wrapper = render(<Tabs item={item} closeable={true} />)
  const elelment = wrapper.getAllByText('Content of Tab Pane 1')
  expect(elelment).toBeTruthy()
})
