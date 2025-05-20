import MarkdownIt from 'markdown-it'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { ComponentMeta, MetaCheckerOptions, PropertyMetaSchema } from 'vue-component-meta'
import { createChecker } from 'vue-component-meta'

import { components } from './components'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const md = new MarkdownIt()

const checkerOptions: MetaCheckerOptions = {
  forceUseTs: true,
  printer: { newLine: 1 },
}

const tsconfigChecker = createChecker(
  resolve(__dirname, '../../packages/components-next/tsconfig.app.json'),
  checkerOptions,
)

function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

components.forEach((component) => {
  const componentSourceFolder = resolve(__dirname, '../../packages/components-next/src/components', component.sourceFolder)

  const meta = parseMeta(tsconfigChecker.getComponentMeta(componentSourceFolder))

  const metaDirPath = resolve(__dirname, '../packages/components-next/components/', component.targetFolder)
  // if meta dir doesn't exist, create
  if (!existsSync(metaDirPath))
    mkdirSync(metaDirPath)

  const metaMdFilePath = join(metaDirPath, `${toKebabCase(component.componentName)}-meta.md`)

  let parsedString = '<!-- This file was automatic generated. Do not edit it manually -->\n\n'
    
  if (component.styleFunctionName) {
    parsedString += `<script setup>\nimport { ${component.styleFunctionName} } from "@wisemen/vue-core-components";\n</script>\n\n`;
  }

  if (meta.props.length)
    parsedString += `<PropsTable :data="${JSON.stringify(meta.props, null, 2).replace(/"/g, '\'')}" />\n`

  if (meta.methods.length)
    parsedString += `\n<MethodsTable :data="${JSON.stringify(meta.methods, null, 2).replace(/"/g, '\'')}" />\n`
  
  if (component.styleFunctionName) {
    parsedString += `\n\n<ClassConfig :style-function="${component.styleFunctionName}" />\n\n`;
  }

  // TODO: Check to re-add those ?
  // if (meta.events.length)
  //   parsedString += `\n<EmitsTable :data="${JSON.stringify(meta.events, null, 2).replace(/"/g, '\'')}" />\n`

  // if (meta.slots.length)
  //   parsedString += `\n<SlotsTable :data="${JSON.stringify(meta.slots, null, 2).replace(/"/g, '\'')}" />\n`


  writeFileSync(metaMdFilePath, parsedString)
})

function parseTypeFromSchema(schema: PropertyMetaSchema): string {
  if (typeof schema === 'object' && (schema.kind === 'enum' || schema.kind === 'array')) {
    const isFlatEnum = schema.schema?.every(val => typeof val === 'string')
    const enumValue = schema?.schema?.filter(i => i !== 'undefined') ?? []

    if (isFlatEnum && /^[A-Z]/.test(schema.type))
      return enumValue.join(' | ')
    else if (typeof schema.schema?.[0] === 'object' && schema.schema?.[0].kind === 'enum')
      return schema.schema.map((s: PropertyMetaSchema) => parseTypeFromSchema(s)).join(' | ')
    else
      return schema.type
  }
  else if (typeof schema === 'object' && schema.kind === 'object') {
    return schema.type
  }
  else if (typeof schema === 'string') {
    return schema
  }
  else {
    return ''
  }
}


// Utilities

function parseMeta(meta: ComponentMeta) {
  const props = meta.props
    // Exclude global props
    .filter(prop => !prop.global)
    .map((prop) => {
      let defaultValue = prop.default
      let type = prop.type
      const { name, description, required } = prop

      if (name === 'as')
        defaultValue = defaultValue ?? '"div"'

      if (defaultValue === 'undefined')
        defaultValue = undefined

      if (!type.includes('AcceptableValue'))
        type = parseTypeFromSchema(prop.schema) || type

      return ({
        name,
        description: md.render(description),
        type: type.replace(/\s*\|\s*undefined/g, ''),
        required,
        default: defaultValue ?? undefined,
      })
    })
    .sort((a, b) => a.name.localeCompare(b.name))


  // const events = meta.events
  //   .map((event) => {
  //     const { name, type } = event
  //     return ({
  //       name,
  //       description: md.render((eventDescriptionMap.get(name) ?? '').replace(/^[ \t]+/gm, '')),
  //       type: type.replace(/\s*\|\s*undefined/g, ''),
  //     })
  //   })
  //   .sort((a, b) => a.name.localeCompare(b.name))

  // const defaultSlot = meta.slots?.[0]
  // const slots: { name: string, description: string, type: string }[] = []

  // if (defaultSlot && defaultSlot.type !== '{}') {
  //   const schema = defaultSlot.schema
  //   if (typeof schema === 'object' && schema.schema) {
  //     Object.values(schema.schema).forEach((childMeta: PropertyMeta) => {
  //       slots.push({
  //         name: childMeta.name,
  //         description: md.render(childMeta.description),
  //         type: parseTypeFromSchema(childMeta.schema),
  //       })
  //     })
  //   }
  // }


  const methods = meta.exposed
    .filter(expose => typeof expose.schema === 'object' && expose.schema.kind === 'event')
    .map(expose => ({
      name: expose.name,
      description: md.render(expose.description),
      type: expose.type,
    }))

  return {
    props,
    events: [],
    slots: [],
    methods,
  }
}