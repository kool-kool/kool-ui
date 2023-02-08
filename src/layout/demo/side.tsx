import { Layout } from 'kool-ui'
import React from 'react'
const { Header, Side, Footer, Content } = Layout

const App = () => {
  return (
    <Layout hasSide style={{ minHeight: '300px' }}>
      <Side></Side>
      <Layout></Layout>
    </Layout>
  )
}

export default App
