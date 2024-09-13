import { promises as fs } from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'

import type { Component } from '@/generate/components.type'
import { isFile } from '@/generate/utils/generateRegistryFile'
import { getComponentFilePath } from '@/generate/utils/getComponentFilePath'

const FOLDERS_TO_CHECK = [
  'components',
  'composables',
  'config',
  'icons',
  'libs',
  'styles',
  'types',
  'utils',
]

export async function getAllFilesInFolder(folder: string): Promise<string[]> {
  const files = await fs.readdir(folder)
  const reducedFiles = files.reduce(async (handledFiles, file) => {
    const componentPath = path.join(folder, file)

    if (!isFile(componentPath)) {
      const directoryFiles = await getAllFilesInFolder(componentPath)

      return [
        ...await handledFiles,
        ...directoryFiles,
      ]
    }

    const allFiles = [
      ...await handledFiles,
      componentPath,
    ]

    return allFiles
  }, Promise.resolve([] as string[]))

  return reducedFiles
}

export async function checkUsedFiles(components: Component[]) {
  const allFiles = await FOLDERS_TO_CHECK.reduce(async (handledFiles, folder) => {
    const folderPath = `${path.join(process?.cwd(), folder)}`.replace('components-cli', 'components/src')

    const folderFiles = await getAllFilesInFolder(folderPath)

    return [
      ...await handledFiles,
      ...folderFiles,
    ]
  }, Promise.resolve([] as string[]))

  const allUsedFiles: string[] = []

  // components.forEach((component) => {
  //   component.files?.forEach(async (file) => {
  //     if (isFile(file.path)) {
  //       allUsedFiles.push(getComponentFilePath(file))

  //       return
  //     }

  //     const folderPath = getComponentFilePath(file)
  //     const files = await getAllFilesInFolder(folderPath)

  //     allUsedFiles.push(...files)
  //   })
  // })

  for (const component of components) {
    for (const file of component.files ?? []) {
      if (isFile(file.path)) {
        allUsedFiles.push(getComponentFilePath(file))

        continue
      }

      const folderPath = getComponentFilePath(file)
      const files = await getAllFilesInFolder(folderPath)

      allUsedFiles.push(...files)
    }
  }

  for (const file of allFiles) {
    if (!allUsedFiles.includes(file)) {
      // eslint-disable-next-line no-console
      console.log(chalk.red(`File ${file} is not used in any component`))
    }
  }

  return allFiles
}
