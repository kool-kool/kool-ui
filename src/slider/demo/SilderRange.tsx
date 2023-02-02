import { Slider } from 'kool-ui'
import React from 'react'

const SliderRange: React.FC = () => {
  return <Slider range={true} min={10} max={20} defaultValue={[11, 14]} />
}
export default SliderRange
