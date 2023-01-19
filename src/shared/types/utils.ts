import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ClassName {
  className?: string
}
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  children?: ReactNode
  classname?: string // 新加入的className
  size?: 'large' | 'small' | 'middle'
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
  onClick?: () => void
}
