import axios from 'axios'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Button } from '../button/index'
import UploadList from './UploadList'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent: number
  raw?: File
  response?: any
  error?: any
}

interface UploadProps {
  action: string
  defaultFileList?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (_file: UploadFile) => void
}

const Upload = (Props: UploadProps) => {
  const {
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    defaultFileList,
    onRemove
  } = Props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const uploadFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevState) => {
      console.log(fileList, 'fileList')
      return prevState.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  function handleClick() {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
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
      if (!beforeUpload) {
        Post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then((NextFile) => {
            Post(NextFile)
          })
        } else if (result) {
          Post(file)
        }
      }
    })
  }

  function Post(file: File) {
    const _file: UploadFile = {
      uid: Date.now() + 'upload_file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList])
    const formData = new FormData()
    formData.append(file.name, file)
    axios
      .post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (e) => {
          const percentage = Math.round((e.loaded / Number(e.total)) * 100) || 0
          if (percentage < 100) {
            uploadFileList(_file, { percent: percentage, status: 'uploading' })
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        }
      })
      .then((r) => {
        uploadFileList(_file, { percent: 100, status: 'success', response: r })
        if (onSuccess) {
          onSuccess(r.data, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
      .catch((err) => {
        uploadFileList(_file, { percent: 100, status: 'error', error: err })
        if (onError) {
          onError(err, file)
        }
        if (onChange) {
          onChange(file)
        }
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
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

export default Upload
