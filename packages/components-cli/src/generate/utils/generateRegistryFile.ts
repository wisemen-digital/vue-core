import fs, { existsSync } from 'node:fs'
import path, { basename, dirname } from 'node:path'
import process from 'node:process'

import type {
  Component,
  ComponentFile,
  ComponentName,
} from '@/generate/components.type'
import {
  ComponentType,
  getComponentTypeFolder,
} from '@/generate/components.type'

const BASE_COMPONENTS_PATH = '../components'
const BASE_GENERATION_PATH = '../../docs/public/_generation'

interface ProcessedFile {
  name: string
  content: string
  dir: string
  type: ComponentType
}

export interface ProcessedComponent {
  dependencies?: string[]
  files: ProcessedFile[]
  internalDependencies?: ComponentName[]
  component: ComponentName
}

export const FILE_EXTENSIONS = [
  '.ts',
  '.vue',
  '.css',
  '.scss',
]

export function isFile(file: ComponentFile): boolean {
  return FILE_EXTENSIONS.some((extension) => file.path.endsWith(extension))
}

export function getAllFilesWithingFolder(folder: string): ComponentFile[] {
  const files = fs.readdirSync(folder).reduce((handledFiles, file) => {
    const componentPath = path.join(folder, file)
    const files = []

    if (fs.statSync(componentPath).isDirectory()) {
      const directoryFiles = getAllFilesWithingFolder(componentPath)

      files.push(...directoryFiles)

      return [
        ...directoryFiles,
        ...handledFiles,
      ]
    }

    const allFiles = [
      ...handledFiles,
      {
        type: ComponentType.COMPONENTS,
        path: componentPath,
      },
    ]

    return allFiles
  }, [] as ComponentFile[])

  return files
}

export function handleFile(file: ComponentFile): ProcessedFile | null {
  const content = fs.readFileSync(path.join(process?.cwd(), `${BASE_COMPONENTS_PATH}${getComponentTypeFolder(file.type)}`, file.path), 'utf8')

  return {
    name: basename(file.path),
    content,
    dir: dirname(file.path),
    type: file.type,
  }
}

export function handleComponent(component: Component): ProcessedComponent {
  const files = component.files?.reduce((handledFiles, file) => {
    try {
      if (!isFile(file)) {
        const folderFiles = getAllFilesWithingFolder(path.join(process?.cwd(), `${BASE_COMPONENTS_PATH}${getComponentTypeFolder(file.type)}`, file.path))

        const handledFolderFiles = folderFiles.map((folderFile) => {
          const shortPath = folderFile.path.split(`/src/${file.type}`)[1]

          return handleFile({
            type: file.type,
            path: shortPath,
          })
        })

        return [
          ...handledFolderFiles,
          ...handledFiles,
        ]
      }

      const handledFile = handleFile(file)

      return [
        ...handledFiles,
        handledFile,
      ]
    }
    catch (error) {
      console.error(`\x1B[31mError reading file ${file.path} in component \'${component.component}\'`)

      return handledFiles
    }
  }, [] as (ProcessedFile | null)[])

  const filteredFiles = files.filter((file): file is ProcessedFile => file != null)

  return {
    ...component,
    files: filteredFiles,
  }
}
export function generateRegistryFile(components: Component[], fileName: string): void {
  const payload = components
    .map(handleComponent)
    .sort((a, b) => {
      if (a.component < b.component) {
        return -1
      }

      if (a.component > b.component) {
        return 1
      }

      return 0
    })

  const writeDir = path.join(process?.cwd(), BASE_GENERATION_PATH)

  if (!existsSync(path.resolve(writeDir))) {
    fs.mkdirSync(path.resolve(writeDir), { recursive: true })
  }

  fs.writeFileSync(
    path.join(process?.cwd(), `${BASE_GENERATION_PATH}/${fileName}.json`),

    JSON.stringify(payload, null, 2),
  )
}
