/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable ts/explicit-function-return-type */
import { readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

import type {
  MarkdownEnv,
  MarkdownRenderer,
} from 'vitepress'

export const rawPathRegexp
  = /^(.+?(?:\.([a-z0-9]+))?)(#[\w-]+)?(?: ?\{(\d+(?:[,-]\d+)*)? ?(\S+)?\})? ?(?:\[(.+)\])?$/

function rawPathToToken(rawPath: string) {
  const [
    filepath = '',
    extension = '',
    region = '',
    lines = '',
    lang = '',
    rawTitle = '',
  ] = (rawPathRegexp.exec(rawPath) || []).slice(1)

  const title = rawTitle || filepath.split('/').pop() || ''

  return { filepath, extension, region, lines, lang, title }
}

function kebabCaseToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replaceAll('/', '_')
}

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default function (md: MarkdownRenderer): void {
  md.core.ruler.after('inline', 'component-preview', (state) => {
    function insertComponentImport(importString: string): void {
      const index = state.tokens.findIndex((i) => i.type === 'html_block' && i.content.match(/<script setup>/g))

      if (index === -1) {
        const importComponent = new state.Token('html_block', '', 0)

        importComponent.content = `<script setup>\n${importString}\n</script>\n`
        state.tokens.splice(0, 0, importComponent)
      }
      else {
        const content = state.tokens[index].content

        state.tokens[index].content = content.replace('</script>', `${importString}\n</script>`)
      }
    }

    // Define the regular expression to match the desired patternß
    const regex = /<ComponentPreviewV1 name="([^"]+)" \/>/g

    // Iterate through the Markdown content and replace the pattern
    state.src = state.src.replace(regex, (match, componentName) => {
      const pathName = `../../component-demos/${componentName}`
      const convertedName = kebabCaseToCamelCase(componentName)

      insertComponentImport(`import ${convertedName} from '${pathName}/Demo.vue'`)

      const index = state.tokens.findIndex((i) => i.content.match(regex))

      const { realPath, path: _path } = state.env as MarkdownEnv

      const childFiles = readdirSync(
        resolve(dirname(realPath ?? _path), pathName),
        { withFileTypes: false, recursive: true },
      )
      const groupedFiles = childFiles.reduce((prev, curr) => {
        if (typeof curr !== 'string') {
          return prev
        }
        else {
          prev.push(curr)
        }

        return prev
      }, [] as string[])

      state.tokens[index].content = `<ComponentPreviewV1 name="${convertedName}" files="${encodeURIComponent(JSON.stringify(groupedFiles))}" ><${convertedName} />`

      const _dummyToken = new state.Token('', '', 0)
      const tokenArray: Array<typeof _dummyToken> = []

      for (const [
        key,
        value,
      ] of Object.entries(groupedFiles)) {
        const templateStart = new state.Token('html_inline', '', 0)

        templateStart.content = `<template #${key}>`
        tokenArray.push(templateStart)

        const file = value
        const {
          filepath,
          extension,
          lines,
          lang,
          title,
        } = rawPathToToken(`${pathName}/${file}`)
        const resolvedPath = resolve(dirname(realPath ?? _path), filepath)

        // Add code tokens for each line
        const token = new state.Token('fence', 'code', 0)

        token.info = `${lang || extension}${lines ? `{${lines}}` : ''}${
          title ? `[${title}]` : ''
        }`

        token.content = `<<< ${filepath}`
        // @ts-expect-error token.src is for snippets plugin to handle importing snippet
        token.src = [
          resolvedPath,
        ]
        tokenArray.push(token)

        const templateEnd = new state.Token('html_inline', '', 0)

        templateEnd.content = '</template>'
        tokenArray.push(templateEnd)
      }

      const endTag = new state.Token('html_inline', '', 0)

      endTag.content = '</ComponentPreviewV1>'
      tokenArray.push(endTag)

      state.tokens.splice(index + 1, 0, ...tokenArray)

      // Return an empty string to replace the original pattern
      return ''
    })
  })
}
