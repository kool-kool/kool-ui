import { Switch } from 'kool-ui'
import React from 'react'

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`)
}

const App2: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false)

  // const toggle = () => {
  //   setDisabled(!disabled1);
  // };

  return (
    <div>
      <Switch
        checked={false}
        disabled
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <Switch checked disabled onChange={() => setIsChecked((prev) => !prev)} />
    </div>
  )
}

export default App2
