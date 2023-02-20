import { createContext } from 'react'

import { Size } from '../shared/types/utils'

export type DirectionType = 'horizontal' | 'vertical'
export type SpaceSize = Size | number

export const SpaceContext = createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
})

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

export interface ItemProps {
  className: string
  children: React.ReactNode
  index: number
  direction?: DirectionType
  marginDirection: 'marginLeft' | 'marginRight'
  split?: string | React.ReactNode
  wrap?: boolean
}
