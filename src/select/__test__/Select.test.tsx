import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { Option, Select, SelectProps } from '../index'

const testProps: SelectProps = {
  testFlag: true,
  defaultValue: '',
  onSelect: jest.fn()
}

const generateSelect = (props: SelectProps) => (
  <Select {...props}>
    <Option value={'id1'}>React</Option>
    <Option value={'id2'} disabled>
      disabled
    </Option>
    <Option value={'id3'}>active</Option>
  </Select>
)

let wrapper: RenderResult,
  selectElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

describe('test Select component', () => {
  beforeEach(() => {
    wrapper = render(generateSelect(testProps))
    selectElement = wrapper.getByTestId('test-select')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })

  test('should render correct select', () => {
    expect(selectElement).toBeInTheDocument()
    expect(selectElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('koo-option')
    expect(disabledElement).toHaveClass('koo-option is-disabled')
  })
})
