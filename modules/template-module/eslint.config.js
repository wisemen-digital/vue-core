import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import { wisemenVueConfig } from '@wisemen/eslint-config-vue'

export default [
  {
    ignores: ['dist', 'node_modules', '.turbo'],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  ...wisemenVueConfig,
]
