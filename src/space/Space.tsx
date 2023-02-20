import classNames from 'classnames'
import toArray from 'rc-util/lib/Children/toArray'
import React, { useMemo } from 'react'
import { getPrefixCls, useFlexGapSupport } from '../shared/index'

import Item from './Item'

import { SpaceContext, SpaceProps, SpaceSize } from './shared'

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
