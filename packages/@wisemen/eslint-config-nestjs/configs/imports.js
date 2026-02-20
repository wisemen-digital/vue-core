import importX from 'eslint-plugin-import-x'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [{
  plugins: {
    import: importX
  },
  rules: {
    'import/order': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/newline-after-import': 'error'
  }
}]

export default config
