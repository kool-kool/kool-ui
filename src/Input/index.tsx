import React, {FC,ReactElement, InputHTMLAttributes} from 'react';
import classNames from "classnames";


interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'>{

  disabled?: boolean;
  size?: 'lg' | 'sm';
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
}

export const Input:FC<InputProps>  = (props) => {


  const {disabled, size, prefix,suffix, ...restProps } = props;


  const classes = classNames('koo-input-wrapper', {
    'koo-input-disabled' : disabled,
    [`koo-input-${size}`] : size,
    'koo-input-prefix': !!prefix,
    'koo-input-suffix': !!suffix,
  })
  return (
    <div className={classes}>

      {prefix && <div className='koo-input-group-prefix'>{prefix}</div>}

      <input
      disabled={disabled}
      {...restProps}
      />
      {suffix && <div className='koo-input-group-suffix'>{suffix}</div>}


    </div>
  )
}

export default Input;
