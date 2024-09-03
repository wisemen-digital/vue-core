import { existsSync, promises as fs } from 'node:fs'
import path from 'node:path'

import { execa } from 'execa'
import ora from 'ora'

import { getMergedFileContent } from '@/utils/getMergedFileContent'

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
  updateDependencies?: boolean
  component: Component
}

export async function mergeComponent(
  { cliConfig, options, packageManager, updateDependencies, component }: InstallComponentOptions,
) {
  const componentSpinner = ora(`${component.component}...`).start()

  if (cliConfig == null) {
    return componentSpinner.fail(`No config found. Please run '@wisemen/vue-core-cli init' first.`)
  }

  // Write the files.
  for (const file of component.files) {
    const installationDir = getFileInstallationFolder(file.type, cliConfig)
    const fileDir = file.dir === '' ? `${installationDir}` : `${installationDir}/${file.dir}`
    const resolvedFile = replaceFileDirectories(file, cliConfig)
    const spinner = ora(`Updating ${fileDir}/${resolvedFile.name}...`).start()

    if (!existsSync(path.resolve(fileDir))) {
      await fs.mkdir(path.resolve(fileDir), { recursive: true })
    }

    const filePath = path.resolve(fileDir, resolvedFile.name)

    if (existsSync(filePath) && !options.overwrite) {
      spinner.warn(`${resolvedFile.name} already exists. Skipping. Use --overwrite to overwrite existing files`)
      spinner.stop()

      continue
    }

    const localFileContent = await fs.readFile(filePath, 'utf8')

    if (fileHasMergeConflict(localFileContent)) {
      spinner.warn(`${filePath} has a merge conflict. Solve it before updating again.`)
      spinner.stop()

      continue
    }

    const registeryFileContent = resolvedFile.content
    const mergedFileContent = await getMergedFileContent({
      localContent: localFileContent,
      registeryContent: registeryFileContent,
    })

    if (mergedFileContent !== localFileContent) {
      await fs.writeFile(filePath, mergedFileContent)
      spinner.succeed(`${filePath} has been merged. Check the changes.`)
      spinner.stop()

      continue
    }

    spinner.stop()
  }

  componentSpinner.stop()

  // Install dependencies.
  if (updateDependencies) {
    if (component.dependencies?.length != null && component.dependencies.length > 0) {
      const spinner = ora(`Installing ${component.dependencies.length} dependencies...\n${component.dependencies.join(', ')}`).start()

      await execa(packageManager, [
        packageManager === 'npm' ? 'install' : 'add',
        ...component.dependencies,
      ])
      spinner.succeed(
      `Installed ${component.dependencies.length} dependencies.\n${component.dependencies.join(', ')}`,
      )
    }
  }
}

function fileHasMergeConflict(fileContent: string) {
  return fileContent.includes('>>>>>>> registeryFile') || fileContent.includes('<<<<<<< localFile') || fileContent.includes('=======')
}
