import { Progress, Space } from '@kool-kool/kool-ui'
import React from 'react'

const App: React.FC = () => {
  return (
    <div>
      <Space size="normal" direction="vertical">
        <Progress percent={50} status="success" />
        <Progress percent={50} status="error" />
      </Space>
    </div>
  )
}

export default App
