import { Alert } from '@kool-kool/kool-ui'
import React from 'react'

const App: React.FC = () => (
  <Alert
    title="Info Text"
    type="info"
    closeable
    closeElement={<h1>close now</h1>}
  />
)

export default App
