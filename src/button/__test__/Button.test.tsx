import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Button from '../Button'

test(' button exist ', () => {
  const wrapper = render(<Button> 123</Button>)
  const elelment = wrapper.getAllByText('123')
  expect(elelment).toBeTruthy()
})

test('onclick', () => {
  const jestFn = jest.fn()
  const wrapper = render(<Button onClick={jestFn}>123</Button>)
  const element = wrapper.getByText('123')
  fireEvent.click(element)
  expect(jestFn).toHaveBeenCalled()
})

test('disable onclick function no click', () => {
  const jestFn = jest.fn()
  const wrapper = render(
    <Button onClick={jestFn} loading>
      123
    </Button>
  )
  const element = wrapper.getByText('123')
  fireEvent.click(element)
  expect(jestFn).not.toHaveBeenCalled()
})

test('when button on loading onclick function no click', () => {
  const jestFn = jest.fn()
  const wrapper = render(
    <Button type="primary" onClick={jestFn} loading>
      123
    </Button>
  )
  const element = wrapper.getByText('123')
  fireEvent.click(element)
  expect(jestFn).not.toHaveBeenCalled()
})
