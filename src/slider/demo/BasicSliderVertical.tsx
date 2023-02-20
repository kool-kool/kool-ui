import { Slider, Switch } from '@kool-kool/kool-ui'
import React, { useState } from 'react'

const BasicSlider: React.FC = () => {
  const [disable, setDisable] = useState<boolean>(false)
  return (
    <div>
      <div style={{ width: '100%', height: '400px' }}>
        <Slider.Vertical
          range={false}
          max={200}
          min={100}
          defaultValue={150}
          disable={disable}
        />
      </div>
      <Switch
        onChange={() => {
          setDisable(!disable)
        }}
      />
    </div>
  )
}
export default BasicSlider
