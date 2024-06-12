import type { FileType } from './getComponents'
import type { Config } from './getConfig'

export function getFileInstallationFolder(fileType: FileType, config: Config) {
  return config.resolvedPaths[fileType]
}
