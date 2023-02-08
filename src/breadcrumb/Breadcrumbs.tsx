import React from 'react'
import Button from '../button/Button'
import { MoreHorizIcon } from '../icon'
import toArray from '../shared/utils/childrenToArray'

export interface BreadcrumbProps
  extends React.OlHTMLAttributes<HTMLOListElement> {
  /**
   * @description item的分隔符
   * @default     /
   */
  separator?: React.ReactNode
  /**
   * @description  item最大项，超出折叠
   * @default      7
   */
  maxItem?: number
}

export const BreadcrumbsSeparator: React.FC = ({ children }) => {
  return <li className="koo-breadcrumb-separator">{children}</li>
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  children,
  className,
  separator,
  maxItem,
  ...rest
}) => {
  const [shrink, setShrink] = React.useState(true)
  const crumbs = React.useMemo(() => {
    const crumbsArray: React.ReactElement[] = []
    const childrenArray = toArray(children)
    let keyIndex = 1
    for (let i = 0; i < childrenArray.length; i++) {
      crumbsArray.push(
        <li key={keyIndex++} className="koo-breadcrumb-item">
          {childrenArray[i]}
        </li>
      )
      if (i !== childrenArray.length - 1) {
        crumbsArray.push(
          <BreadcrumbsSeparator key={keyIndex++}>
            {separator}
          </BreadcrumbsSeparator>
        )
      }
    }
    if (shrink && childrenArray.length > maxItem!) {
      return [
        crumbsArray[0],
        crumbsArray[1],
        <li key={keyIndex++}>
          {/* TODO: 替换成button组件 */}
          {/* <button onClick={() => setShrink(false)}>shrink</button> */}
          <Button size="small" type="text" onClick={() => setShrink(false)}>
            <MoreHorizIcon
              size="small"
              style={{ width: '1.5rem', height: '1rem' }}
            />
          </Button>
        </li>,
        crumbsArray[crumbsArray.length - 2],
        crumbsArray[crumbsArray.length - 1]
      ]
    } else {
      return crumbsArray
    }
  }, [separator, children, shrink])

  return (
    <ol className={`koo-breadcrumb-root ${className}`} {...rest}>
      {crumbs}
    </ol>
  )
}

Breadcrumbs.defaultProps = {
  className: '',
  maxItem: 7,
  separator: '/'
}

export default Breadcrumbs
