import { Button, Carousel, Space } from '@kool-kool/kool-ui'
import React, { useState } from 'react'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const dict: ('left' | 'right' | 'bottom' | 'top' | 'outer')[] = [
  'top',
  'right',
  'bottom',
  'top',
  'outer'
]

const App: React.FC = () => {
  const [value, setValue] = useState<
    'left' | 'right' | 'bottom' | 'top' | 'outer'
  >('bottom')
  const handlePosition = (
    target: 'left' | 'right' | 'bottom' | 'top' | 'outer'
  ) => {
    setValue(target)
  }
  return (
    <Space direction="vertical" size="large">
      <Space>
        {dict.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => handlePosition(item)}
              size="large"
              type="primary"
              shape="round"
            >
              {item}
            </Button>
          )
        })}
      </Space>
      <Carousel dotsPosition={value}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Space>
  )
}

export default App
