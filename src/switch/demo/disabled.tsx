import { Switch } from '@kool-kool/kool-ui'
import React from 'react'

const App2: React.FC = () => {
  return (
    <div>
      <span style={{ marginRight: '20px' }}>
        <Switch checked={false} disabled />
      </span>
      <Switch checked disabled />
    </div>
  )
}

export default App2
