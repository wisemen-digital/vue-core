import { existsSync, promises as fs } from 'node:fs'

import type { Change } from 'diff'
import { diffLines } from 'diff'

import type { Config } from '@/utils/getConfig'
import { replaceFileDirectories } from '@/utils/replaceFileDirectories'

import type { Component } from './getComponents'

export interface FileDiff {
  file: string
  filePath: string
  patch: Change[]
}

export async function diffComponent(
  component: Component,
  config: Config,
): Promise<FileDiff[]> {
  const changes: FileDiff[] = []

  for (const registryFile of component.files) {
    const localFilePath = registryFile.localPath

    if (localFilePath == null) {
      continue
    }

    if (!existsSync(localFilePath)) {
      continue
    }

    const fileContent = await fs.readFile(localFilePath, 'utf8')
    const resolvedFile = replaceFileDirectories(registryFile, config)
    const patch = diffLines(resolvedFile.content, fileContent)

    if (patch.length > 1) {
      changes.push({
        file: registryFile.name,
        filePath: localFilePath,
        patch,
      })
    }
  }

  return changes
}
