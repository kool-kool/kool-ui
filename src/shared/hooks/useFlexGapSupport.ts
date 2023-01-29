import canUseDom from 'rc-util/lib/Dom/canUseDom'
import { useEffect, useState } from 'react'

const canUseDocElement = () => canUseDom() && window.document.documentElement

let flexGapSupported: boolean | undefined

const judgeGap = () => {
  if (!canUseDocElement()) {
    return false
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported
  }

  const flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  flexGapSupported = flex.scrollHeight === 1
  document.body.removeChild(flex)

  return flexGapSupported
}

const useFlexGapSupport = () => {
  const [flexible, setFlexible] = useState(false)
  useEffect(() => {
    setFlexible(judgeGap())
  }, [])

  return flexible
}

export default useFlexGapSupport
