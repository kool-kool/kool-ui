import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../icon'
import './style/index.scss'

export interface MessageProps {
  type?: 'success' | 'info' | 'warn' | 'error'
  content?: string
  duration?: number
  className?: string
  onClose?: () => void
}

const iconMap = {
  success: <SuccessIcon />,
  info: <InfoIcon />,
  warn: <WarningIcon />,
  error: <ErrorIcon />
}

const rootId = 'toast-root'

const Message = React.forwardRef((props: MessageProps, ref) => {
  const {
    type = 'info',
    content,
    duration = 3000,
    className,
    ...otherProps
  } = props
  const toastRef = useRef<HTMLDivElement>(null)
  const classes = classNames('koo-message', className)

  const colorCls = classNames({
    ['success']: type === 'success',
    ['info']: type === 'info',
    ['warn']: type === 'warn',
    ['error']: type === 'error'
  })

  useEffect(() => {
    setTimeout(() => {
      const currentDOM = toastRef?.current
      const parentDOM = currentDOM?.parentElement
      parentDOM?.parentElement?.removeChild(parentDOM)
    }, duration + 200)
  }, [duration])

  return (
    <div className={`${classes}`} ref={toastRef} {...otherProps}>
      <div className={`icon ${colorCls}`}>{iconMap[type || 'info']}</div>
      <div className={'text'}>{content}</div>
    </div>
  )
})

const getContainer = () => {
  let toastRoot: HTMLDivElement
  let toastContainer: HTMLDivElement
  if (document.getElementById(rootId)) {
    toastRoot = document.getElementById(rootId) as HTMLDivElement
  } else {
    const divDOM = document.createElement('div')
    divDOM.id = rootId
    document.body.appendChild(divDOM)
    toastRoot = divDOM
  }

  if (toastRoot?.firstChild) {
    toastContainer = toastRoot.firstChild as HTMLDivElement
    toastContainer.className = 'toast-child'
  } else {
    const divDOM = document.createElement('div')
    toastRoot?.appendChild(divDOM)
    toastContainer = divDOM
    toastContainer.className = 'toast-child'
  }

  const divDOM = document.createElement('div')
  toastContainer.appendChild(divDOM)

  return createRoot(divDOM)
}

export const message = {
  success: (props: MessageProps) => {
    const root = getContainer()
    root.render(<Message {...props} type="success" />)
  },
  info: (props: MessageProps) => {
    const root = getContainer()
    root.render(<Message {...props} type="info" />)
  },
  warn: (props: MessageProps) => {
    const root = getContainer()
    root.render(<Message {...props} type="warn" />)
  },
  error: (props: MessageProps) => {
    const root = getContainer()
    root.render(<Message {...props} type="error" />)
  }
}

Message.propTypes = {
  /**
   * 提示信息种类
   */
  type: PropTypes.oneOf(['success', 'info', 'warn', 'error']),
  /**
   * 提示信息内容
   */
  content: PropTypes.string.isRequired,
  /**
   * 提示信息展示时间
   */
  duration: PropTypes.number
}

Message.defaultProps = {
  type: 'info',
  duration: 3000
}

Message.displayName = 'Message'
export default Message
