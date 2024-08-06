import type { Command } from 'commander'
import prompts from 'prompts'

import { addInternalDependencies } from '@/utils/addInternalDependencies'
import {
  getAvailableComponents,
  getGlobalComponents,
} from '@/utils/getComponents'
import type { Config } from '@/utils/getConfig'
import { getInstalledComponents } from '@/utils/getInstalledComponents'
import type { PackageManager } from '@/utils/getPackageManager'
import { logger } from '@/utils/logger'
import { mergeComponent } from '@/utils/mergeComponent'

interface AddUpdateCommandOptions {
  cliConfig: Config | null
  packageManager: PackageManager
  program: Command
}

export function addUpdateCommand({
  cliConfig,
  packageManager,
  program,
}: AddUpdateCommandOptions) {
  program
    .command('update')
    .description('update all components to your project')
    .argument('[components...]', 'name of components')
    .action(async (components: string[], options: { all: boolean, overwrite: boolean }) => {
      if (cliConfig == null) {
        logger.error(`No config found. Please run 'init' first.`)

        return
      }

      const promptAnswers = await prompts([
        {
          name: 'updateDependencies',
          initial: true,
          message: `Do you also want to update the necessary dependencies?`,
          type: 'confirm',
        },
      ])

      const availableComponents = await getAvailableComponents()
      const globalComponents = await getGlobalComponents()
      const installedComponents = await getInstalledComponents()

      const installedAvailableComponents = availableComponents
        .filter((component) => installedComponents?.some(
          (installedComponent) =>
            installedComponent.component === component.component,
        ))

      if (availableComponents?.length == null || availableComponents?.length === 0) {
        logger.error(
          'An error occurred while fetching components. Please try again.',
        )
        process.exit(0)
      }

      const selectedComponents = [
        ...installedAvailableComponents,
        ...globalComponents,
      ]

      logger.success(
      `Updating ${selectedComponents.length} component(s)...`,
      )

      // Add all components and their internal dependencies to the list of components to install recursively.
      const allComponents = new Set(addInternalDependencies(
        { addedComponents: selectedComponents, availableComponents, selectedComponents },
      ))

      for (const component of Array.from(allComponents)) {
        await mergeComponent({
          cliConfig,
          options: {
            ...options,
            overwrite: true,
          },
          packageManager,
          updateDependencies: promptAnswers.updateDependencies,
          component,
        })
      }
    })
}
