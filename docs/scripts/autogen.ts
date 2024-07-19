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
        description: description,
        type: type.replace(/\s*\|\s*undefined/g, ''),
        required,
        default: defaultValue ?? undefined,
      })
    })
    .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))

  const events = meta.events
    .map((event: any) => {
      const { name, type } = event
      return ({
        name,
        description: md.render((event.description ?? '').replace(/^[ \t]+/gm, '')),
        type: type.replace(/\s*\|\s*undefined/g, ''),
      })
    })
    .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))

  const slots = meta.slots
    .map((slot: any) => {
      const { name, type, description } = slot
      return ({
        name,
        description: md.render((description ?? '').replace(/^[ \t]+/gm, '')),
        type: type === "{}" ? "None" : type.replace(/\s*\|\s*undefined/g, ''),
      })
    })
    .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
    console.log(meta.slots)

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
    let parsedString = `---\nsidebar: auto\n---\n\n\n# ${componentName}\n<script setup>\nimport ${componentPlaygroundName} from './${componentPlaygroundName}.vue'\n</script>\n\n<${componentPlaygroundName} />\n`

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
      meta.slots.forEach((slot: {
        name: string;
        type: string;
        description: string;
      }) => {
        parsedString += `| ${slot.name} | ${slot.type} | ${slot.description} |\n`
      })
      parsedString += '\n'
    }

    if (meta.events.length) {
      parsedString += '## Events\n\n'
      parsedString += '| Event name | Type | Description |\n'
      parsedString += '| ---------- | ---- | ----------- |\n'
      meta.events.forEach((event: { name: string; type: string; description: string }) => {
        parsedString += `| ${event.name} | ${event.type} | ${event.description} |\n`
      })
      parsedString += '\n'
    }

    const customTag = '\n<!-- !Custom! Anything after this line can be edited manually: please only add code usage and link to full source code on Github -->\n'

    parsedString += `\n<!-- Anything above this line is automatically generated, do not edit manually. -->\n`
    parsedString += customTag

    // Check file content: if file exists & has custom section, anything after custom tag won't be rewritten.
    const markdownContent = existsSync(metaMdFilePath) ? readFileSync(metaMdFilePath, 'utf8') : null;
    const customContentIndex = markdownContent?.indexOf(customTag);

    if (markdownContent && customContentIndex !== undefined && customContentIndex !== -1) {
      const contentAfterCustom = markdownContent.slice(customContentIndex + customTag.length);
      const updatedContent = `${parsedString}\n\n${contentAfterCustom}`;

      writeFileSync(metaMdFilePath, updatedContent, 'utf8');
    } else {
      writeFileSync(metaMdFilePath, parsedString, 'utf8');
    }
  })
}

generateDocsForComponents()
