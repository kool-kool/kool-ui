import { Switch } from '@kool-kool/kool-ui'
import React from 'react'

const flexContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center'
}

const App: React.FC = () => {
  return (
    <div style={flexContainer}>
      <span style={{ marginRight: '20px' }}>
        <Switch size={'small'} />
      </span>
      <Switch />
    </div>
  )
}

export default App
