import type { FileType } from './getComponents'
import type { Config } from './getConfig'

export function getFileTypeName(fileType: FileType): keyof Config['resolvedPaths'] {
  switch (fileType) {
    case 'components':
      return 'components'
    case 'composables':
      return 'composables'
    case 'root':
      return 'config'
    case 'icons':
      return 'icons'
    case 'libs':
      return 'libs'
    case 'styles':
      return 'styles'
    case 'types':
      return 'types'
    case 'utils':
      return 'utils'
    case 'config':
      return 'configFolder'
  }
}
export function getFileInstallationFolder(fileType: FileType, config: Config) {
  return `${config.resolvedPaths[getFileTypeName(fileType)]}`
}
