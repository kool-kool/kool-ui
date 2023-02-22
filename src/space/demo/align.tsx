import { Button, Space } from '@kool-kool/kool-ui'
import React from 'react'
import './style.css'

const mockBlock: React.CSSProperties = {
  display: 'inline-block',
  padding: '32px 8px 16px',
  background: 'rgba(150, 150, 150, 0.2)'
}

const App: React.FC = () => (
  <div className="space-align-container">
    <div className="space-align-block">
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>

    <div className="space-align-block">
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span style={mockBlock}>Block</span>
      </Space>
    </div>
  </div>
)

export default App
