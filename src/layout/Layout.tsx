import classNames from 'classnames'
import React from 'react'

import { getPrefixCls } from '../shared/index'

type tagsNames = 'header' | 'footer' | 'main' | 'section'

export interface GeneratorProps {
  tagName: tagsNames
  displayName: string
  suffixClassnames?: string
}

export interface BasicLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixClassnames?: string
  hasSide?: boolean
}

interface BasicPropsWithTag extends BasicLayoutProps {
  tagName: tagsNames
}

// helper function
function generator({ tagName, displayName, suffixClassnames }: GeneratorProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (BasicComponent: any) => {
    const Adapter = React.forwardRef<HTMLElement, BasicLayoutProps>(
      (props, ref) => {
        const { prefixClassnames } = props
        const prefixCls = getPrefixCls(suffixClassnames, prefixClassnames)
        return (
          <BasicComponent
            ref={ref}
            prefixClassnames={prefixCls}
            tagName={tagName}
            {...props}
          />
        )
      }
    )

    if (process.env.NODE_ENV !== 'production') {
      Adapter.displayName = displayName
    }

    return Adapter
  }
}

const Basic = React.forwardRef<HTMLElement, BasicPropsWithTag>((props, ref) => {
  const { prefixClassnames, className, tagName, children, ...other } = props
  const classString = classNames(prefixClassnames, className)
  Basic.displayName = tagName
  return React.createElement(
    tagName,
    { className: classString, ...other, ref },
    children
  )
})

const BasicLayout = React.forwardRef<HTMLElement, BasicPropsWithTag>(
  (props, ref) => {
    const {
      prefixClassnames,
      className,
      tagName: Tag,
      children,
      hasSide,
      ...other
    } = props
    const classString = classNames(prefixClassnames, className, {
      'koo-layout-has-side': hasSide
    })
    BasicLayout.displayName = Tag
    return (
      <Tag ref={ref} className={classString} {...other}>
        {children}
      </Tag>
    )
  }
)

const Layout = generator({
  suffixClassnames: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout)

const Header = generator({
  suffixClassnames: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic)

const Content = generator({
  suffixClassnames: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic)

const Footer = generator({
  suffixClassnames: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic)

export { Header, Footer, Content }

export default Layout
