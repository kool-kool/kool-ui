import classNames from 'classnames'
import UseSlider from 'kool-ui/slider/hooks/useSlider'
import { number } from 'prop-types'
import React, { useEffect, useState } from 'react'
import './style/index.scss'

export interface SliderProps {
  lineWidth?: number | string
  min?: number
  max?: number
  range?: boolean
  defaultValue?: number | [number, number]
  disable?: boolean
  classname?: string
}

const Slider = (Props: SliderProps) => {
  const {
    lineWidth,
    min = 0,
    max = 100,
    defaultValue,
    disable,
    classname,
    range
  } = Props
  const [showText, setShowText] = useState<boolean>(false)
  const [showTextRange, setShowTextRange] = useState<boolean>(false)
  const {
    HandleMouse,
    handleMouseMove,
    containerRef,
    left,
    setLeft,
    select
    // down,
    // setDown
  } = UseSlider(typeof disable === 'boolean' ? disable : false)
  const second = UseSlider(typeof disable === 'boolean' ? disable : false)
  function dealRange(e: React.MouseEvent<HTMLDivElement>) {
    const X = e.clientX
    // const Y = e.clientY
    if (containerRef.current) {
      const CurrentWidth = containerRef.current.getBoundingClientRect().width
      // const CurrentHeight = containerRef.current.getBoundingClientRect().height
      const CurrentLeft = containerRef.current.getBoundingClientRect().left
      // const CurrentTop = containerRef.current.getBoundingClientRect().top
      const tempX = Math.floor(((X - CurrentLeft) / CurrentWidth) * 100)
      if (Math.abs(tempX - second.left) > Math.abs(tempX - left)) {
        HandleMouse(e)
      } else {
        second.HandleMouse(e)
      }
      // const tempY = Math.floor(((Y - CurrentTop) / CurrentHeight) * 100)
    }
  }

  const classes = classNames('koo-slider', classname, {
    'koo-slider-disable': disable
  })

  useEffect(() => {
    if (range && defaultValue instanceof number) {
      throw new Error('range must be Array')
    } else if (!range && defaultValue instanceof Array) {
      throw new Error('it must be number')
    }

    if (range && defaultValue instanceof Array) {
      if (
        defaultValue[0] > max ||
        defaultValue[0] < min ||
        defaultValue[1] > max ||
        defaultValue[1] < min
      ) {
        throw new Error('defaultValue超出界限')
      }
      const tempMax = Math.max(defaultValue[0], defaultValue[1])
      const tempMin = Math.min(defaultValue[0], defaultValue[1])
      setLeft(((tempMax - min) / (max - min)) * 100)
      second.setLeft(((tempMin - min) / (max - min)) * 100)
    } else if (range) {
      setLeft(55)
      second.setLeft(45)
    }
    if (typeof defaultValue === 'number') {
      if (defaultValue > max || defaultValue < min) {
        throw new Error('defaultValue 超出界限')
      } else {
        setLeft(Math.floor(((defaultValue - min) / (max - min)) * 100))
      }
    }
  }, [])

  return (
    <div
      className={classes}
      ref={containerRef}
      style={{
        width: lineWidth || '100%'
      }}
    >
      {showText ? (
        <span
          className="koo-slider-text"
          style={{ left: `calc(${left}% - 10px)` }}
        >
          {Math.floor((left * (max - min)) / 100 + min)}
        </span>
      ) : null}
      {showTextRange ? (
        <span
          className="koo-slider-text"
          style={{ left: `calc(${second.left}% - 10px)` }}
        >
          {Math.floor((second.left * (max - min)) / 100 + min)}
        </span>
      ) : null}
      <div ref={second.containerRef}>
        {range ? (
          <div
            className="koo-slider-short-left"
            onMouseUp={(e) => {
              second.HandleMouse(e)
            }}
            onMouseDown={(e) => {
              second.HandleMouse(e)
            }}
            onMouseMove={(e) => {
              if (second.select) {
                second.handleMouseMove(e)
              }
            }}
            style={{ width: `${second.left}%` }}
          />
        ) : null}

        <div
          className="koo-slider-long"
          onMouseUp={(e) => {
            if (range) {
              dealRange(e)
            } else {
              HandleMouse(e)
            }
          }}
          onMouseDown={(e) => {
            if (range) {
              dealRange(e)
            } else {
              HandleMouse(e)
            }
          }}
          onMouseMove={(e) => {
            if (range && select && second.select) {
              dealRange(e)
            } else if (select) {
              handleMouseMove(e)
            }
          }}
          style={{ width: `${left - second.left}%`, left: `${second.left}%` }}
        />
      </div>
      <div
        className="koo-slider-short-right"
        onMouseUp={(e) => {
          HandleMouse(e)
        }}
        onMouseDown={(e) => {
          HandleMouse(e)
        }}
        onMouseMove={(e) => {
          if (select) {
            handleMouseMove(e)
          }
        }}
        style={{ left: `${left}%`, width: `${100 - left}%` }}
      />

      {range ? (
        <span
          className="koo-slider-block"
          onMouseOver={() => {
            setShowTextRange(true)
          }}
          onMouseOut={() => {
            setShowTextRange(false)
          }}
          style={{ left: `calc(${second.left}% - 10px)` }}
        />
      ) : null}

      <span
        className="koo-slider-block"
        onMouseOver={() => {
          setShowText(true)
        }}
        onMouseOut={() => {
          setShowText(false)
        }}
        style={{ left: `calc(${left}% - 10px)` }}
      />
    </div>
  )
}
export default Slider
