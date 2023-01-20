import classNames from 'classnames'
import omit from 'rc-util/lib/omit'
import React, { useEffect, useRef, useState } from 'react'

import { getPrefixCls } from '../Layout'

const breakPointMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
}

type mqlType = MediaQueryListEvent | MediaQueryList

export type CollapseType = 'clickTrigger' | 'responsive'

export interface SideProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixClassnames?: string
  collapsible?: boolean
  collapsed?: boolean
  defaultCollapsed?: boolean
  reverseArrow?: boolean
  onCollapse?: (collapsed: boolean, type: CollapseType) => void
  zeroWidthTriggerStyle?: React.CSSProperties
  trigger?: React.ReactNode
  width?: number | string
  collapsedWidth?: number | string
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  onBreakpoint?: (broken: boolean) => void
}

export interface SideState {
  collapsed?: boolean
  below: boolean
}

const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i++
    return `${prefix}${i}`
  }
})()

const isNumeric = (value: any): boolean =>
  !isNaN(parseFloat(value)) && isFinite(value)

const Side = React.forwardRef<HTMLDivElement, SideProps>((props, ref) => {
  const {
    prefixClassnames: customPrefix,
    className,
    trigger,
    children,
    defaultCollapsed = false,
    style = {},
    collapsible = false,
    reverseArrow = false,
    width = 300,
    collapsedWidth = 80,
    zeroWidthTriggerStyle,
    breakpoint,
    onCollapse,
    onBreakpoint,
    ...other
  } = props

  const [collapsed, setCollapsed] = useState(
    'collapsed' in other ? other.collapsed : defaultCollapsed
  )

  const [below, setBelow] = useState(false)

  useEffect(() => {
    if ('collapsed' in other) {
      setCollapsed(other.collapsed)
    }
  }, [other.collapsed])

  const handleSetCollapsed = (value: boolean, type: CollapseType) => {
    if (!('collapsed' in other)) {
      setCollapsed(value)
    }

    onCollapse?.(value, type)
  }

  const responsiveHandlerRef = useRef<(mql: mqlType) => void>()
  responsiveHandlerRef.current = (mql: mqlType) => {
    setBelow(mql.matches)
    onBreakpoint?.(mql.matches)

    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive')
    }
  }

  useEffect(() => {
    function responsiveHandler(mql: mqlType) {
      return responsiveHandlerRef.current?.(mql)
    }

    let mqlList: MediaQueryList
    if (typeof window !== 'undefined') {
      const { matchMedia } = window
      if (matchMedia! && breakpoint && breakpoint in breakPointMap) {
        mqlList = matchMedia(`(max-width: ${breakPointMap[breakpoint]})`)
        try {
          mqlList.addEventListener('change', responsiveHandler)
        } catch (error) {
          mqlList.addListener(responsiveHandler)
        }

        responsiveHandler(mqlList)
      }
    }

    return () => {
      try {
        mqlList?.removeEventListener('change', responsiveHandler)
      } catch (error) {
        mqlList?.removeListener(responsiveHandler)
      }
    }
  }, [breakpoint])

  const toggle = () => {
    handleSetCollapsed(!collapsed, 'clickTrigger')
  }

  const renderSide = () => {
    const prefixClass = getPrefixCls('layout-side', customPrefix)
    const divProps = omit(props, [`collapsed`])
    const rawWidth = collapsed ? collapsedWidth : width

    const sideWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth)

    const zeroWidthTrigger =
      parseFloat(String(collapsedWidth || 0)) === 0 ? (
        <span
          onClick={toggle}
          className={classNames(
            `${prefixClass}-zero-width-trigger`,
            `${prefixClass}-zero-width-trigger-${
              reverseArrow ? 'right' : 'left'
            }`
          )}
          style={zeroWidthTriggerStyle}
        >
          {trigger}
        </span>
      ) : null

    const status = collapsed ? 'collapsed' : 'expanded'

    const triggerDom =
      trigger !== null
        ? zeroWidthTrigger || (
            <div
              className={`${prefixClass}-trigger`}
              onClick={toggle}
              style={{ width: sideWidth }}
            >
              {trigger}
            </div>
          )
        : null
    const divStyle = {
      ...style,
      flex: `0 0 ${sideWidth}`,
      maxWidth: sideWidth,
      minWidth: sideWidth,
      width: sideWidth
    }

    const sideClass = classNames(
      prefixClass,
      {
        [`${prefixClass}-collapsed`]: !!collapsed,
        [`${prefixClass}-has-trigger`]:
          collapsed && trigger !== null && !zeroWidthTrigger,
        [`${prefixClass}-below`]: !!below,
        [`${prefixClass}-zero-width`]: parseFloat(sideWidth) === 0
      },
      className
    )

    return (
      <aside className={sideClass} {...divProps} style={divStyle} ref={ref}>
        <div className={`${prefixClass}-children`}>{children}</div>
        {collapsible || (below && zeroWidthTrigger) ? triggerDom : null}
      </aside>
    )
  }

  return <>{renderSide()}</>
})

if (process.env.NODE_ENV !== 'production') {
  Side.displayName = 'Side'
}

export default Side
