import { render } from '@testing-library/react'
import React from 'react'
import Slider from '../index'

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
