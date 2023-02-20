import classNames from 'classnames'
import { number } from 'prop-types'
import React, { useEffect, useState } from 'react'
import UseSlider from './hooks/useSlider'

export interface SliderProps {
  lineWidth?: number | string
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

const NormalSlider = (Props: SliderProps) => {
  const {
    lineWidth,
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
  const {
    HandleMouse,
    handleMouseMove,
    containerRef,
    left,
    setLeft,
    select
    // down,
    // setDown
  } = UseSlider(typeof disable === 'boolean' ? disable : false, step, max - min)
  const second = UseSlider(typeof disable === 'boolean' ? disable : false)
  function dealRange(e: React.MouseEvent<HTMLDivElement>) {
    const X = e.clientX
    if (containerRef.current) {
      const CurrentWidth = containerRef.current.getBoundingClientRect().width
      const CurrentLeft = containerRef.current.getBoundingClientRect().left
      const tempX = Math.floor(((X - CurrentLeft) / CurrentWidth) * 100)
      if (Math.abs(tempX - second.left) > Math.abs(tempX - left)) {
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

  const classes = classNames('koo-slider', classname, {
    'koo-slider-disable': disable
  })

  useEffect(() => {
    if (step) {
      let temp = max - min
      let steps = step
      while (steps < 1) {
        steps = steps * 10
        temp = temp * 10
      }
      if (temp % steps !== 0) {
        throw new Error('step 不能被整除')
      }
    }
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
      setLeft(((tempMax - min) / (max - min)) * 100)
      second.setLeft(((tempMin - min) / (max - min)) * 100)
    } else if (range) {
      setLeft(55)
      second.setLeft(45)
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
      setLeft(((tempMax - min) / (max - min)) * 100)
      second.setLeft(((tempMin - min) / (max - min)) * 100)
    }
    if (typeof defaultValue === 'number') {
      if (defaultValue > max || defaultValue < min) {
        throw new Error('defaultValue 超出界限')
      } else {
        setLeft(dealTextRollback(defaultValue))
      }
    }
    if (typeof value === 'number') {
      if (value > max || value < min) {
        throw new Error('value 超出界限')
      } else {
        setLeft(dealTextRollback(value))
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
      setLeft(((tempMax - min) / (max - min)) * 100)
      second.setLeft(((tempMin - min) / (max - min)) * 100)
    }
    if (typeof value === 'number') {
      if (value > max || value < min) {
        throw new Error('value 超出界限')
      } else {
        setLeft(dealTextRollback(value))
      }
    }
  }, [value])

  useEffect(() => {
    onChange?.(left)
  }, [left])

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
          style={{
            left: `calc(${left}% - 10px)`
          }}
        >
          {dealText(left)}
        </span>
      ) : null}
      {showTextRange ? (
        <span
          className="koo-slider-text"
          style={{ left: `calc(${second.left}% - 10px)` }}
        >
          {dealText(second.left)}
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
export default NormalSlider
