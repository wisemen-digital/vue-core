import { existsSync, promises as fs } from 'node:fs'
import path from 'node:path'

import { execa } from 'execa'
import ora from 'ora'

import type { Component } from './getComponents'
import type { Config } from './getConfig'
import { getFileInstallationFolder } from './getFileInstallationFolder'
import type { PackageManager } from './getPackageManager'
import { replaceFileDirectories } from './replaceFileDirectories'

export interface InstallComponentOptions {
  cliConfig: Config | null
  inRoot?: boolean
  options: {
    overwrite: boolean
  }
  packageManager: PackageManager
  component: Component
}

export async function installComponent({ cliConfig, options, packageManager, component }: InstallComponentOptions) {
  const componentSpinner = ora(`${component.component}...`).start()

  if (cliConfig == null) {
    return componentSpinner.fail(`No config found. Please run '@wisemen/vue-core-cli init' first.`)
  }

  // Write the files.
  for (const file of component.files) {
    const installationDir = getFileInstallationFolder(file.type, cliConfig)

    const fileDir = file.dir === '' ? `${installationDir}` : `${installationDir}/${file.dir}`
    const resolvedFile = replaceFileDirectories(file, cliConfig)
    const spinner = ora(`Creating ${fileDir}/${resolvedFile.name}...`).start()

    if (!existsSync(path.resolve(fileDir))) {
      await fs.mkdir(path.resolve(fileDir), { recursive: true })
    }

    const filePath = path.resolve(fileDir, resolvedFile.name)

    if (existsSync(filePath) && !options.overwrite) {
      spinner.warn(`${resolvedFile.name} already exists. Skipping. Use --overwrite to overwrite existing files`)
      spinner.stop()

      continue
    }

    await fs.writeFile(filePath, resolvedFile.content)
    spinner.stop()
  }

  // Install dependencies.
  if (component.dependencies?.length != null && component.dependencies.length > 0) {
    const spinner = ora(`Installing dependencies...`).start()

    await execa(packageManager, [
      packageManager === 'npm' ? 'install' : 'add',
      ...component.dependencies,
    ])
    spinner.succeed(
      `Installed ${component.dependencies.length} dependencies.\n${component.dependencies.join(', ')}`,
    )
  }

  componentSpinner.succeed(`${component.component} installed.`)
}
