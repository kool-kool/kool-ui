import { Slider } from '@kool-kool/kool-ui'
import React from 'react'

const BasicSlider: React.FC = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '400px' }}>
        <Slider.Vertical
          range={false}
          max={200}
          min={100}
          defaultValue={150}
          step={20}
        />
      </div>
    </div>
  )
}
export default BasicSlider
