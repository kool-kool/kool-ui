import { Button, HomeIcon, Space } from '@kool-kool/kool-ui'
import React, { useState } from 'react'
const BtnApp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [loading1, setLoading1] = useState<boolean>(false)
  const [loading2, setLoading2] = useState<boolean>(false)
  return (
    <Space size="large">
      <div>
        <Button
          type="primary"
          icon={<HomeIcon />}
          loading={loading}
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 1000)
          }}
        >
          Primary
        </Button>
      </div>
      <div>
        <Button
          type="primary"
          loading={loading1}
          onClick={() => {
            setLoading1(true)
            setTimeout(() => {
              setLoading1(false)
            }, 1000)
          }}
          size="large"
        >
          Large
        </Button>
      </div>
      <div>
        <Button
          type="primary"
          loading={loading2}
          onClick={() => {
            setLoading2(true)
            setTimeout(() => {
              setLoading2(false)
            }, 1000)
          }}
          size="small"
        >
          Small
        </Button>
      </div>
    </Space>
  )
}

export default BtnApp
