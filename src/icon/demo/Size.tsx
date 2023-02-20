import { HomeIcon } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-end'
      }}
    >
      <HomeIcon size="small" />
      <HomeIcon size="normal" />
      <HomeIcon size="large" />
      <HomeIcon
        style={{
          fontSize: 40
        }}
      />
    </div>
  )
}

export default App
