import importX from './configs/imports.js'
import unusedImports from './configs/unused-imports.js'
import style from './configs/style.js'
import defaultConfig from './configs/default.js'
import overrides from './configs/overrides.js'
import customRules from './configs/custom-rules.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...defaultConfig,
  ...style,
  ...unusedImports,
  ...importX,
  ...overrides,
  ...customRules
]

export default config
