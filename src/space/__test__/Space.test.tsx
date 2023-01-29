import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Space from '../Space'
import './style.scss'

describe('test space', () => {
  it('render basic space', () => {
    const wrapper = render(
      <Space size="large" wrap>
        a<span>hello</span>
        <span>world</span>
        <span>!</span>
      </Space>
    )

    const element = wrapper.getByText('a')
    expect(element).toBeInTheDocument()
    expect(element.parentElement).toHaveClass('koo-space koo-space-horizontal')
  })

  it('render empty space', () => {
    const wrapper = render(
      <Space
        size={['large', 'normal']}
        direction="vertical"
        data-testid="rowAndCol"
      >
        <Space size="normal" align="start">
          <div className="block" style={{ height: '30px' }}></div>
          <div className="block" style={{ height: '40px' }}></div>
          <div className="block" style={{ height: '50px' }}></div>
          <div className="block" style={{ height: '40px' }}></div>
          <div className="block" style={{ height: '30px' }}></div>
        </Space>
        <Space size="normal" align="start">
          <div className="block" style={{ height: '30px' }}></div>
          <div className="block" style={{ height: '40px' }}></div>
          <div className="block" style={{ height: '50px' }}></div>
          <div className="block" style={{ height: '40px' }}></div>
          <div className="block" style={{ height: '30px' }}></div>
        </Space>
      </Space>
    )
    const element = wrapper.getByTestId('rowAndCol')
    expect(element).toHaveClass('koo-space koo-space-vertical')
  })
})
