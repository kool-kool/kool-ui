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
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
    </div>
  )
}

export default App
