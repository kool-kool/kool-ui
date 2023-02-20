import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Switch from '../Switch'

test('switch disabled', () => {
  const container = render(<Switch disabled data-testid="switchid" />)
  const element = container.getByTestId('switchid')
  expect(element).toBeInTheDocument()
  expect(element).toBeDisabled()
})

test('switch checked', () => {
  const container = render(<Switch checked data-testid="switchid" />)
  const element = container.getByTestId('switchid')
  expect(element).toBeInTheDocument()
  expect(element).toBeChecked()
})

test('loading onclick function no click', () => {
  const jestFn = jest.fn()
  const wrapper = render(
    <Switch onClick={jestFn} loading data-testid="switchid" />
  )
  const element = wrapper.getByTestId('switchid')
  fireEvent.click(element)
  expect(jestFn).not.toHaveBeenCalled()
})

test('disabled onclick function no click', () => {
  const jestFn = jest.fn()
  const wrapper = render(
    <Switch onClick={jestFn} disabled data-testid="switchid" />
  )
  const element = wrapper.getByTestId('switchid')
  fireEvent.click(element)
  expect(jestFn).not.toHaveBeenCalled()
})

test('small size has switch-samll class name', () => {
  const wrapper = render(<Switch size={'small'} data-testid="switchid" />)
  const element = wrapper.getByTestId('switchid')
  expect(element.parentNode).toHaveClass('switch-small')
})
