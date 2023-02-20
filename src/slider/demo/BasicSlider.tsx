import { Slider, Switch } from '@kool-kool/kool-ui'
import React, { useState } from 'react'

const BasicSlider: React.FC = () => {
  const [disable, setDisable] = useState<boolean>(false)
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Slider range={false} max={20} min={10} disable={disable} />
      </div>
      <Switch
        onChange={() => {
          setDisable((prev) => !prev)
        }}
      />
    </div>
  )
}
export default BasicSlider
