import { render } from '@testing-library/react'
import React from 'react'
import Progress from '../index'

test(' progress exist ', () => {
  const wrapper = render(<Progress percent={10} />)
  const elelment = wrapper.container.querySelector('.koo-progress-container')
  expect(elelment).toBeTruthy()
})
