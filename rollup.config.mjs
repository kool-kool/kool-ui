import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import svgr from '@svgr/rollup'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    // 项目入口
    input: 'src/index.ts',
    output: {
      // 输出格式
      format: 'esm',
      // 输出目录
      dir: 'dist',
      // 保留源文件的代码格式
      preserveModules: true
    },
    plugins: [
      // 解决node 包的导入
      resolve(),
      // 解决commmnjs 包的导入
      commonjs(),
      // 解决svg的引入
      svgr({ exportType: 'named' }),
      // 编译ts
      typescript({
        tsconfigOverride: {
          exclude: ['**/__test__', '.dumi/', '**/demo']
        }
      }),
      // 处理css
      postcss({
        // 抽离成单独的css文件
        extract: true
      })
    ],
    // 剔除依赖
    external: ['react', 'react-dom']
  },
  // 生成类型声明文件
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [dts()],
    external: [/\.scss$/]
  }
]
