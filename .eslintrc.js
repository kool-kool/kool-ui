module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 对于不符合prettier报eslint错误
    '@typescript-eslint/no-non-null-assertion': 'off',
    'max-lines': ['error', { max: 300, skipComments: true }] //限制文件最大行数300
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    // 指定版本，解决eslint warning
    react: {
      version: '18.2.0'
    }
  }
}
