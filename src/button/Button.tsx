import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { LoadingIcon } from '../icon/index'
// import { ButtonProps } from '../shared/types/utils'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children?: ReactNode
  classname?: string // 新加入的className
  size: 'large' | 'small' | 'middle'
  type?: 'link' | 'primary' | 'dashed' | 'text' | 'default' | 'ghost'
  target?: string
  loading?: boolean
  danger?: boolean
  disabled?: boolean
  icon?: ReactNode
  ghost?: boolean
  HtmlType?: string
  href?: string
  shape?: 'default' | 'circle' | 'round'
}

const Button = (Props: ButtonProps) => {
  const {
    children,
    size,
    type,
    loading,
    disabled,
    classname,
    icon,
    danger,
    shape,
    href,
    target,
    HtmlType,
    onClick,
    ...reset
  } = Props

  function IconStyle(size: string) {
    switch (size) {
      case 'small':
        return { fontSize: '0.75rem' }
      case 'large':
        return { fontsize: '1.5rem' }
      case 'middle':
        return { fontsize: '0.875rem' }
      default:
        return {}
    }
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      return
    }
    if (onClick) {
      onClick?.(e)
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
  const iconClasses = classNames('koo-button-icon', {
    [`koo-btn-icon-${size}`]: size
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
          {loading ? <LoadingIcon className={iconClasses} /> : icon}
          <span> {children}</span>
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
        {loading ? <LoadingIcon style={IconStyle(size)} /> : icon}
        <span> {children}</span>
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
