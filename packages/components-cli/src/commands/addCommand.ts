import type { Command } from 'commander'

import { addInternalDependencies } from '@/utils/addInternalDependencies'
import { getAvailableComponents } from '@/utils/getComponents'
import type { Config } from '@/utils/getConfig'
import type { PackageManager } from '@/utils/getPackageManager'
import { installComponent } from '@/utils/installComponent'
import { logger } from '@/utils/logger'
import { promptForComponents } from '@/utils/promptComponents'

interface AddAddCommandOptions {
  cliConfig: Config | null
  packageManager: PackageManager
  program: Command
}

export function addAddCommand({
  cliConfig,
  packageManager,
  program,
}: AddAddCommandOptions) {
  program
    .command('add')
    .description('add components to your project')
    .option('-o, --overwrite', 'Overwrite existing components.')
    .option('-a, --all', 'Install all components.')
    .argument('[components...]', 'name of components')
    .action(async (components: string[], options: { all: boolean, overwrite: boolean }) => {
      if (cliConfig == null) {
        logger.error(`No config found. Please run 'init' first.`)

        return
      }

      const availableComponents = await getAvailableComponents()

      if (availableComponents?.length == null || availableComponents?.length === 0) {
        logger.error(
          'An error occurred while fetching components. Please try again.',
        )
        process.exit(0)
      }

      let selectedComponents = availableComponents.filter((component) =>
        components.includes(component.component))

      if (options.all) {
        selectedComponents = availableComponents
      }

      if (selectedComponents?.length == null || selectedComponents?.length === 0) {
        selectedComponents = await promptForComponents(availableComponents)
      }

      if (selectedComponents?.length == null || selectedComponents?.length === 0) {
        logger.warn('No components selected. Nothing to install.')
        process.exit(0)
      }

      logger.success(
        `Installing ${selectedComponents.length} component(s) and dependencies...`,
      )

      // Add all components and their internal dependencies to the list of components to install recursively.
      const allComponents = new Set(addInternalDependencies(
        { addedComponents: selectedComponents, availableComponents, selectedComponents },
      ))

      for (const component of Array.from(allComponents)) {
        await installComponent({
          cliConfig,
          options,
          packageManager,
          component,
        })
      }
    })
}
