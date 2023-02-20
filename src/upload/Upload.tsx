import axios from 'axios'
import React, { ChangeEvent, useRef } from 'react'
import { Button } from '../button/index'

// export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
// export interface UploadFile {
//   uid: string
//   size: number
//   name: string
//   status?: UploadFileStatus
//   percent: number
//   raw?: File
//   response?: any
//   error?: any
// }

interface UploadProps {
  action: string
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
}

const Upload = (Props: UploadProps) => {
  const { action, onProgress, onSuccess, onError } = Props
  const fileInput = useRef<HTMLInputElement>(null)
  function handleClick() {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  function uploadFiles(files: FileList) {
    const postFiles = [...files]
    postFiles.forEach((file) => {
      const formData = new FormData()
      formData.append(file.name, file)
      axios
        .post(action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (e) => {
            const percentage =
              Math.round((e.loaded * 100) / Number(e.total)) || 0
            if (percentage < 100) {
              if (onProgress) {
                onProgress(percentage, file)
              }
            }
          }
        })
        .then((r) => {
          console.log(r)
          if (onSuccess) {
            onSuccess(r.data, file)
          }
        })
        .catch((err) => {
          console.log(err)
          if (onError) {
            onError(err, file)
          }
        })
    })
  }
  return (
    <div className="koo-upload-container">
      <Button type="primary" onClick={handleClick}>
        请选择文件
      </Button>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleChange}
      />
    </div>
  )
}

export default Upload
