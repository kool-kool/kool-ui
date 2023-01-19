import React from 'react'

const BreadcrumbItem: React.FC = ({ children }) => {
  return (
    <li className="koo-breadcrumb-item">
      <a href="/">{children}</a>
    </li>
  )
}

export default BreadcrumbItem
