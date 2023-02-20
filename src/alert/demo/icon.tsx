import { Alert, Space } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <Space direction="vertical" size="large">
      <Alert showIcon title="info" content="Informational Notes"></Alert>
      <Alert
        type="success"
        showIcon
        title="success"
        content="Success Text"
      ></Alert>
      <Alert
        type="warning"
        showIcon
        title="warn"
        content="Warning Text"
      ></Alert>
      <Alert type="error" showIcon title="warn" content="Error Text"></Alert>
    </Space>
  )
}

export default App
