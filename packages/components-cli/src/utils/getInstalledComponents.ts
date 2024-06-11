import { existsSync } from 'node:fs'

import type { Component } from './getComponents'
import { getAvailableComponents } from './getComponents'
import type { Config } from './getConfig'
import { getConfig } from './getConfig'
import { getFilePath } from './getFilePath'
import { logger } from './logger'

export function getInstalledComponent({ availableComponents, componentName, config }:
{ availableComponents: Component[], componentName: string, config: Config }): Component | null {
  const component = availableComponents.find((component) => {
    return component.component === componentName
  })

  if (component == null) {
    return null
  }

  const installedFiles: (Component['files'][number] & { localPath: string })[] = []

  for (const file of component.files) {
    const filePath = getFilePath(file, config)

    if (existsSync(filePath)) {
      installedFiles.push({
        ...file,
        localPath: filePath,
      })
    }
    else {
      return null
    }
  }

  if (installedFiles.length === 0) {
    return null
  }

  return {
    ...component,
    files: installedFiles,
  }
}

export async function getInstalledComponents(): Promise<Component[] | null> {
  const config = await getConfig('.')

  if (config == null) {
    logger.error('No config file found. Please run `init` to create a config file.')

    return null
  }
  const components = await getAvailableComponents()
  const installedComponents = await Promise.all(components.map((component) => {
    const installedComponent = getInstalledComponent(
      { availableComponents: components, componentName: component.component, config },
    )

    if (installedComponent == null) {
      return null
    }

    return installedComponent
  }))

  return installedComponents.filter((component): component is Component => component != null)
}
