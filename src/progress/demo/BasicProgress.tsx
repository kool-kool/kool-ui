import { Input, Progress } from '@kool-kool/kool-ui'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setvalue] = useState<number>(0)
  return (
    <div>
      <Progress percent={value} />
      <Input
        onChange={(e) => {
          setvalue(Number((e.target as HTMLInputElement).value))
        }}
      />
    </div>
  )
}

export default App
