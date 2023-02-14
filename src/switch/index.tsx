import React, { FC, Fragment, ReactNode } from 'react'
import './style/index.scss'

interface SwitchProps {
  defaultChecked?: boolean
  checked?: boolean
  size?: 'default' | 'small'
  className?: string
  onChange?: (checked: boolean) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
  disabled?: boolean
  autoFocus?: boolean
  loading?: boolean
  children?: ReactNode
  checkedChildren?: ReactNode
  unCheckedChildren?: ReactNode
}

const Switch: FC<SwitchProps> = ({
  defaultChecked = false,
  checked,
  onChange,
  size = 'default',
  className,
  onClick,
  disabled,
  autoFocus,
  loading = false,
  children,
  checkedChildren,
  unCheckedChildren
}) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked)

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleChange = () => {
    if (checked === undefined) {
      setIsChecked((c: boolean) => !c)
      onChange && onChange(!isChecked)
    }
  }

  return (
    <label
      className={`switch switch-${size} ${className} ${
        loading ? 'switch-loading' : ''
      }`}
      onClick={onClick}
    >
      <Fragment>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled || loading}
          autoFocus={autoFocus}
        />
        <span className="slider"></span>
        {loading ? <div className="loading"></div> : null}
        <span className="switch-text">
          {(checked !== undefined ? checked : isChecked)
            ? checkedChildren || children
            : unCheckedChildren || children}
        </span>
      </Fragment>
    </label>
  )
}

export default Switch
