import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { Breadcrumbs } from '../index'

test('happy path', () => {
  const wrapper = render(<Breadcrumbs />)
  const elelment = wrapper.getAllByText('1')
  expect(elelment).toBeTruthy()
})
