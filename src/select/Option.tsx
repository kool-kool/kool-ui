import classNames from 'classnames'
import React, { ReactNode, useContext } from 'react'
import { SelectContext } from './Select'

export interface optionProps {
  index?: number
  value: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: ReactNode
}

const Option: React.FC<optionProps> = (props) => {
  const { index, disabled, className, style, children, value } = props
  const context = useContext(SelectContext)
  const classes = classNames('koo-option', className, {
    'is-disabled': disabled,
    'is-selected': context.key === value
  })

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    // console.log(value)
    if (context.onSelect && !disabled && typeof index === 'number') {
      context.onSelect(value, e.currentTarget.innerHTML)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
Option.displayName = 'Option'
export default Option
