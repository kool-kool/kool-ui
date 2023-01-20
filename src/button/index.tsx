import classNames from 'classnames'
import React from 'react'
import { ButtonProps } from '../shared/types/utils'

const Button = (Props: ButtonProps) => {
  const {
    children,
    size,
    type,
    loading,
    disabled,
    classname,
    danger,
    shape,
    href,
    target,
    HtmlType,
    onClick,
    ...reset
  } = Props
  const handleClick = () => {
    if (disabled || loading) {
      return
    }
    if (onClick) {
      onClick()
    }
  }
  const classes = classNames('koo-btn', classname, {
    [`koo-btn-${type}`]: type,
    [`koo-btn-${size}`]: size,
    [`koo-btn-shape-${shape}`]: shape,
    'koo-danger': danger,
    loading: loading,
    type: HtmlType
  })
  if (href && !loading && !disabled) {
    return (
      <a href={href} target={target}>
        <button
          className={classes}
          onClick={handleClick}
          disabled={disabled}
          {...reset}
        >
          {children}
        </button>
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        onClick={handleClick}
        disabled={disabled}
        {...reset}
      >
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
