import { CSSProperties } from 'react'
import { BarProps } from './Bar'

interface ThumbMapValue {
  size: 'height' | 'width'
  axis: 'Y' | 'X'
  direction: 'top' | 'left'
  client: 'clientY' | 'clientX'
  offset: 'offsetHeight' | 'offsetWidth'
  scroll: 'scrollTop' | 'scrollLeft'
  scrollSize: 'scrollHeight' | 'scrollWidth'
  screen: 'screenY' | 'screenX'
}

export const NAVITE_BAR_SIZE = 20
export const GAP = 4

export const THUMB_MAP: Record<string, ThumbMapValue> = {
  vertical: {
    size: 'height',
    axis: 'Y',
    direction: 'top',
    client: 'clientY',
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    screen: 'screenY'
  },
  horizontal: {
    size: 'width',
    axis: 'X',
    direction: 'left',
    client: 'clientX',
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    screen: 'screenX'
  }
}

export const renderThumbStyle = ({
  move,
  size,
  bar
}: Pick<BarProps, 'move' | 'size'> & {
  bar: Pick<ThumbMapValue, 'axis' | 'size'>
}): CSSProperties => {
  return {
    [bar.size]: size,
    transform: `translate${bar.axis}(${move}%)`
  }
}
