import React from 'react'
import { Bar } from './Bar'
import { GAP, NAVITE_BAR_SIZE } from './utils'

export type ScrollbarProps = React.PropsWithChildren<{
  /**
   * @description 视图元素的元素标签
   * @default     div
   */
  component?: React.ElementType
  /**
   * @description 滚动条高度
   */
  height?: number | string
  /**
   * @description 滚动条最大高度
   */
  maxHeight?: number | string
  /**
   * @description 滚动条的最小尺寸
   * @default     20
   */
  minSize?: number
  /**
   * @description 滚动条总是显示
   */
  always?: boolean
  /**
   * @description react scroll 事件
   */
  scroll?: React.UIEventHandler
}>

const Scrollbar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ScrollbarProps
> = (
  {
    children,
    component = 'div',
    height,
    maxHeight,
    minSize = 20,
    always = false,
    scroll
  },
  ref
) => {
  const [sizeWidth, setSizeWidth] = React.useState(0)
  const [sizeHeight, setSizeHeight] = React.useState(0)
  const [moveX, setMoveX] = React.useState(0)
  const [moveY, setMoveY] = React.useState(0)
  const [ratioX, setRatioX] = React.useState(1)
  const [ratioY, setRatioY] = React.useState(1)
  const [visibility, setVisibility] = React.useState(always)

  const wrapRef = React.useRef<HTMLDivElement | null>(null)

  // 滚动内容容器
  const ScrollbarView = (
    props: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>
  ) => React.createElement(component, props, children)

  React.useEffect(() => {
    updateSize()
  }, [wrapRef.current?.scrollHeight, wrapRef.current?.scrollWidth])

  /**
   * @description 用于初始化forwardRef与useRef
   */
  const bindRef = (el: HTMLDivElement | null) => {
    wrapRef.current = el
    if (!ref) {
      return
    }
    if (typeof ref === 'function') {
      ref(el)
    } else {
      ref.current = el
    }
  }

  // 更新滚动条大小
  function updateSize() {
    if (!wrapRef.current) {
      return
    }
    const wrapElement = wrapRef.current!

    const offsetHeight = wrapElement.offsetHeight - NAVITE_BAR_SIZE
    const offsetWidth = wrapElement.offsetWidth - NAVITE_BAR_SIZE

    const originalHeight = offsetHeight ** 2 / wrapElement.scrollHeight
    const originalWidth = offsetWidth ** 2 / wrapElement.scrollWidth
    const height = Math.max(originalHeight, minSize)
    const width = Math.max(originalWidth, minSize)

    setRatioY(
      originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height))
    )

    setRatioX(
      originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width))
    )

    setSizeHeight(height < offsetHeight - GAP ? height : 0)
    setSizeWidth(width < offsetWidth - GAP ? width : 0)
  }

  const handleScroll: React.UIEventHandler = (e) => {
    const wrapElement = wrapRef.current!
    setMoveY(
      ((wrapElement.scrollTop * 100) /
        (wrapElement.offsetHeight - NAVITE_BAR_SIZE)) *
        ratioY
    )
    setMoveX(
      ((wrapElement.scrollLeft * 100) /
        (wrapElement.offsetWidth - NAVITE_BAR_SIZE)) *
        ratioX
    )
    scroll?.(e)
  }

  const scrollTo = React.useCallback(
    (to: number, vertical: boolean) => {
      if (vertical) {
        wrapRef.current!.scrollTop = to
      } else {
        wrapRef.current!.scrollLeft = to
      }
    },
    [wrapRef.current]
  )

  const handleMouseOver = () => {
    if (!visibility) {
      setVisibility(true)
    }
  }
  const handleMouseLeave = () => {
    if (!always) {
      setVisibility(false)
    }
  }

  return (
    <div className="koo-scrollbar-root">
      <div
        className="koo-scrollbar-wrap koo-scrollbar-hide-nativebar"
        ref={bindRef}
        onScroll={handleScroll}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ height, maxHeight }}
      >
        <ScrollbarView className="koo-scrollbar-view" />
        <Bar
          vertical
          size={sizeHeight}
          move={moveY}
          ratio={ratioY}
          visibility={visibility}
          scrollTo={scrollTo}
        />
        <Bar
          vertical={false}
          size={sizeWidth}
          move={moveX}
          ratio={ratioX}
          visibility={visibility}
          scrollTo={scrollTo}
        />
      </div>
    </div>
  )
}

export default React.forwardRef(Scrollbar)
