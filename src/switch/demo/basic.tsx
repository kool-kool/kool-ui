import { Switch } from 'kool-ui'
import React from 'react'

const App: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false)

  return <Switch onChange={() => setIsChecked((prev) => !prev)} />
}

export default App
