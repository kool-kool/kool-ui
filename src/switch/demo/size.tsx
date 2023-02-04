import { Switch } from 'kool-ui'
import React from 'react'

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`)
}

const App: React.FC = () => {
  return (
    <div>
      <Switch size={'small'} />
      <Switch />
    </div>
  )
}

export default App
