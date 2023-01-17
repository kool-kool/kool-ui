import classNames from 'classnames'
import React from 'react'

interface ButtonProps {
  children?: string
  classname?: string // 新加入的className
  size?: 'large' | 'small' | 'middle'
  type?: 'link' | 'primary' | 'dashed' | 'text' | 'default' | 'ghost'
  target?: string
  loading?: boolean
  danger?: boolean
  disabled?: boolean
  ghost?: boolean
}
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
