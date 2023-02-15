import { Input, Slider, Switch } from 'kool-ui'
import React, { useState } from 'react'

const BasicSlider: React.FC = () => {
  const [disable, setDisable] = useState<boolean>(false)
  const [inputNumber, setInputNumber] = useState<number>(0)
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Slider
          onChange={(number) => {
            setInputNumber(number)
          }}
          range={false}
          value={inputNumber}
          disable={disable}
        />
      </div>
      <Input
        value={inputNumber}
        onChange={(e) => {
          setInputNumber(Number((e.target as HTMLInputElement).value))
        }}
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
