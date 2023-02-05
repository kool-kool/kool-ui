import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { Input } from '../index'

describe('test Input component', () => {
  test('default Input', () => {
    const wrapper = render(<Input placeholder="default" />)
    const testNode = wrapper.getByPlaceholderText('default') as HTMLInputElement
    expect(testNode).toBeInTheDocument()
  })
  test('disabled Input', () => {
    const wrapper = render(<Input placeholder="disabled" disabled={true} />)
    const testNode = wrapper.getByPlaceholderText(
      'disabled'
    ) as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    expect(testNode.disabled).toBeTruthy()
  })

  test('prefix Input', () => {
    const wrapper = render(<Input placeholder="prefix" prefix="123" />)
    const testNode = wrapper.getByPlaceholderText('prefix') as HTMLInputElement
    const testContainer = wrapper.container.querySelector('.koo-input-wrapper')
    expect(testNode).toBeInTheDocument()
  })
})
