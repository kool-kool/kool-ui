// 参考https://github.com/react-component/util/blob/master/src/Children/toArray.ts
import React from 'react'

const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment')

export interface Option {
  keepEmpty?: boolean
}

export function isFragment(object: any) {
  return object.type === REACT_FRAGMENT_TYPE
}

export default function toArray(
  children: React.ReactNode,
  option: Option = {}
): React.ReactElement[] {
  let ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any | any[]) => {
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child))
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option))
    } else {
      ret.push(child)
    }
  })

  return ret
}
