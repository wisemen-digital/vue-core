import type { Schema } from 'json-schema-faker'
import { JSONSchemaFaker } from 'json-schema-faker'

import type { BuilderOptions } from './types'

export interface JSFOptions {
  alwaysFakeOptionals?: boolean
  omitNulls?: boolean
  optionalsProbability?: number | false
  requiredOnly?: boolean
  useDefaultValue?: boolean
  useExamplesValue?: boolean
}

// TODO: replace unknown with Schema
export function generateMock<T = unknown>(schema: unknown, options?: JSFOptions): T {
  JSONSchemaFaker.option({
    alwaysFakeOptionals: options?.alwaysFakeOptionals ?? false,
    omitNulls: options?.omitNulls ?? false,
    optionalsProbability: options?.optionalsProbability ?? 1,
    requiredOnly: options?.requiredOnly ?? true,
    useDefaultValue: options?.useDefaultValue ?? false,
    useExamplesValue: options?.useExamplesValue ?? false,
  })

  return JSONSchemaFaker.generate(schema as Schema) as T
}

export {
  defaultConfig as defaultBuildersConfig,
  defineConfig as defineBuildersConfig,
} from './config'
export type { BuildersPlugin } from './types'
export type {
  BuilderOptions,
  Schema as BuilderSchema,
}
