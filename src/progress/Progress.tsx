import classNames from 'classnames'
import React, { useEffect } from 'react'
import { ProgressErrorIcon, ProgressSuccessIcon } from '../icon'

interface ProcessProps {
  width?: number
  percent: number
  className?: string
  status?: 'success' | 'error'
}

const Progress = (Props: ProcessProps) => {
  const { className, percent, status } = Props

  function dealText(S: string | undefined) {
    if (S === 'success') {
      return <ProgressSuccessIcon style={{ fontSize: '0.75rem' }} />
    } else if (S === 'error') {
      return <ProgressErrorIcon style={{ fontSize: '0.75rem' }} />
    } else {
      return <div>{percent}%</div>
    }
  }

  useEffect(() => {
    if (percent > 100) {
      throw new Error('进度不能超过100')
    }
  })

  const classes = classNames('koo-progress-container', className)
  const classesContent = classNames('koo-progress-content', {
    [`koo-progress-${status}`]: status
  })

  return (
    <div className={classes}>
      <div className={classesContent} style={{ width: `${percent}%` }} />
      <div className="koo-progress-text">{dealText(status)}</div>
    </div>
  )
}

export default Progress
