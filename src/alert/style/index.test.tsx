import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'React'
import Alert from '../index'

test('renders App component', () => {
  const wrapper = render(<Alert kind="warning">123</Alert>)
  const elelment = wrapper.getAllByText('123')
  expect(elelment).toBeTruthy()
})
