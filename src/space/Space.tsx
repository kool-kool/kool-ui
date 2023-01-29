import classNames from 'classnames'
import toArray from 'rc-util/lib/Children/toArray'
import React, { createContext, useMemo } from 'react'
import { getPrefixCls, useFlexGapSupport } from '../shared/index'
import { Size } from '../shared/types/utils'

import Item from './Item'

export type SpaceSize = Size | number
export type DirectionType = 'horizontal' | 'vertical'

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixClassName?: string
  className?: string
  style?: React.CSSProperties
  size?: SpaceSize | [SpaceSize, SpaceSize]
  direction?: DirectionType
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
  split?: React.ReactNode
  rtl?: boolean
}

export const SpaceContext = createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
})

const spaceSize = {
  small: 8,
  normal: 16,
  large: 24
}
const getSizeNumber = (size: SpaceSize) => {
  return typeof size === 'string' ? spaceSize[size] : size || 0
}

const Space: React.FC<SpaceProps> = (props) => {
  const {
    size = 'small',
    align,
    className,
    children,
    direction = 'horizontal',
    prefixClassName: customPrefixClass,
    style,
    wrap = false,
    split,
    rtl = true,
    ...other
  } = props

  const supportFlexGap = useFlexGapSupport()

  const [horizontalSize, verticalSize] = useMemo(
    () =>
      (
        (Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]
      ).map((item) => getSizeNumber(item)),
    [size]
  )

  const childNodes = toArray(children, { keepEmpty: true })

  const mergeAlign =
    align === undefined && direction === 'horizontal' ? 'center' : align
  const prefixClass = getPrefixCls('space', customPrefixClass)
  const classes = classNames(
    prefixClass,
    `${prefixClass}-${direction}`,
    className,
    { [`${prefixClass}-align-${mergeAlign}`]: mergeAlign }
  )
  const itemClassName = `${prefixClass}-item`
  const marginDirection = rtl ? 'marginLeft' : 'marginRight'

  let latestIndex = 0
  const nodes = childNodes.map((child, index) => {
    if (child !== null && child !== undefined) {
      latestIndex = index
    }

    const key = (child && child.key) || `${itemClassName}-${index}`

    return (
      <Item
        className={itemClassName}
        key={key}
        direction={direction}
        index={index}
        marginDirection={marginDirection}
        split={split}
        wrap={wrap}
      >
        {child}
      </Item>
    )
  })

  const spaceContext = useMemo(
    () => ({
      horizontalSize,
      verticalSize,
      latestIndex,
      supportFlexGap
    }),
    [horizontalSize, verticalSize, latestIndex, supportFlexGap]
  )

  if (childNodes.length === 0) {
    return null
  }

  const gapStyle: React.CSSProperties = {}

  if (wrap) {
    gapStyle.flexWrap = 'wrap'

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize
    }
  }
  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize
    gapStyle.rowGap = verticalSize
  }

  return (
    <div className={classes} style={{ ...gapStyle, ...style }} {...other}>
      <SpaceContext.Provider value={spaceContext}>
        {nodes}
      </SpaceContext.Provider>
    </div>
  )
}

export default Space
