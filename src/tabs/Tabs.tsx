import classNames from 'classnames'
import React, { useState } from 'react'

export interface TabsItemProps {
  label: React.ReactNode
  disable?: boolean
  key?: string
  children: React.ReactNode
}

interface Tabs {
  type: 'line' | 'card'
  size: 'middle' | 'large' | 'small'
  activeIndex?: number
  className?: string
  centered?: boolean
  item: TabsItemProps[]
  onSelect?: (selectedIndex: number) => void
  closeable?: boolean
  tabPosition: 'left' | 'right' | 'top' | 'bottom'
}

const Tabs = (Props: Tabs) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { className, item, onSelect, tabPosition, size, type, centered } = Props
  const navClass = classNames('koo-Tabs-nav', {
    // [`koo-Tabs-nav-${tabPosition}`]: tabPosition,
    'koo-Tabs-nav-centered': centered
  })
  const DivClass = classNames({
    [`koo-Tabs-nav-${tabPosition}`]: type === 'card' ? null : tabPosition,
    'koo-Tabs-nav-card': type === 'card'
  })
  function ReturnNav(item: TabsItemProps[]) {
    return item.map((item, index) => {
      const classes = classNames('koo-Tabs', className, {
        'koo-Tabs-active': index === activeIndex,
        'koo-Tabs-active-card': index === activeIndex && type === 'card',
        'koo-Tabs-disable': item.disable,
        [`koo-Tabs-${size}`]: size,
        [`koo-Tabs-${type}`]: type
      })
      return (
        <li
          key={item.key}
          className={classes}
          onClick={() => {
            if (!item.disable) {
              if (onSelect) {
                onSelect(index)
              }
              setActiveIndex(index)
            }
          }}
        >
          {item.label}
        </li>
      )
    })
  }
  function ReturnContent(index: number, item: TabsItemProps[]) {
    return <div className="koo-Tabs-content">{item[index].children}</div>
  }
  return (
    <div className={DivClass}>
      <ul className={navClass}>{ReturnNav(item)}</ul>
      {ReturnContent(activeIndex, item)}
    </div>
  )
}

Tabs.defaultProps = {
  type: 'line',
  size: 'middle',
  tabPosition: 'top'
}

export default Tabs
