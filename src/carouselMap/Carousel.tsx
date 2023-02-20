/* eslint-disable react/prop-types */
import classNames from 'classnames'
import omit from 'rc-util/lib/omit'
import React, {
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { getPrefixCls, useInterval } from '../shared'
import Arrow from './Arrow'
import Dots from './Dots'
import { CarouselProps } from './interface'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CarouselComponent(props: CarouselProps, ref: any) {
  const {
    style,
    className,
    children,
    currentIndex,
    animation = 'slide',
    trigger = 'click',
    direction = 'horizontal',
    switchSpeed = '500',
    timingFunc = 'cubic-bezier(0.34, 0.69, 0.1, 1)',
    dotsType = 'dot',
    dotsPosition = 'bottom',
    dotsClassName,
    arrowShow = 'always',
    arrowClassName,
    carousel,
    icons,
    onChange,
    ...rest
  } = props

  // for convenience of change the speed
  let autoPlay = props.autoPlay
  if (autoPlay && props.autoPlaySpeed) {
    autoPlay = {
      interval: props.autoPlaySpeed
    }
  }

  const childrenList = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as ReactElement[]
  const childrenListLength = childrenList.length

  const refDom = useRef<HTMLDivElement | null>(null)
  const refSlickWrapper = useRef(null)
  const refAnimationTimer = useRef<NodeJS.Timeout | null>(null)

  const [index, setIndex] = useState(
    typeof currentIndex === 'number' ? getValidIndex(currentIndex) : 0
  )
  const [previousIndex, setPreviousIndex] = useState<number>(index)
  const [isPause, setIsPause] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slickDirection, setSlickDirection] = useState<
    'position' | 'negative' | null
  >(null)

  const mergeIndex =
    typeof currentIndex === 'number' ? getValidIndex(currentIndex) : index

  const prevIndex = getValidIndex(mergeIndex - 1)
  const nextIndex = getValidIndex(mergeIndex + 1)
  const autoPlayInterval =
    typeof autoPlay === 'object' && autoPlay.interval ? autoPlay.interval : 3000

  useEffect(() => {
    return () => {
      if (refAnimationTimer.current) {
        clearTimeout(refAnimationTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    slideTo({
      targetIndex: mergeIndex
    })
  })

  const resetInterval = useInterval(
    () => {
      slideTo({ targetIndex: nextIndex })
    },
    autoPlay && !isPause && childrenListLength > 1 ? autoPlayInterval : null
  )

  useImperativeHandle(carousel, () => {
    return {
      dom: refDom.current as HTMLElement,
      goto: ({ index, isNegative, isAuto, resetPlayInterval }) => {
        slideTo({
          targetIndex: getValidIndex(index),
          isNegative,
          isAuto,
          resetPlayInterval
        })
      }
    }
  })

  // helper function
  function getValidIndex(index: number): number {
    const indexNumber = +index
    return typeof indexNumber === 'number' && !isNaN(indexNumber)
      ? (indexNumber + childrenListLength) % childrenListLength
      : index
  }

  function slideTo({
    targetIndex,
    isNegative = false,
    isAuto = true,
    resetPlayInterval = false
  }: {
    targetIndex: number
    isNegative?: boolean
    isAuto?: boolean
    resetPlayInterval?: boolean
  }) {
    if (!isAnimating && targetIndex !== mergeIndex) {
      setIsAnimating(true)
      setIndex(targetIndex)
      setPreviousIndex(index)
      setSlickDirection(isNegative ? 'negative' : 'position')
      onChange && onChange(targetIndex, mergeIndex, isAuto)
      if (autoPlay && resetPlayInterval) {
        resetInterval()
      }

      refAnimationTimer.current = setTimeout(() => {
        setIsAnimating(false)
        refAnimationTimer.current = null
      }, switchSpeed as number)
    }
  }

  const prefixClass = getPrefixCls('carousel')

  const classCarousel = classNames(
    prefixClass,
    `${prefixClass}-dots-position-${dotsPosition}`,
    className
  )

  const eventHandlers = Object.assign(
    {},
    autoPlay &&
      (typeof autoPlay !== 'object' || autoPlay.hoverToPause !== false)
      ? {
          onMouseEnter: () => setIsPause(true),
          onMouseLeave: () => setIsPause(false)
        }
      : null
  )

  return (
    <div
      ref={(_ref) => {
        ref = _ref
        refDom.current = ref
      }}
      className={classCarousel}
      style={style}
      {...omit(rest, ['autoPlay', 'autoPlaySpeed'])}
      {...eventHandlers}
    >
      <div
        ref={refSlickWrapper}
        className={classNames(
          `${prefixClass}-${animation}`,
          `${prefixClass}-${direction}`,
          {
            [`${prefixClass}-negative`]: slickDirection === 'negative'
          }
        )}
      >
        {childrenList.map((item, index) => {
          const isCurrent = index === mergeIndex
          const isPrev = index === prevIndex
          const isNext = index === nextIndex
          const shouldRenderChild = isCurrent || isPrev || isNext
          if (!shouldRenderChild) {
            return null
          }
          const {
            style: childStyle,
            className: childClassName,
            onClick: childOnClick
          } = item.props
          return React.cloneElement(item, {
            'aria-hidden': !isCurrent,
            style: Object.assign(
              {
                transitionTimingFunction: timingFunc,
                transitionDuration: `${switchSpeed}ms`,
                animationTimingFunction: timingFunc,
                animationDuration: `${switchSpeed}ms`
              },
              childStyle
            ),
            className: classNames(childClassName, {
              [`${prefixClass}-item-prev`]: isPrev,
              [`${prefixClass}-item-next`]: isNext,
              [`${prefixClass}-item-current`]: isCurrent,
              [`${prefixClass}-item-slide-in`]:
                animation === 'slide' &&
                slickDirection &&
                isAnimating &&
                isCurrent,
              [`${prefixClass}-item-slide-out`]:
                animation === 'slide' &&
                slickDirection &&
                isAnimating &&
                index === previousIndex
            }),
            onClick: (e: any) => {
              childOnClick && childOnClick(e)
              slideTo({
                targetIndex: index,
                isNegative: index === prevIndex,
                isAuto: false
              })
            }
          })
        })}
      </div>
      {dotsType !== 'never' && childrenListLength > 1 && (
        <div
          className={classNames(
            `${prefixClass}-dots-wrapper`,
            `${prefixClass}-dots-wrapper-${dotsPosition}`
          )}
        >
          <Dots
            className={dotsClassName}
            type={dotsType}
            count={childrenListLength}
            activeIndex={mergeIndex}
            position={dotsPosition}
            trigger={trigger}
            onSelectIndex={(index) =>
              slideTo({
                targetIndex: index,
                isNegative: index < mergeIndex,
                isAuto: false
              })
            }
          />
        </div>
      )}
      {arrowShow !== 'never' && childrenListLength > 1 && (
        <Arrow
          className={arrowClassName}
          direction={direction}
          arrowShow={arrowShow}
          icons={icons}
          prev={() => {
            slideTo({
              targetIndex: prevIndex,
              isNegative: true,
              isAuto: false
            })
          }}
          next={() => {
            slideTo({
              targetIndex: nextIndex,
              isAuto: false
            })
          }}
        ></Arrow>
      )}
    </div>
  )
}
const Carousel = React.forwardRef<unknown, CarouselProps>(CarouselComponent)
Carousel.displayName = 'Carousel'
export default Carousel
