import type {
  DefinePlugin,
  IR,
} from '@hey-api/openapi-ts'
import type { Schema } from 'json-schema-faker'

export interface Config {
  /**
   * Plugin name. Must be unique.
   */
  name: 'builders'
  /**
   * Generate Zod schemas alongside builders for validation
   *
   * @default false
   */
  generateZod?: boolean
  /**
   * User-configurable option for your plugin.
   *
   * @default false
   */
  myOption?: boolean
  /**
   * Name of the generated file.
   *
   * @default 'my-plugin'
   */
  output?: string
  /**
   * Use Zod for mock generation instead of JSON Schema Faker
   *
   * @default false
   */
  useZodForMocks?: boolean
}

export type BuildersPlugin = DefinePlugin<Config>

export interface BuilderOptions {
  alwaysIncludeOptionals?: boolean
  omitNulls?: boolean
  optionalsProbability?: number | false
  useDefault?: boolean
  useExamples?: boolean
}

export interface GeneratedSchemaMeta {
  isEnum: boolean
  isObject: boolean
  constName: string
  schema: Schema
  typeName: string
}

export interface EnumSchemaObject {
  $ref?: string
  [key: string]: unknown
  additionalProperties?: boolean | IR.SchemaObject
  allOf?: IR.SchemaObject[]
  anyOf?: IR.SchemaObject[]
  enum?: JsonValue[]
  items?: EnumItem[] | IR.SchemaObject | IR.SchemaObject[]
  nullable?: boolean
  properties?: Record<string, IR.SchemaObject>
  required?: string[]
  type?: string | 'enum'
  oneOf?: IR.SchemaObject[]
}

export interface EnumItem {
  const: JsonValue
  description?: string
}

export type JsonValue = boolean | number | string | JsonValue[] | { [key: string]: JsonValue } | null

export interface ExtendedSchema {
  [key: string]: unknown
  additionalProperties?: boolean | Schema
  allOf?: Schema[]
  anyOf?: Schema[]
  enum?: JsonValue[]
  items?: Schema | Schema[]
  nullable?: boolean
  properties?: Record<string, Schema>
  required?: string[]
  type?: 'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string' | Array<'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string'>
  oneOf?: Schema[]
}

export interface NormalizedSchemaNode {
  [key: string]: unknown
  additionalProperties?: boolean | NormalizedSchemaNode
  allOf?: NormalizedSchemaNode[]
  anyOf?: NormalizedSchemaNode[]
  const?: JsonValue
  enum?: JsonValue[]
  items?: NormalizedSchemaNode | NormalizedSchemaNode[]
  logicalOperator?: string
  properties?: Record<string, NormalizedSchemaNode>
  type?: 'array' | 'boolean' | 'enum' | 'integer' | 'null' | 'number' | 'object' | 'string' | Array<'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string'>
  oneOf?: NormalizedSchemaNode[]
}

export type BuildersHandler = BuildersPlugin['Handler']
