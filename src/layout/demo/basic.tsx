import { Layout, Space } from '@kool-kool/kool-ui'
import React from 'react'

const { Header, Side, Footer, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  // paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea'
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
}

const sideStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}

const sideStyleOther: React.CSSProperties = {
  ...sideStyle,
  height: 248
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  minHeight: 64,
  lineHeight: '64px'
}

const App: React.FC = () => {
  return (
    <Space direction="vertical" size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout hasSide>
          <Side style={sideStyle}>Side</Side>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout hasSide>
          <Content style={contentStyle}>Content</Content>
          <Side style={sideStyle}>Side</Side>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      <Layout hasSide>
        <Side style={sideStyleOther}>Side</Side>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  )
}

export default App
