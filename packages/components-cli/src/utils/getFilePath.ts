import type { Component } from './getComponents'
import type { Config } from './getConfig'
import { getFileInstallationFolder } from './getFileInstallationFolder'

export function getFilePath(file: Component['files'][number], config: Config) {
  const installationDir = getFileInstallationFolder(file.type, config)

  const fileDir = file.dir === '' ? `${installationDir}` : `${installationDir}/${file.dir}`
  const filePath = `${fileDir}/${file.name}`

  return filePath
}
