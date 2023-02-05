import classNames from 'classnames'
import React from 'react'

import { getPrefixCls } from '../shared'
import { CarouselProps } from './interface'

export interface DotsProps {
  className?: string | string[]
  count: number
  activeIndex?: number
  type?: CarouselProps['dotsType']
  position?: CarouselProps['dotsPosition']
  trigger?: CarouselProps['trigger']
  onSelectIndex?: (e: number) => void
}

const Dots = (props: DotsProps, ref: any) => {
  const {
    className,
    type = 'line',
    count = 2,
    activeIndex = 0,
    position = 'bottom',
    trigger = 'click',
    onSelectIndex
  } = props

  const prefixClass = getPrefixCls('carousel-dots')
  const dotsContent: React.ReactNode[] = []

  for (let i = 0; i < count; i++) {
    dotsContent.push(
      <span
        key={i}
        data-index={i}
        className={classNames(`${prefixClass}-item`, {
          [`${prefixClass}-item-active`]: i === activeIndex
        })}
      ></span>
    )
  }

  const wrapperProps = {
    ref,
    className: classNames(
      prefixClass,
      `${prefixClass}-${type}`,
      `${prefixClass}-${position}`,
      className
    ),
    [trigger === 'click' ? 'onClick' : 'onMouseEnter']: (event: any) => {
      event.preventDefault()
      const dataIndex: string = event.target.getAttribute('data-index')
      dataIndex && +dataIndex !== activeIndex && onSelectIndex!(+dataIndex)
    }
  }

  return <div {...wrapperProps}>{dotsContent}</div>
}

const DotsComponent = React.forwardRef<HTMLDivElement, DotsProps>(Dots)

export default DotsComponent
