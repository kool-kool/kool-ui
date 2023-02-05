import classNames from 'classnames'
import React, { FC, InputHTMLAttributes, ReactElement } from 'react'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'> {
  disabled?: boolean
  size?: 'large' | 'small'
  prefix?: string | ReactElement
  suffix?: string | ReactElement
  suffixFn?: () => void
}

const Input: FC<InputProps> = (props) => {
  const { disabled, size, prefix, suffix, suffixFn, ...restProps } = props

  const classes = classNames('koo-input', {
    'koo-input-disabled': disabled,
    [`koo-input-${size}`]: size,
    'koo-input-prefix': !!prefix,
    'koo-input-suffix': !!suffix
  })
  return (
    <div className={'koo-input-wrapper'}>
      {prefix && <div className="koo-input-group-prefix">{prefix}</div>}

      <input className={classes} disabled={disabled} {...restProps} />
      {suffix && (
        <div className="koo-input-group-suffix" onClick={suffixFn}>
          {suffix}
        </div>
      )}
    </div>
  )
}

export default Input
