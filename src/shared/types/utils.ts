export interface ClassName {
  className?: string
}
export interface ButtonProps {
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
