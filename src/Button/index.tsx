import classNames from 'classnames'
import React from 'react'
import { ButtonProps } from '../shared/types/utils'

const Button = (Props: ButtonProps) => {
  const { children, size, type, loading, disabled, classname, danger } = Props
  const classes = classNames('koo-btn', classname, {
    [`koo-btn-${type}`]: type,
    [`koo-btn-${size}`]: size,
    'koo-danger': danger,
    'koo-disabled': type === 'link' && disabled,
    loading: loading
  })
  if (type === 'link') {
    return <a className={classes}>{children}</a>
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'middle'
}
export default Button
