import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Switch from '../index'
import './style.scss'

test('switch disabled', () => {
  const { container } = render(<Switch disabled />)
  // const testNode = wrapper.container
  // console.log('container', container)
  // expect(testNode).toBeInTheDocument()
  // expect(testNode.disabled).toBeTruthy()
})
