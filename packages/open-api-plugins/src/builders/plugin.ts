import type { IR } from '@hey-api/openapi-ts'

import {
  collectSchemas,
  generateWithMethods,
} from './utils'

export function handler({
  plugin,
}): void {
  const rawSchemas: Record<string, IR.SchemaObject> = {}

  for (const event of plugin.get('schema')) {
    rawSchemas[event.name] = event.schema
  }

  const metas = collectSchemas(rawSchemas)
  const file = plugin.createFile({
    id: plugin.name,
    path: plugin.output,
  })

  let out = ''

  out += 'import { generateMock } from "@wisemen/open-api-plugins/builders"\n'
  out += 'import type { BuilderSchema } from "@wisemen/open-api-plugins/builders"\n'
  out += 'import type * as types from "./types.gen"\n\n'
  out += 'type BuilderOptions = {\n'
  out += '  useDefault?: boolean;\n'
  out += '  useExamples?: boolean;\n'
  out += '  alwaysIncludeOptionals?: boolean;\n'
  out += '  optionalsProbability?: number | false;\n'
  out += '  omitNulls?: boolean;\n'
  out += '}\n\n'

  const schemaEntries: string[] = []

  for (const m of metas) {
    schemaEntries.push(`  ${m.constName}: ${JSON.stringify(m.schema)}`)
  }

  out += `const schemas = {\n${schemaEntries.join(',\n')}\n} satisfies Record<string, BuilderSchema>\n\n`

  for (const m of metas) {
    if (m.isEnum) {
      out += `export class ${m.typeName}Builder {\n`
      out += `  private options: BuilderOptions = {}\n`
      out += `  setOptions(o: BuilderOptions): this { this.options = o || {}; return this }\n`
      out += `  build(): types.${m.typeName} {\n`
      out += `    return generateMock<types.${m.typeName}>(schemas.${m.constName}, {\n`
      out += `      useDefaultValue: this.options.useDefault,\n`
      out += `      useExamplesValue: this.options.useExamples,\n`
      out += `      alwaysFakeOptionals: this.options.alwaysIncludeOptionals,\n`
      out += `      optionalsProbability: this.options.optionalsProbability,\n`
      out += `      omitNulls: this.options.omitNulls\n`
      out += `    })\n`
      out += `  }\n`
      out += `}\n\n`
    }
    else {
      const withMethods = generateWithMethods(m.schema, m.typeName)

      out += `export class ${m.typeName}Builder {\n`
      out += `  private overrides: Partial<types.${m.typeName}> = {}\n`
      out += `  private options: BuilderOptions = {}\n`
      out += `  setOptions(o: BuilderOptions): this { this.options = o || {}; return this }\n`

      if (withMethods) {
        out += `${withMethods}\n`
      }

      out += `  build(): types.${m.typeName} {\n`
      out += `    const mock = generateMock<types.${m.typeName}>(schemas.${m.constName}, {\n`
      out += `      useDefaultValue: this.options.useDefault,\n`
      out += `      useExamplesValue: this.options.useExamples,\n`
      out += `      alwaysFakeOptionals: this.options.alwaysIncludeOptionals,\n`
      out += `      optionalsProbability: this.options.optionalsProbability,\n`
      out += `      omitNulls: this.options.omitNulls\n`
      out += `    })\n`
      out += `    for (const k in this.overrides) {\n`
      out += `      if (Object.prototype.hasOwnProperty.call(this.overrides, k)) {\n`
      out += `        const typedMock = mock as Record<string, unknown>;\n`
      out += `        const typedOverrides = this.overrides as Record<string, unknown>;\n`
      out += `        typedMock[k] = typedOverrides[k];\n`
      out += `      }\n`
      out += `    }\n`
      out += `    return mock\n`
      out += `  }\n`
      out += `}\n\n`
    }
  }

  file.add(out)
}
