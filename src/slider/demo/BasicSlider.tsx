import { Slider, Switch } from 'kool-ui'
import React, { useState } from 'react'

const BasicSlider: React.FC = () => {
  const [disable, setDisable] = useState<boolean>(false)
  return (
    <div>
      <Slider
        vertical={true}
        range={false}
        min={10}
        max={20}
        defaultValue={15}
        disable={disable}
      />
      <Switch
        checked={disable}
        onChange={() => {
          setDisable(!disable)
        }}
      />
    </div>
  )
}
export default BasicSlider
