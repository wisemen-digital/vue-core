import { join, parse, resolve } from 'path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import fg from 'fast-glob'
import MarkdownIt from 'markdown-it'
import { createChecker  } from 'vue-component-meta'
import { fileURLToPath } from 'node:url'


export const components = {
  toast: [
    'AppToast',
  ],
}

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const md = new MarkdownIt()

const checkerOptions = {
  forceUseTs: true,
  printer: { newLine: 1 },
}

const tsconfigChecker = createChecker(
  resolve(__dirname, '../../packages/components/tsconfig.app.json'),
  checkerOptions,
)

const allComponents = fg.sync(['src/components/**/*.vue'], {
  cwd: resolve(__dirname, '../../packages/components'),
  absolute: true,
})

const listOfComponents = Object.values(components).flatMap(i => i)
const primitiveComponents = allComponents.filter(i => listOfComponents.includes(parse(i).name))

function parseTypeFromSchema(schema: any): string {
  if (typeof schema === 'object' && (schema.kind === 'enum' || schema.kind === 'array')) {
    const isFlatEnum = schema.schema?.every((val: any) => typeof val === 'string')
    const enumValue = schema?.schema?.filter((i: any) => i !== 'undefined') ?? []

    if (isFlatEnum && /^[A-Z]/.test(schema.type))
      return enumValue.join(' | ')
    else if (typeof schema.schema?.[0] === 'object' && schema.schema?.[0].kind === 'enum')
      return schema.schema.map((s: any) => parseTypeFromSchema(s)).join(' | ')
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

function parseMeta(meta: any) {
  const props = meta.props
    .filter((prop: any) => !prop.global)
    .map((prop: any) => {
      let defaultValue = prop.default
      let type = prop.type
      const { name, description, required } = prop
      
      if (defaultValue === 'undefined')
        defaultValue = undefined

      return ({
        name,
        description: md.render(description),
        type: type.replace(/\s*\|\s*undefined/g, ''),
        required,
        default: defaultValue ?? undefined,
      })
    })
    .sort((a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name))

  const events = meta.events
    .map((event: any) => {
      const { name, type } = event
      return ({
        name,
        description: md.render((event.description ?? '').replace(/^[ \t]+/gm, '')),
        type: type.replace(/\s*\|\s*undefined/g, ''),
      })
    })
    .sort((a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name))

  const defaultSlot = meta.slots?.[0]
  const slots: { name: string, description: string, type: string }[] = []

  if (defaultSlot && defaultSlot.type !== '{}') {
    const schema = defaultSlot.schema
    if (typeof schema === 'object' && schema.schema) {
      Object.values(schema.schema).forEach((childMeta: any) => {
        slots.push({
          name: childMeta.name,
          description: md.render(childMeta.description),
          type: parseTypeFromSchema(childMeta.schema),
        })
      })
    }
  }

  return {
    props,
    events,
    slots,
  }
}

function generateDocsForComponents() {
  primitiveComponents.forEach((componentPath) => {
    const componentName = parse(componentPath).name
    const meta = parseMeta(tsconfigChecker.getComponentMeta(componentPath))

    const componentFolderName = parse(componentPath).dir.split('/').slice(-1)[0]

    const metaDirPath = resolve(__dirname, `../components/${componentFolderName}`)

    // If directory doesn't exist, create
    if (!existsSync(metaDirPath))
      mkdirSync(metaDirPath)

    const componentNameKebabCase = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const metaMdFilePath = join(metaDirPath, `${componentNameKebabCase}.md`)

    const componentPlaygroundName = `${componentName}Playground`

    // Create string: playground file & title
    let parsedString = `---\nsidebar: auto\n---\n\n\n# ${componentName}\n<script setup>\nimport ${componentPlaygroundName} from './${componentPlaygroundName}.vue'\n</script>`

    // Create: tables for props & models, slots, events
    if (meta.props.length) {
      parsedString += '\n## Props\n\n'
      parsedString += '| Prop | Type | Description | Default |\n'
      parsedString += '| ---- | ---- | ----------- | ------- |\n'
      meta.props.forEach((prop: { 
        name: string; 
        type: string; 
        description: string; 
        required: boolean;
        default?: string;
      }) => {
        const name = `${prop.name}${prop.required ? '*' : ''}`
        const type = prop.type.replace(/\|/g, '\\|')
        parsedString += `| ${name} | ${type} | ${prop.description} | ${prop.default ?? ''} |\n`
      })
      parsedString += '\n'
    }

    if (meta.slots.length) {
      parsedString += '## Slots\n\n'
      parsedString += '| Slot | Type | Description |\n'
      parsedString += '| --------- | ---- | ----------- |\n'
      meta.slots.forEach(slot => {
        parsedString += `| ${slot.name} | ${slot.type} | ${slot.description} |\n`
      })
      parsedString += '\n'
    }

    if (meta.events.length) {
      parsedString += '## Events\n\n'
      parsedString += '| Event name | Type | Description |\n'
      parsedString += '| ---------- | ---- | ----------- |\n'
      meta.events.forEach((event: { name: string; type: string; description: string }) => {
        const type = event.type === '[]' ? 'None' : event.type
        parsedString += `| ${event.name} | ${type} | ${event.description} |\n`
      })
      parsedString += '\n'
    }

    const customTag = '\n<!-- !Custom! Anything after this line can be edited manually: please only add code usage and link to full source code on Github -->\n'

    parsedString += `\n<!-- Anything above this line is automatically generated, do not edit manually. -->\n`
    parsedString += customTag

    // Check file content: if custom section, anything after custom tag won't be rewritten.
    const markdownContent = readFileSync(metaMdFilePath, 'utf8');
    const customContentIndex = markdownContent.indexOf(customTag);

    if (customContentIndex !== -1) {
      const contentAfterCustom = markdownContent.slice(customContentIndex + customTag.length);
      const updatedContent = `${parsedString}\n\n${contentAfterCustom}`;

      writeFileSync(metaMdFilePath, updatedContent, 'utf8');
    } else {
      writeFileSync(metaMdFilePath, parsedString, 'utf8');
    }
  })
}

generateDocsForComponents()
