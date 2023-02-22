import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'kool-ui', // 站点名称
  outputPath: 'doc-site', // 输出文件夹
  base: '/kool-ui',
  publicPath: '/kool-ui/',
  themeConfig: {
    nav: [
      { title: '指南', link: '/guide/start' },
      { title: '组件', link: '/components/button' }
    ]
  }
})
