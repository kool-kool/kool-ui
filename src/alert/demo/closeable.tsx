import { Alert } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  return (
    <Alert
      title="warning"
      content="Warning Text"
      type="warning"
      closeable
    ></Alert>
  )
}

export default App
