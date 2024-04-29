import { existsSync } from 'node:fs'

import type { Component } from './getComponents'
import { getAvailableComponents } from './getComponents'
import type { Config } from './getConfig'
import { getConfig } from './getConfig'
import { getFilePath } from './getFilePath'
import { logger } from './logger'

export async function getInstalledComponent({ availableComponents, componentName, config }:
{ availableComponents: Component[], componentName: string, config: Config }) {
  const component = availableComponents.find((component) => {
    return component.name === componentName
  })
  if (component == null) {
    return
  }

  const installedFiles: (Component['files'][number] & { localPath: string })[] = []

  for (const file of component.files) {
    const filePath = await getFilePath(file, config)
    if (existsSync(filePath)) {
      installedFiles.push({
        ...file,
        localPath: filePath,
      })
    }
    else {
      return
    }
  }

  if (installedFiles.length === 0) {
    return
  }

  return {
    ...component,
    files: installedFiles,
  }
}

export async function getInstalledComponents() {
  const config = await getConfig('.')
  if (config == null) {
    logger.error('No config file found. Please run `init` to create a config file.')
    return
  }
  const components = await getAvailableComponents()
  const installedComponents = await Promise.all(components.map(async (component) => {
    const installedComponent = await getInstalledComponent(
      { availableComponents: components, componentName: component.name, config },
    )
    if (installedComponent == null) {
      return
    }

    return installedComponent
  }))

  return installedComponents.filter(component => component)
}
