import { Slider } from '@kool-kool/kool-ui'
import React from 'react'

const BasicSlider: React.FC = () => {
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Slider
          range={false}
          max={200}
          min={100}
          formatter={(s) => {
            return `${s}%`
          }}
        />
      </div>
    </div>
  )
}
export default BasicSlider
