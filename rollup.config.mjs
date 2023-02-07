import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import svgr from '@svgr/rollup'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      dir: 'dist',
      preserveModules: true
    },
    plugins: [
      resolve(),
      commonjs(),
      svgr({ exportType: 'named' }),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extract: true
      })
    ],
    external: ['react', 'react-dom', /node_modules/]
  },
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
