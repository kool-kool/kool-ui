import { Slider, Switch } from 'kool-ui'
import React, { useState } from 'react'

const BasicSlider: React.FC = () => {
  const [disable, setDisable] = useState<boolean>(false)
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Slider range={false} max={20} min={10} disable={disable} />
      </div>
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
