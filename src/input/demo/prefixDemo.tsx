import { HomeIcon, Input } from '@kool-kool/kool-ui'
import React from 'react'

const onSearch = () => console.log('123')

const InputPrefixDemo = () => (
  <>
    <Input prefix={<HomeIcon />} />
    <br />
    <Input suffix={'Search'} suffixFn={onSearch} />
  </>
)

export default InputPrefixDemo
