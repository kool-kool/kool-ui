import { useEffect, useRef } from 'react'

const useInterval = (callback: () => void, delay: null | number) => {
  const refIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)
  const refSavedCallback = useRef<() => void>()

  const setupInterval = () => {
    if (delay !== null) {
      refIntervalId.current = setInterval(() => {
        refSavedCallback.current!()
      }, delay)
    }
  }
  const cleanupInterval = () => {
    refIntervalId.current && clearInterval(refIntervalId.current)
  }

  const resetInterval = () => {
    cleanupInterval()
    setupInterval()
  }

  useEffect(() => {
    refSavedCallback.current = callback
  }, [callback])

  useEffect(() => {
    setupInterval()
    return cleanupInterval
  }, [delay])

  return resetInterval
}

export default useInterval
