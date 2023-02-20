import { Button, Space } from '@kool-kool/kool-ui'
import React from 'react'

const alignContainer: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start'
}

const alignBlock: React.CSSProperties = {
  flex: 'none',
  margin: '8px 4px',
  padding: '4px',
  border: '1px solid #40a9ff'
}

const mockBlock: React.CSSProperties = {
  display: 'inline-block',
  padding: '32px 8px 16px',
  background: 'rgba(150, 150, 150, 0.2)'
}

const App: React.FC = () => (
  <div style={alignContainer}>
    <div style={alignBlock}>
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span style={mockBlock}>Block</span>
      </Space>
    </div>
    <div style={alignBlock}>
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span style={mockBlock}>Block</span>
      </Space>
    </div>

    <div style={alignBlock}>
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span style={mockBlock}>Block</span>
      </Space>
    </div>
    <div style={alignBlock}>
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span style={mockBlock}>Block</span>
      </Space>
    </div>
  </div>
)

export default App
