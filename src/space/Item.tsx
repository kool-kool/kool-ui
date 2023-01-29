import React, { useContext } from 'react'

import { DirectionType, SpaceContext } from './Space'

export interface ItemProps {
  className: string
  children: React.ReactNode
  index: number
  direction?: DirectionType
  marginDirection: 'marginLeft' | 'marginRight'
  split?: string | React.ReactNode
  wrap?: boolean
}

const Item = (props: ItemProps) => {
  const { horizontalSize, verticalSize, latestIndex, supportFlexGap } =
    useContext(SpaceContext)
  const {
    className,
    direction,
    index,
    marginDirection,
    children,
    split,
    wrap
  } = props
  let style: React.CSSProperties = {}

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = { marginBottom: horizontalSize / (split ? 2 : 1) }
      }
    } else {
      style = {
        ...(index < latestIndex && {
          [marginDirection]: horizontalSize / (split ? 2 : 1)
        }),
        ...(wrap && { paddingBottom: verticalSize })
      }
    }
  }

  if (children === null || children === undefined) {
    return null
  }

  return (
    <>
      <div className={className} style={style}>
        {children}
      </div>
      {index < latestIndex && split && (
        <span className={`${className}-split`} style={style}>
          {split}
        </span>
      )}
    </>
  )
}

export default Item
