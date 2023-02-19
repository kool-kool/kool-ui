import { Upload } from 'kool-ui'
import React from 'react'

const App = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onProgress={(percentage, file) =>
        console.log(percentage, file, 'progress')
      }
      onSuccess={(data, file) => {
        console.log(data, file, 'success')
      }}
    />
  )
}
export default App
