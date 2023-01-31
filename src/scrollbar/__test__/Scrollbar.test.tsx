import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Scrollbar } from '../index'

test('className', () => {
  const { container } = render(<Scrollbar></Scrollbar>)
  const rootElement = container.querySelector('.koo-scrollbar-root')
  expect(rootElement).toBeInTheDocument()
  const wrapElement = rootElement!.children[0]
  expect(wrapElement).toBeInTheDocument()
  expect(wrapElement.children.length).toBe(3)
  expect(wrapElement.className).toContain('koo-scrollbar-wrap')
  expect(wrapElement.className).toContain('koo-scrollbar-hide-nativebar')
  expect(wrapElement.children[0].className).toContain('koo-scrollbar-view')
  expect(wrapElement.children[1].className).toContain('koo-scrollbar-bar')
  expect(wrapElement.children[1].className).toContain(
    'koo-scrollbar-bar-vertical'
  )
  expect(wrapElement.children[2].className).toContain('koo-scrollbar-bar')
  expect(wrapElement.children[2].className).toContain(
    'koo-scrollbar-bar-horizontal'
  )
})

test('correct rendering', () => {
  const { container } = render(
    <Scrollbar component="ul">
      {[...Array(5)].map((_, i) => (
        <li key={i}>Some content</li>
      ))}
    </Scrollbar>
  )
  const viewElement = container.querySelector('ul')
  expect(viewElement).toBeInTheDocument()
  expect(viewElement?.className).toContain('koo-scrollbar-view')
  expect(viewElement?.querySelectorAll('li').length).toBe(5)
})

test('render with always', () => {
  const { container } = render(<Scrollbar always></Scrollbar>)
  expect(
    container.querySelector('.koo-scroll-bar-visibility')
  ).toBeInTheDocument()
})

test('render with ref', () => {
  const viewRef = React.createRef<HTMLDivElement>()
  const { container } = render(<Scrollbar ref={viewRef} />)
  const viewElement = container.querySelector('.koo-scrollbar-wrap')
  expect(viewElement).toBeInTheDocument()
  expect(viewRef.current).toEqual(viewElement)
})

test('scroll event', () => {
  // const handleScroll: React.UIEventHandler = () => {}
  const handleScroll = jest.fn()
  const { container } = render(<Scrollbar scroll={handleScroll} />)
  const viewElement = container.querySelector('.koo-scrollbar-wrap')
  expect(viewElement).toBeInTheDocument()
  fireEvent.scroll(viewElement!)
  expect(handleScroll).toHaveBeenCalledTimes(1)
})
