import type { Component } from './getComponents'
import type { Config } from './getConfig'
import { unresolveImport } from './resolveImport'

const defaultDirectories = {
  components: '@/components',
  composables: '@/composables',
  icons: '@/icons',
  styles: '@/styles',
  transitions: '@/transitions',
  types: '@/types',
  utils: '@/utils',
}

export function replaceFileDirectories(file: Component['files'][number], config: Config) {
  const defaultDirectoriesKeys = Object.keys(defaultDirectories)

  for (const key of defaultDirectoriesKeys) {
    if (config.resolvedPaths[key as keyof typeof defaultDirectories] == null) {
      continue
    }

    const unresolvedPath
    = unresolveImport(config.resolvedPaths[key as keyof typeof defaultDirectories], config.aliases.root)

    file.content = file.content.replaceAll(
      defaultDirectories[key as keyof typeof defaultDirectories],
      unresolvedPath,
    )
  }

  return file
}
