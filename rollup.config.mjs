import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import svgr from '@svgr/rollup'
import cssnano from 'cssnano'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    // 项目入口
    input: 'src/index.ts',
    output: [
      {
        // 输出文件
        file: 'dist/index.es.js',
        // 输出格式
        format: 'esm'
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs'
      }
    ],
    plugins: [
      // 解决node 包的导入
      resolve(),
      // 解决commmnjs 包的导入
      commonjs(),
      // 导入json
      json(),
      // 解决svg的引入
      svgr({ exportType: 'named' }),
      // 编译ts
      typescript({
        tsconfigOverride: {
          // 过滤
          exclude: ['**/__test__', '.dumi/', '**/demo']
        }
      }),
      babel({
        presets: ['@babel/preset-env'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: '**/node_modules/**',
        babelHelpers: 'bundled'
      }),
      // 处理css
      postcss({
        // 抽离成单独的css文件
        extract: 'index.css',
        plugins: [
          // css压缩
          cssnano()
        ]
      }),
      // 代码压缩
      terser()
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
