import { render } from '@testing-library/react'
import { Slider } from 'kool-ui'
import React from 'react'

test(' Slider exist ', () => {
  const wrapper = render(<Slider />)
  const elelment = wrapper.container.querySelector('.koo-slider')
  expect(elelment).toBeTruthy()
})

test(' Slider disable ', () => {
  const wrapper = render(<Slider disable={true} />)
  const elelment = wrapper.container.querySelector('.koo-slider-disable')
  expect(elelment).toBeTruthy()
})
