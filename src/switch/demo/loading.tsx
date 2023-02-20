import { Switch } from '@kool-kool/kool-ui'
import React from 'react'

const App: React.FC = () => {
  return (
    <div>
      <Switch loading />
      <span style={{ marginLeft: '20px' }}>
        <Switch loading checked />
      </span>
    </div>
  )
}
export default App
