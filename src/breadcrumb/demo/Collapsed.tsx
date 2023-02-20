import { Breadcrumbs, Link } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <Breadcrumbs maxItem={3}>
      <Link href="#">Home</Link>
      <Link href="#">Components</Link>
      <Link href="#">Breadcrumbs</Link>
      <Link>Usage</Link>
    </Breadcrumbs>
  )
}

export default App
