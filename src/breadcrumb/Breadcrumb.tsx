import React from 'react'
import { ClassName } from '../shared/types/utils'
import toArray from '../shared/utils/childrenToArray'

interface BreadcrumbProps extends ClassName {
  separator?: React.ReactNode
  maxItem?: number
}

export const BreadcrumbsSeparator: React.FC = ({ children }) => {
  return <li className="koo-breadcrumb-separator">{children}</li>
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  children,
  className,
  separator,
  maxItem
}) => {
  const crumbs = React.useMemo(() => {
    let keyIndex = 1
    const crumbsArray: React.ReactElement[] = []
    const childrenArray = toArray(children)
    for (let i = 0; i < childrenArray.length; i++) {
      crumbsArray.push(
        <li key={keyIndex++} className="koo-breadcrumb-li">
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
    return crumbsArray
  }, [separator, children])

  return <ol className={` koo-breadcrumb-root ${className}`}>{crumbs}</ol>
}

Breadcrumbs.defaultProps = {
  className: '',
  maxItem: 8,
  separator: '/'
}

export default Breadcrumbs
