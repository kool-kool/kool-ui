import { Upload, UploadFile } from '@kool-kool/kool-ui'
import React from 'react'

const App = () => {
  const default1: UploadFile[] = [
    {
      uid: '122',
      size: 12222,
      name: 'success',
      percent: 30,
      status: 'success'
    },
    {
      uid: '123',
      size: 12222,
      name: 'uploading',
      percent: 30,
      status: 'uploading'
    },
    { uid: '121', size: 12222, name: 'error', percent: 30, status: 'error' }
  ]

  return (
    <Upload
      defaultFileList={default1}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onProgress={(percentage, file) =>
        console.log(percentage, file, 'progress')
      }
    />
  )
}
export default App
