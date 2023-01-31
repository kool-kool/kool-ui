import React from 'react'
import { useUpdate } from '../shared'
import { renderThumbStyle, THUMB_MAP } from './utils'

export interface BarProps {
  ratio: number
  vertical: boolean
  size: number
  move: number
  visibility: boolean
  scrollTo: (to: number, vertical: boolean) => void
}

export const Bar: React.FC<BarProps> = ({
  vertical,
  size,
  move,
  ratio,
  visibility,
  scrollTo
}) => {
  const barRef = React.useRef<HTMLDivElement | null>(null)
  const thumbRef = React.useRef<HTMLDivElement | null>(null)
  const originalOnSelectStart = React.useRef<
    ((this: GlobalEventHandlers, ev: Event) => void) | null
  >(null)
  const moveState = React.useRef<{
    startOffset: number
    startPostion: number
  }>({
    startOffset: 0,
    startPostion: 0
  })
  const cursorDown = React.useRef<boolean>(false)

  const update = useUpdate()

  const bar = React.useMemo(
    () => (vertical ? THUMB_MAP.vertical : THUMB_MAP.horizontal),
    [vertical]
  )

  const handleMousedown: React.MouseEventHandler = (e) => {
    e.nativeEvent.stopImmediatePropagation()

    moveState.current.startOffset =
      thumbRef.current!.getBoundingClientRect()[bar.direction] -
      barRef.current!.getBoundingClientRect()[bar.direction]

    originalOnSelectStart.current = document.onselectstart
    document.onselectstart = () => false
    moveState.current.startPostion = e[bar.screen]
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)

    cursorDown.current = true
  }

  function mouseMove(e: MouseEvent) {
    const barOffset = barRef.current![bar.offset]
    const thumbOffset = thumbRef.current![bar.offset]

    const { startPostion, startOffset } = moveState.current
    const scrollDistance = startOffset + (e[bar.screen] - startPostion)
    const to =
      scrollDistance + thumbOffset > barOffset
        ? barOffset - thumbOffset
        : scrollDistance

    scrollTo(((to / thumbOffset) * barOffset) / ratio, vertical)
  }

  function mouseUp() {
    document.onselectstart = originalOnSelectStart.current
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)

    cursorDown.current = false
    update()
  }

  return (
    <div
      className={`koo-scrollbar-bar ${
        vertical ? 'koo-scrollbar-bar-vertical' : 'koo-scrollbar-bar-horizontal'
      }`}
      ref={barRef}
    >
      <div
        className={`koo-scrollbar-thumb ${
          visibility || cursorDown.current ? 'koo-scroll-bar-visibility' : ''
        }`}
        ref={thumbRef}
        onMouseDown={handleMousedown}
        style={renderThumbStyle({
          move,
          size,
          bar: {
            axis: vertical ? 'Y' : 'X',
            size: vertical ? 'height' : 'width'
          }
        })}
      />
    </div>
  )
}
