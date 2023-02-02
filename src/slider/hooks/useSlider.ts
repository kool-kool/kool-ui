import React, { useEffect, useRef, useState } from 'react'

const useSlider = (disbale: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [left, setLeft] = useState(0)
  const [down, setDown] = useState(0)
  const [select, setSelect] = useState(false)

  function dealBlock(X: number, Y: number) {
    if (containerRef.current && !disbale) {
      const CurrentWidth = containerRef.current.getBoundingClientRect().width
      const CurrentHeight = containerRef.current.getBoundingClientRect().height
      const CurrentLeft = containerRef.current.getBoundingClientRect().left
      const CurrentTop = containerRef.current.getBoundingClientRect().top
      if (X <= CurrentWidth + CurrentLeft && X >= CurrentLeft) {
        const temp = Math.ceil(((X - CurrentLeft) / CurrentWidth) * 100)
        setLeft(temp)
      } else if (X > CurrentWidth + CurrentLeft) {
        setLeft(100)
      } else if (X < CurrentLeft) {
        setLeft(0)
      }
      if (Y <= CurrentHeight + CurrentTop && Y >= CurrentTop) {
        const temp = Math.ceil(((Y - CurrentTop) / CurrentHeight) * 100)
        setDown(temp)
      } else if (Y > CurrentHeight + CurrentTop) {
        setDown(100)
      } else if (Y < CurrentTop) {
        setDown(0)
      }
    }
  }

  const HandleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const X = e.clientX
    const Y = e.clientY
    dealBlock(X, Y)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const X = e.clientX
    const Y = e.clientY
    dealBlock(X, Y)
  }

  useEffect(() => {
    if (!disbale) {
      document.addEventListener('mouseup', (e) => {
        setSelect(false)
      })
      document.addEventListener('mousedown', (e) => {
        setSelect(true)
      })
    }
    return () => {
      document.removeEventListener('mouseup', () => {
        console.log('mouse up remove')
      })
      document.removeEventListener('mousedown', () => {
        console.log('mousedown remove')
      })
    }
  }, [])
  return {
    HandleMouse,
    handleMouseMove,
    containerRef,
    left,
    setLeft,
    down,
    setDown,
    select,
    setSelect
  }
}
export default useSlider
