import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Breadcrumb from '../index'

test('happy path', () => {
  const wrapper = render(<Breadcrumb />)
  const elelment = wrapper.getAllByText('1')
  expect(elelment).toBeTruthy()
})
