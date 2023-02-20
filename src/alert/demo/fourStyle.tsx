import { Alert, Space } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <Space style={{ width: '100%' }} direction="vertical" size="normal">
      <Alert type="info" content="Info Text"></Alert>
      <Alert type="success" content="Success Text"></Alert>
      <Alert type="warning" content="Warning Text"></Alert>
      <Alert type="error" content="Error Text"></Alert>
    </Space>
  )
}

export default App
