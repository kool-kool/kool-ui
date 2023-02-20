import { render } from '@testing-library/react'
import { Progress } from 'kool-ui'
import React from 'react'

test(' progress exist ', () => {
  const wrapper = render(<Progress percent={10} />)
  const elelment = wrapper.container.querySelector('.koo-progress-container')
  expect(elelment).toBeTruthy()
})
