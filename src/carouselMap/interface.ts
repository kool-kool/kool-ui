export type CarouselEffect = 'scroll' | 'fade'
export type DotPosition = 'top' | 'bottom' | 'left' | 'right' | 'outer'

export interface CarouselHandle {
  dom: HTMLElement
  goto: (options: {
    index: number
    isNegative?: boolean
    isAuto?: boolean
    resetPlayInterval?: boolean
  }) => void
}

export interface CarouselProps {
  style?: React.CSSProperties
  className?: string | string[]
  children?: React.ReactNode
  currentIndex?: number
  autoPlay?: boolean | { interval?: number; hoverToPause?: boolean }
  autoPlaySpeed?: number
  switchSpeed?: number
  animation?: 'slide' | 'fade'
  trigger?: 'hover' | 'click'
  direction?: 'horizontal' | 'vertical'

  // for arrow
  arrowShow?: 'always' | 'hover' | 'never'
  arrowClassName?: string | string[]
  icons?: {
    prev?: React.ReactNode
    next?: React.ReactNode
  }

  // for dots
  dotsType?: 'line' | 'dot' | 'never'
  dotsPosition?: 'bottom' | 'top' | 'left' | 'right' | 'outer'
  dotsClassName?: string | string[]

  timingFunc?: string

  onChange?: (index: number, prevIndex: number, isAuto?: boolean) => void

  carousel?: React.MutableRefObject<CarouselHandle>
}
