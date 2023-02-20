import classNames from 'classnames'
import React, { createContext, FC, useState } from 'react'
import { optionProps } from './Option'

type SelectCallback = (selectedValue: string, selectedLabel: string) => void

export interface SelectProps {
  defaultValue?: string
  className?: string
  testFlag?: boolean
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface ISelectContext {
  key: string
  onSelect?: SelectCallback
}

export const SelectContext = createContext<ISelectContext>({ key: '' })

const Select: FC<SelectProps> = (props) => {
  const { className, style, children, defaultValue, onSelect, testFlag } = props
  const [selectLabel, setSelectedLabel] = useState('')
  const [selectKey, setSelectedKey] = useState('')

  const [isShow, setIsshow] = useState(false)

  const handleClick = (value: string, label: string) => {
    setSelectedLabel(label)
    setIsshow(false)
    setSelectedKey(value)
    if (onSelect) {
      onSelect(value, label)
    }
  }
  const classes = classNames('koo-select', className)

  const passedContext: ISelectContext = {
    key: selectKey,
    onSelect: handleClick
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<optionProps>
      const { displayName } = childElement.type
      if (displayName === 'Option') {
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.log('Select children type incorrect')
      }
    })
  }
  return (
    <div data-testid="test-select">
      <div className={'koo-select-showarea'} onClick={() => setIsshow(!isShow)}>
        {selectLabel}
      </div>

      <SelectContext.Provider value={passedContext}>
        {(testFlag || isShow) && (
          <ul className={classes}>{renderChildren()}</ul>
        )}
      </SelectContext.Provider>
    </div>
  )
}

export default Select
