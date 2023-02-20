import React, { FC } from 'react'
import {
  CloseIcon,
  LoadingIcon,
  ProgressErrorIcon,
  ProgressSuccessIcon
} from '../icon'
import Progress from '../progress'
import { UploadFile } from './Upload'
interface UploadListProps {
  fileList: UploadFile[]
  onRemove: (_file: UploadFile) => void
}

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props
  return (
    <ul className="koo-upload-list">
      {fileList.map((item) => {
        return (
          <li className="koo-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && (
                <LoadingIcon />
              )}
              {item.status === 'success' && <ProgressSuccessIcon />}
              {item.status === 'error' && <ProgressErrorIcon />}
            </span>
            <span className="file-actions">
              <CloseIcon
                onClick={() => {
                  onRemove(item)
                }}
              />
            </span>
            {item.status === 'uploading' && (
              <Progress percent={item.percent || 0} />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default UploadList
