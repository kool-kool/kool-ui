import InternalLayout, { Content, Footer, Header } from './Layout'
import Side from './Side'

type InternalLayoutType = typeof InternalLayout

type CompoundedComponent = InternalLayoutType & {
  Header: typeof Header
  Content: typeof Content
  Footer: typeof Footer
  Side: typeof Side
}

const Layout = InternalLayout as CompoundedComponent

Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.Side = Side

export default Layout
