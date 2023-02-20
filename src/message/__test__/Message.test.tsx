import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { Message } from '../index'

test('success type has class name success', () => {
  const container = render(
    <Message type={'success'} content={'新增成功'} data-testid="containerid" />
  )
  const element = container.getByTestId('containerid')
  expect(element.childNodes[0]).toHaveClass('success')
  expect(element.childNodes[1]).toHaveTextContent('新增成功')
})

test('info type has class name success', () => {
  const container = render(
    <Message type={'info'} content={'信息'} data-testid="containerid" />
  )
  const element = container.getByTestId('containerid')
  expect(element.childNodes[0]).toHaveClass('info')
  expect(element.childNodes[1]).toHaveTextContent('信息')
})

test('warn type has class name success', () => {
  const container = render(
    <Message type={'warn'} content={'警告'} data-testid="containerid" />
  )
  const element = container.getByTestId('containerid')
  expect(element.childNodes[0]).toHaveClass('warn')
  expect(element.childNodes[1]).toHaveTextContent('警告')
})

test('error type has class name success', () => {
  const container = render(
    <Message type={'error'} content={'报错'} data-testid="containerid" />
  )
  const element = container.getByTestId('containerid')
  expect(element.childNodes[0]).toHaveClass('error')
  expect(element.childNodes[1]).toHaveTextContent('报错')
})

test('its info type when it not pass type porps', () => {
  const container = render(
    <Message content={'info'} data-testid="containerid" />
  )
  const element = container.getByTestId('containerid')
  expect(element.childNodes[0]).toHaveClass('info')
  expect(element.childNodes[1]).toHaveTextContent('info')
})
