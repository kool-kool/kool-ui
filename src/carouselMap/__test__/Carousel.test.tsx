import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Carousel from '../Carousel'

const imgList = [
  'https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/00.jpg',
  'https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/01.jpg',
  'https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/02.jpg',
  'https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/03.jpg',
  'https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/04.jpg',
  'https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/05.jpg'
]

describe('test Carousel', () => {
  it('test default carousel', () => {
    const wrapper = render(
      <Carousel data-testid="carousel" style={{ width: 600, height: 240 }}>
        {imgList.map((item, index) => (
          <div key={index}>
            <img src={item} style={{ width: '100%' }} />
          </div>
        ))}
      </Carousel>
    )

    const component = wrapper.getByTestId('carousel')
    expect(component).toBeInTheDocument()
    expect(component.tagName).toEqual('DIV')
    expect(component.classList.contains('koo-carousel')).toEqual(true)
    expect(
      component.classList.contains('koo-carousel-dots-position-bottom')
    ).toEqual(true)
    expect(component.style.width).toEqual('600px')
    expect(component.childNodes[0]).toHaveClass(
      'koo-carousel-slide koo-carousel-horizontal'
    )
    expect(component.childNodes[1]).toHaveClass(
      'koo-carousel-dots-wrapper koo-carousel-dots-wrapper-bottom'
    )
    expect(component.childNodes[2]).toHaveClass('koo-carousel-arrow')
  })

  it('test vertical carousel', () => {
    const wrapper = render(
      <Carousel
        data-testid="carousel"
        direction="vertical"
        dotsPosition="right"
        style={{ width: 600, height: 240 }}
      >
        {imgList.map((item, index) => (
          <div key={index}>
            <img src={item} style={{ width: '100%' }} />
          </div>
        ))}
      </Carousel>
    )

    const component = wrapper.getByTestId('carousel')
    expect(component).toBeInTheDocument()
    expect(component.tagName).toEqual('DIV')
    expect(component.classList.contains('koo-carousel')).toEqual(true)
    expect(
      component.classList.contains('koo-carousel-dots-position-right')
    ).toEqual(true)
    expect(component.style.width).toEqual('600px')
    expect(component.childNodes[0]).toHaveClass(
      'koo-carousel-slide koo-carousel-vertical'
    )
    expect(component.childNodes[1]).toHaveClass(
      'koo-carousel-dots-wrapper koo-carousel-dots-wrapper-right'
    )
    expect(component.childNodes[2]).toHaveClass('koo-carousel-arrow')
  })

  it('test click arrow event', () => {
    const wrapper = render(
      <Carousel data-testid="carousel" style={{ width: 600, height: 240 }}>
        {imgList.map((item, index) => (
          <div key={index}>
            <img src={item} style={{ width: '100%' }} />
          </div>
        ))}
      </Carousel>
    )

    const component = wrapper.getByTestId('carousel')

    expect(component).toBeInTheDocument()
    expect(component.tagName).toEqual('DIV')
    const slides = component.childNodes[0]
    const arrowLeft = component.childNodes[2].childNodes[0]
    const arrowRight = component.childNodes[2].childNodes[1]

    expect(slides.childNodes[0]).toHaveClass('koo-carousel-item-current')
    fireEvent.click(arrowLeft)
    expect(slides.childNodes[0]).toHaveClass('koo-carousel-item-next')
    fireEvent.click(arrowRight)
    fireEvent.click(arrowRight)
    expect(slides.childNodes[0]).toHaveClass('koo-carousel-item-next')
  })

  it('test click dots event', () => {
    const wrapper = render(
      <Carousel data-testid="carousel" style={{ width: 600, height: 240 }}>
        {imgList.map((item, index) => (
          <div key={index}>
            <img src={item} style={{ width: '100%' }} />
          </div>
        ))}
      </Carousel>
    )

    const component = wrapper.getByTestId('carousel')

    expect(component).toBeInTheDocument()
    expect(component.tagName).toEqual('DIV')
    const slides = component.childNodes[0]
    const dots = component.childNodes[1]
    expect(dots).toBeInTheDocument()

    expect(slides.childNodes[0]).toHaveClass('koo-carousel-item-current')
    fireEvent.click(dots)
    expect(slides.childNodes[0]).toHaveClass('koo-carousel-item-current')
    expect(slides.childNodes[1]).toHaveClass('koo-carousel-item-next')
    expect(slides.childNodes[2]).toHaveClass('koo-carousel-item-prev')
  })
})
