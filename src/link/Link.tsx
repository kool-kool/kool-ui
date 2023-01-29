import React from 'react'

export type Underline = 'hover' | 'none'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * @description 控制何时应该有下划线
   * @default     none
   */
  underline?: Underline
  /**
   * @description 是否禁用
   * @default     false
   */
  disabled?: boolean
}

export const underlineClassName: Record<Underline, string> = {
  hover: 'koo-underline-hover',
  none: 'koo-underline-none'
}

const Link: React.FC<LinkProps> = ({
  children,
  underline,
  className,
  disabled,
  href,
  onClick,
  ...rest
}) => {
  return (
    <a
      className={`koo-link-root ${underlineClassName[underline!]} ${
        disabled ? 'koo-link-disabled' : ''
      } ${className}`}
      onClick={(e) => {
        disabled || (onClick && onClick(e))
      }}
      href={disabled ? undefined : href}
      {...rest}
    >
      {children}
    </a>
  )
}

Link.defaultProps = {
  underline: 'none',
  className: '',
  disabled: false
}

export default Link
