import { Option, Select } from '@kool-kool/kool-ui'
import React from 'react'

const selectDemo = () => (
  <>
    <Select onSelect={(value) => console.log(value)}>
      <Option value={'11'}>React</Option>
      <Option value={'22'} disabled>
        Vue
      </Option>
      <Option value={'33'}>Regular</Option>
    </Select>
  </>
)

export default selectDemo
