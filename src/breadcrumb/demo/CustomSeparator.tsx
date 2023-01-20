import { Breadcrumbs, Link } from 'kool-ui'
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
  return <Breadcrumbs separator="-">{BreadcrumbItems}</Breadcrumbs>
}

export default App
