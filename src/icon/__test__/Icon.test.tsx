import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { HomeIcon } from '../index'

const colorArr = ['primary', 'success', 'warning', 'danger', 'info']
const sizeArr = ['small', 'normal', 'large']

test('icon color', () => {
  const { container } = render(
    <div>
      <HomeIcon color="primary" />
      <HomeIcon color="success" />
      <HomeIcon color="warning" />
      <HomeIcon color="danger" />
      <HomeIcon color="info" />
    </div>
  )
  const svgELements = container.querySelectorAll('svg')
  expect(svgELements.length).toBe(5)
  for (let i = 0; i < svgELements.length; i++) {
    expect(svgELements[i].classList.toString()).toContain('koo-icon-root')
    expect(svgELements[i].classList.toString()).toContain('koo-icon-normal')
    expect(svgELements[i].classList.toString()).toContain(
      `koo-${colorArr[i]}-color`
    )
  }
})

test('icon size', () => {
  const { container } = render(
    <div>
      <HomeIcon size="small" />
      <HomeIcon size="normal" />
      <HomeIcon size="large" />
    </div>
  )
  const svgELements = container.querySelectorAll('svg')
  expect(svgELements.length).toBe(3)
  for (let i = 0; i < svgELements.length; i++) {
    expect(svgELements[i].classList.toString()).toContain('koo-icon-root')
    expect(svgELements[i].classList.toString()).toContain('koo-info-color')
    expect(svgELements[i].classList.toString()).toContain(
      `koo-icon-${sizeArr[i]}`
    )
  }
})
