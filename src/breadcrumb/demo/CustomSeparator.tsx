import {
  Breadcrumbs,
  Link,
  RoundKeyboardArrowRightIcon
} from '@kool-kool/kool-ui'
import React from 'react'

const BreadcrumbItems = (
  <>
    <Link href="#">Home</Link>
    <Link href="#">Components</Link>
    <Link href="#">Breadcrumbs</Link>
    <Link>Usage</Link>
  </>
)

const App = () => {
  return (
    <div>
      <Breadcrumbs separator="-">{BreadcrumbItems}</Breadcrumbs>
      <Breadcrumbs
        separator={
          <RoundKeyboardArrowRightIcon style={{ fontSize: '1.25rem' }} />
        }
      >
        {BreadcrumbItems}
      </Breadcrumbs>
    </div>
  )
}

export default App
