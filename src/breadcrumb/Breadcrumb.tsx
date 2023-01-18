import React from 'react'
import { ClassName } from '../shared/types/utils'

type BreadcrumbProps = ClassName

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <ul
      className={` koo-breadcrumb-root ${
        props.className ? props.className : ''
      }`}
    >
      1
    </ul>
  )
}
export default Breadcrumb
