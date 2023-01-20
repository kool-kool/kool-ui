import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Breadcrumbs } from '../index'

const BreadcrumbItems = (
  <>
    <a>Home</a>
    <a>Components</a>
    <a>Breadcrumbs</a>
    <a>Usage</a>
  </>
)

const classNames = {
  root: 'koo-breadcrumb-root',
  li: 'koo-breadcrumb-item',
  separator: 'koo-breadcrumb-separator'
}

test('basic usage', () => {
  const { container } = render(<Breadcrumbs>{BreadcrumbItems}</Breadcrumbs>)
  const olElement = container.querySelector('ol')
  expect(olElement).toBeInTheDocument()
  expect(olElement!.className).toContain(classNames.root)
  expect(olElement!.childElementCount).toBe(7)
  const children = olElement!.children
  expect(children[0].className).toContain(classNames.li)
  expect(children[1].className).toContain(classNames.separator)
})

test('add custom classname into the root element', () => {
  const { container } = render(
    <Breadcrumbs className="custom">{BreadcrumbItems}</Breadcrumbs>
  )
  const olElement = container.querySelector('ol')
  expect(olElement).toBeInTheDocument()
  expect(olElement!.className).toContain(classNames.root)
  expect(olElement!.className).toContain('custom')
})

test('if breadcrumb items are more than maxItem props, breadcrum should shrink', () => {
  const { container } = render(
    <Breadcrumbs maxItem={3}>{BreadcrumbItems}</Breadcrumbs>
  )
  const olElement = container.querySelector('ol')
  expect(olElement).toBeInTheDocument()
  const children = olElement!.children
  expect(children.length).toBe(5)
  expect(children[2].className).not.toContain(classNames.li)
  const buttonElement = container.querySelector('button')
  expect(buttonElement).toBeInTheDocument()
  fireEvent.click(buttonElement!)
  expect(container.querySelectorAll('li').length).toBe(7)
})
