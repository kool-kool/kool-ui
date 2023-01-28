import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Layout from '../index'

const { Header, Content, Footer, Side } = Layout

describe('test layout', () => {
  it('render common layout', () => {
    const wrapper = render(<Layout>hello</Layout>)
    const element = wrapper.getByText('hello')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('SECTION')
    expect(element).toHaveClass('koo-layout')
  })

  it('render header and footer layout', () => {
    const wrapper = render(
      <Layout>
        <Header>hello-header</Header>
        <Footer>hello-footer</Footer>
      </Layout>
    )

    const elementHeader = wrapper.getByText('hello-header')
    expect(elementHeader).toBeInTheDocument()
    expect(elementHeader.tagName).toEqual('HEADER')
    expect(elementHeader).toHaveClass('koo-layout-header')

    const elementFooter = wrapper.getByText('hello-footer')
    expect(elementFooter).toBeInTheDocument()
    expect(elementFooter.tagName).toEqual('FOOTER')
    expect(elementFooter).toHaveClass('koo-layout-footer')
  })

  it('render content', () => {
    const wrapper = render(
      <Layout>
        <Side>catalog</Side>
        <Layout>
          <Header></Header>
          <Content aria-label="content">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    )

    const element = wrapper.getByLabelText('content')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('MAIN')
    expect(element).toHaveClass('koo-layout-content')
  })

  it('render side', () => {
    const wrapper = render(
      <Layout>
        <Side>catalog</Side>
        <Layout>
          <Header></Header>
        </Layout>
      </Layout>
    )

    const element = wrapper.getByText('catalog').parentElement
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('ASIDE')
    expect(element).toHaveClass('koo-layout-side')
  })
})
