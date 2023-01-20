import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Link, underlineClassName } from '../index'

const classNames = {
  ...underlineClassName,
  root: 'koo-link-root',
  disabled: 'koo-link-disabled'
}

test('basic usage', () => {
  render(
    <>
      <Link href="#">Default</Link>
      <Link href="#" disabled>
        Disabled
      </Link>
    </>
  )
  const DefaultLink = screen.getByText('Default')
  const DisabledLink = screen.getByText('Disabled')
  expect(DefaultLink).toBeInTheDocument()
  expect(DisabledLink).toBeInTheDocument()
  expect(DefaultLink.className).toContain(classNames.root)
  expect(DefaultLink.className).toContain(classNames.none)
  expect(DisabledLink.className).toContain(classNames.root)
  expect(DisabledLink.className).toContain(classNames.none)
  expect(DisabledLink.className).toContain(classNames.disabled)
})

test('underline', () => {
  render(
    <>
      <Link href="#" underline="none">
        none
      </Link>
      <Link href="#" underline="hover">
        hover
      </Link>
    </>
  )

  const NoneUnderlineLink = screen.getByText('none')
  const HoverUnderlineLink = screen.getByText('hover')
  expect(NoneUnderlineLink).toBeInTheDocument()
  expect(HoverUnderlineLink).toBeInTheDocument()
  expect(NoneUnderlineLink.className).toContain(classNames.none)
  expect(HoverUnderlineLink.className).toContain(classNames.hover)
})
