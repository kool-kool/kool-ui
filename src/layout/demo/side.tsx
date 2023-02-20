import { Layout } from '@kool-kool/kool-ui'
import React from 'react'
const { Header, Side, Footer, Content } = Layout

const App = () => {
  return (
    <Layout hasSide style={{ minHeight: '300px' }}>
      <Side>1</Side>
      <Layout>2</Layout>
    </Layout>
  )
}

export default App
