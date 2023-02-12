import { HomeIcon } from 'kool-ui'
import { LoadingIcon } from 'kool-ui/icon'
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
      <LoadingIcon />
    </div>
  )
}

export default App
