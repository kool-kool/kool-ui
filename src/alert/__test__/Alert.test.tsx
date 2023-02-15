import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Alert from '../Alert'

describe('test the component of alert', () => {
  it('basic alert', () => {
    const wrapper = render(<Alert content="hello" data-testid="alert" />)
    const element = wrapper.getByTestId('alert')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element.classList.toString()).toContain('koo-alert koo-alert-info')
    const contents = element.children[0]
    expect(contents.classList.toString()).toContain('koo-alert-content-wrapper')
    const content = contents.children[0]
    expect(content.classList.toString()).toContain('koo-alert-content')
  })

  it('icon alert', () => {
    const wrapper = render(
      <Alert showIcon content="hello" data-testid="alert" />
    )
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()

    expect(element.children[0].classList.toString()).toContain(
      'koo-alert-icon-wrapper'
    )
    expect(element.children[1].classList.toString()).toContain(
      'koo-alert-content-wrapper'
    )
  })

  it('icon and title alert', () => {
    const wrapper = render(
      <Alert showIcon title="hello" content="hello" data-testid="alert" />
    )
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()
    expect(element.classList.toString()).toContain('koo-alert-with-title')

    expect(element.children[0].classList.toString()).toContain(
      'koo-alert-icon-wrapper'
    )
    expect(element.children[1].classList.toString()).toContain(
      'koo-alert-content-wrapper'
    )

    const contents = element.children[1]

    expect(contents.children[0].classList.toString()).toContain(
      'koo-alert-title'
    )

    expect(contents.children[1].classList.toString()).toContain(
      'koo-alert-content'
    )
  })

  it('basic alert and close', () => {
    const wrapper = render(
      <Alert content="hello" closeable showIcon icon={<h1>close</h1>} />
    )
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element.classList.toString()).toContain('koo-alert koo-alert-info')
  })

  it('basic warning alert', () => {
    const wrapper = render(<Alert type="warning" showIcon content="hello" />)
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element.classList.toString()).toContain(
      'koo-alert koo-alert-warning'
    )
  })

  it('basic success alert', () => {
    const wrapper = render(<Alert type="success" showIcon content="hello" />)
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element.classList.toString()).toContain(
      'koo-alert koo-alert-success'
    )
  })

  it('basic error alert', () => {
    const wrapper = render(<Alert type="error" showIcon content="hello" />)
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element.classList.toString()).toContain('koo-alert koo-alert-error')
  })

  it('close alert', () => {
    const wrapper = render(<Alert showIcon content="hello" closeable />)
    const element = wrapper.getByRole('alert')
    expect(element).toBeInTheDocument()
    const button = element.children[2]
    fireEvent.click(button)
    expect(element.classList.toString()).toContain('kooAlertMotion-exit')
  })
})
