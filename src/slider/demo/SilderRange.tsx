import { Slider } from '@kool-kool/kool-ui'
import React from 'react'

const SliderRange: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Slider range={true} min={10} max={20} defaultValue={[11, 14]} />
    </div>
  )
}
export default SliderRange
