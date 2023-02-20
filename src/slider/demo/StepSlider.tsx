import { Slider } from '@kool-kool/kool-ui'
import React from 'react'

const BasicSlider: React.FC = () => {
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Slider range={false} max={11} min={10} step={0.1} />
      </div>
    </div>
  )
}
export default BasicSlider
