import createClassnames from 'classnames'
import React from 'react'
import { Color, Size } from '../shared/types/utils'

export interface IconProps
  extends React.ClassAttributes<SVGElement>,
    React.SVGAttributes<SVGElement> {
  /**
   * @description 图标大小
   * @default     normal
   */
  size?: Size
  /**
   * @description 图标颜色
   * @default     info
   */
  color?: Color
}

const IconWrapper = (
  IconBase: (
    props?:
      | (React.ClassAttributes<SVGElement> & React.SVGAttributes<SVGElement>)
      | null
  ) => React.ReactSVGElement
) => {
  const Icon: React.FC<IconProps> = ({ size, className, color, ...rest }) => {
    const classnames = createClassnames(
      'koo-icon-root',
      className,
      `koo-icon-${size}`,
      `koo-${color}-color`
    )
    return <IconBase className={classnames} {...rest} />
  }
  Icon.defaultProps = {
    size: 'normal',
    color: 'info'
  }
  return Icon
}

export default IconWrapper
