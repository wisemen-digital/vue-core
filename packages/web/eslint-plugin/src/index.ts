import type { Linter } from '@typescript-eslint/utils/ts-eslint'

import { version } from '../package.json'
import explicitFunctionReturnType from './rules/explicit-function-return-type'

const plugin = {
  // @keep-sorted
  rules: {
    'explicit-function-return-type-with-regex': explicitFunctionReturnType,
  } satisfies Linter.PluginRules,
  meta: {
    name: 'eslint-plugin-wisemen',
    version,
  },
}

export default plugin

type RuleDefinitions = typeof plugin['rules']

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry
}
