import fs, { existsSync } from 'node:fs'
import path, { basename, dirname } from 'node:path'
import process from 'node:process'

import type { Component } from '../components.type'

const BASE_COMPONENTS_PATH = '../components/src/components'

export function generateRegistryFile(components: Component[], fileName: string): void {
  const payload = components
    .map((component) => {
      const files = component.files?.map((file) => {
        try {
          const content = fs.readFileSync(path.join(process?.cwd(), BASE_COMPONENTS_PATH, file.path), 'utf8')
          return {
            content,
            dir: dirname(file.path),
            name: basename(file.path),
            type: file.type,
          }
        }
        catch (error) {
          console.error(`\x1B[31mError reading file ${file.path} in component \'${component.component}\'`)
        }
        return null
      })

      return {
        ...component,
        files,
      }
    })
    .sort((a, b) => {
      if (a.component < b.component) {
        return -1
      }

      if (a.component > b.component) {
        return 1
      }

      return 0
    })

  const writeDir = path.join(process?.cwd(), '_generation')
  if (!existsSync(path.resolve(writeDir))) {
    fs.mkdirSync(path.resolve(writeDir), { recursive: true })
  }

  fs.writeFileSync(
    path.join(process?.cwd(), `_generation/${fileName}.json`),

    JSON.stringify(payload, null, 2),
  )
}
