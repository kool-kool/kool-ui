import { Button, message } from '@kool-kool/kool-ui'
import React from 'react'
import './index.css'

const App: React.FC = () => {
  return (
    <div className={'btns'}>
      <Button
        onClick={() =>
          message.success({ type: 'success', content: '新增成功' })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          message.info({ type: 'info', content: 'Some information' })
        }
      >
        Information
      </Button>
      <Button
        onClick={() =>
          message.warn({ type: 'warn', content: '服务器出了一點問題' })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() => message.error({ type: 'error', content: '刪除失敗' })}
      >
        Error
      </Button>
    </div>
  )
}

export default App
