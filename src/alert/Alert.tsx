import classNames from 'classnames'
import React, { ReactNode, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CheckIcon, CloseIcon, ExclamationIcon, InfoIcon } from '../icon'
import { getPrefixCls } from '../shared/'

export interface AlertProps {
  style?: React.CSSProperties
  className?: string | string[]
  action?: ReactNode
  closeable?: boolean
  closed?: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: ReactNode
  content?: ReactNode
  icon?: ReactNode
  closeElement?: ReactNode
  showIcon?: boolean
  banner?: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    style,
    className,
    action,
    type = 'info',
    title,
    content,
    closeElement,
    closeable,
    closed,
    onClose,
    banner,
    icon,
    showIcon,
    ...other
  } = props
  const prefixClass = getPrefixCls('alert')
  const [visible, setVisible] = useState(true)

  function renderIcon(type: string | void): ReactNode | null {
    if (icon) {
      return icon
    }
    switch (type) {
      case 'info':
        return <InfoIcon color="info" />
      case 'success':
        return <CheckIcon color="success" />
      case 'warning':
        return <ExclamationIcon color="warning" />
      case 'error':
        return <ExclamationIcon color="danger" />
    }
  }

  function handleClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setVisible(false)
    onClose && onClose(e)
  }

  const classAlert = classNames(
    prefixClass,
    `${prefixClass}-${type}`,
    {
      [`${prefixClass}-with-title`]: title,
      [`${prefixClass}-banner`]: banner
    },
    className
  )

  const ifClose = 'closed' in props ? closed : closeable

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
      classNames={`kooAlertMotion`}
    >
      <div
        ref={ref}
        style={style}
        className={classAlert}
        role="alert"
        {...other}
      >
        {showIcon && (
          <div className={`${prefixClass}-icon-wrapper`}>
            {renderIcon(type)}
          </div>
        )}
        <div className={`${prefixClass}-content-wrapper`}>
          {title && <div className={`${prefixClass}-title`}>{title}</div>}
          {content && <div className={`${prefixClass}-content`}>{content}</div>}
        </div>
        {action && <div className={`${prefixClass}-action`}>{action}</div>}
        {ifClose && (
          <button
            type="button"
            onClick={handleClose}
            className={`${prefixClass}-close-button`}
          >
            {closeElement || <CloseIcon />}
          </button>
        )}
      </div>
    </CSSTransition>
  )
})

Alert.displayName = 'alert'

export default Alert
