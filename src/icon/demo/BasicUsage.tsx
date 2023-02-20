import { HomeIcon } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem'
      }}
    >
      <HomeIcon color="primary" />
      <HomeIcon color="success" />
      <HomeIcon color="warning" />
      <HomeIcon color="danger" />
      <HomeIcon color="info" />
    </div>
  )
}

export default App
