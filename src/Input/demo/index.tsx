import React from 'react';
import Input from '../index';
import '../style/index.scss'

const InputDemo = () => <>
    <Input/>
    <br/>
    <Input disabled={true}/>
    <br/>
    <Input prefix={'prefix'}/>
  <br/>
    <Input suffix={'suffix'}/>
</>

export default InputDemo;

