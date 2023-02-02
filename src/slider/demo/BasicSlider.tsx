import { Slider } from 'kool-ui'
import React from 'react'

const BasicSlider: React.FC = () => {
  return <Slider range={false} min={10} max={20} defaultValue={15} />
}
export default BasicSlider
