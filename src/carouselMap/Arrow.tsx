/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'
import React from 'react'

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon
} from '../icon'

import { getPrefixCls } from '../shared'
import { CarouselProps } from './interface'

export interface CarouselArrowProps
  extends Pick<CarouselProps, 'direction' | 'arrowShow' | 'icons'> {
  className?: string | string[]
  prev?: (e: any) => void
  next?: (e: any) => void
}

function ArrowComponent(props: CarouselArrowProps, ref: any) {
  const {
    className,
    direction = 'horizontal',
    arrowShow = 'always',
    prev,
    next,
    icons
  } = props

  const prefixClass = getPrefixCls('carousel')
  const arrowClass = classNames(
    `${prefixClass}-arrow`,
    {
      [`${prefixClass}-arrow-hover`]: arrowShow === 'hover'
    },
    className
  )

  const iconPrev =
    icons && Object.prototype.hasOwnProperty.call(icons, 'prev') ? (
      icons.prev
    ) : direction === 'horizontal' ? (
      <ArrowLeftIcon />
    ) : (
      <ArrowUpIcon />
    )
  const iconNext =
    icons && Object.prototype.hasOwnProperty.call(icons, 'next') ? (
      icons.next
    ) : direction === 'horizontal' ? (
      <ArrowRightIcon />
    ) : (
      <ArrowDownIcon />
    )

  return (
    <div ref={ref} className={arrowClass}>
      <div
        className={`${prefixClass}-arrow-${
          direction === 'vertical' ? 'top' : 'left'
        }`}
        onClick={prev}
        role="button"
        tabIndex={0}
      >
        {iconPrev}
      </div>
      <div
        className={`${prefixClass}-arrow-${
          direction === 'vertical' ? 'bottom' : 'right'
        }`}
        onClick={next}
        role="button"
        tabIndex={0}
      >
        {iconNext}
      </div>
    </div>
  )
}

const Arrow = React.forwardRef<unknown, CarouselArrowProps>(ArrowComponent)

export default Arrow
