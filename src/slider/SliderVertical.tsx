import classNames from 'classnames'
import { number } from 'prop-types'
import React, { useEffect, useState } from 'react'
import UseSlider from './hooks/useSlider'

export interface SliderVerticalProps {
  lineHeight?: number | string
  min?: number
  max?: number
  range?: boolean
  defaultValue?: number | [number, number]
  disable?: boolean
  classname?: string
  onChange?: (value: number) => void
  value?: number | [number, number]
  step?: number
  formatter?: ((value: string) => string) | null
}

const SliderVertical = (Props: SliderVerticalProps) => {
  const {
    lineHeight,
    min = 0,
    max = 100,
    defaultValue,
    disable,
    classname,
    range,
    onChange,
    value,
    step,
    formatter
  } = Props
  const [showText, setShowText] = useState<boolean>(false)
  const [showTextRange, setShowTextRange] = useState<boolean>(false)
  const { HandleMouse, handleMouseMove, containerRef, select, down, setDown } =
    UseSlider(typeof disable === 'boolean' ? disable : false, step, max - min)
  const second = UseSlider(typeof disable === 'boolean' ? disable : false)
  function dealRange(e: React.MouseEvent<HTMLDivElement | HTMLSpanElement>) {
    const Y = e.clientY
    if (containerRef.current) {
      const CurrentHeight = containerRef.current.getBoundingClientRect().height
      const CurrentTop = containerRef.current.getBoundingClientRect().top
      const tempY = Math.floor(((Y - CurrentTop) / CurrentHeight) * 100)
      if (Math.abs(tempY - second.down) > Math.abs(tempY - down)) {
        HandleMouse(e)
      } else {
        second.HandleMouse(e)
      }
    }
  }

  function dealText(temp: number) {
    if (formatter) {
      return formatter(String(Math.floor((temp * (max - min)) / 100 + min)))
    }
    if (formatter === null) {
      return ''
    }
    if (step && step < 1) {
      return (temp * (max - min)) / 100 + min
    }
    return Math.floor((temp * (max - min)) / 100 + min)
  }

  function dealTextRollback(temp: number) {
    return Math.ceil(((temp - min) / (max - min)) * 100)
  }

  const classes = classNames('koo-slider-vertical', classname, {
    'koo-slider-disable': disable
  })

  useEffect(() => {
    if (range && defaultValue instanceof number) {
      throw new Error('range must be Array')
    } else if (!range && defaultValue instanceof Array) {
      throw new Error('it must be number')
    }
    if (range && value instanceof number) {
      throw new Error('value must be Array')
    } else if (!range && value instanceof Array) {
      throw new Error('value must be number')
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
      setDown(((tempMax - min) / (max - min)) * 100)
      second.setDown(((tempMin - min) / (max - min)) * 100)
    } else if (range) {
      setDown(55)
      second.setDown(45)
    }

    if (range && value instanceof Array) {
      if (
        value[0] > max ||
        value[0] < min ||
        value[1] > max ||
        value[1] < min
      ) {
        throw new Error('defaultValue超出界限')
      }
      const tempMax = Math.max(value[0], value[1])
      const tempMin = Math.min(value[0], value[1])
      setDown(((tempMax - min) / (max - min)) * 100)
      second.setDown(((tempMin - min) / (max - min)) * 100)
    }
    if (typeof defaultValue === 'number') {
      if (defaultValue > max || defaultValue < min) {
        throw new Error('defaultValue 超出界限')
      } else {
        setDown(dealTextRollback(defaultValue))
      }
    }
    if (typeof value === 'number') {
      if (value > max || value < min) {
        throw new Error('value 超出界限')
      } else {
        setDown(dealTextRollback(value))
      }
    }
  }, [])

  useEffect(() => {
    if (range && value instanceof Array) {
      if (
        value[0] > max ||
        value[0] < min ||
        value[1] > max ||
        value[1] < min
      ) {
        throw new Error('defaultValue超出界限')
      }
      const tempMax = Math.max(value[0], value[1])
      const tempMin = Math.min(value[0], value[1])
      setDown(((tempMax - min) / (max - min)) * 100)
      second.setDown(((tempMin - min) / (max - min)) * 100)
    }
    if (typeof value === 'number') {
      if (value > max || value < min) {
        throw new Error('value 超出界限')
      } else {
        setDown(dealTextRollback(value))
      }
    }
  }, [value])

  useEffect(() => {
    onChange?.(down)
  }, [down])

  return (
    <div
      className={classes}
      ref={containerRef}
      style={{
        height: lineHeight || '100%'
      }}
    >
      <div
        ref={second.containerRef}
        style={{
          width: '10px',
          position: 'absolute',
          display: 'inline-block',
          height: lineHeight || '100%'
        }}
      >
        {showText ? (
          <span
            className="koo-slider-text-vertical"
            style={{
              top: `calc(${down}% - 10px)`
            }}
          >
            {dealText(down)}
          </span>
        ) : null}
        {showTextRange ? (
          <span
            className="koo-slider-text-vertical"
            style={{ top: `calc(${second.down}% - 10px)` }}
          >
            {dealText(second.down)}
          </span>
        ) : null}

        {range ? (
          <div
            className="koo-slider-short-top"
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
            style={{ height: `${second.down}%` }}
          />
        ) : null}

        <div
          className="koo-slider-long-vertical"
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
          style={{ height: `${down - second.down}%`, top: `${second.down}%` }}
        />
      </div>
      <div
        className="koo-slider-short-bottom"
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
        style={{ top: `${down}%`, height: `${100 - down}%` }}
      />

      {range ? (
        <span
          className="koo-slider-block-vertical"
          onMouseOver={() => {
            setShowTextRange(true)
          }}
          onMouseOut={() => {
            setShowTextRange(false)
          }}
          onMouseMove={(e) => {
            if (range && select && second.select) {
              dealRange(e)
            } else if (select) {
              handleMouseMove(e)
            }
          }}
          style={{ top: `calc(${second.down}% - 10px)` }}
        />
      ) : null}

      <span
        className="koo-slider-block-vertical"
        onMouseOver={() => {
          setShowText(true)
        }}
        onMouseOut={() => {
          setShowText(false)
        }}
        onMouseMove={(e) => {
          if (range && select && second.select) {
            dealRange(e)
          } else if (select) {
            handleMouseMove(e)
          }
        }}
        style={{ top: `calc(${down}% - 10px)` }}
      />
    </div>
  )
}
export default SliderVertical
