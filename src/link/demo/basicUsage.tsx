import { Link } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem'
      }}
    >
      <Link href="#">Default</Link>
      <Link href="#" disabled>
        Disabled
      </Link>
    </div>
  )
}

export default App
