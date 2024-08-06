import chalk from 'chalk'
import type { Command } from 'commander'

import type { Config } from '@/utils/getConfig'
import { diffComponent } from '@/utils/getDifferenceComponent'
import { getInstalledComponents } from '@/utils/getInstalledComponents'
import { logger } from '@/utils/logger'

export function addChangesCommand({ cliConfig, program }:
{ cliConfig: Config | null, program: Command }) {
  program
    .command('changes')
    .name('changes')
    .description('check for changes against the registry')
    .action(async (_name, _opts) => {
      if (cliConfig == null) {
        logger.error(`No config found. Please run 'init' first.`)

        return
      }
      const installedComponents = await getInstalledComponents()

      if (installedComponents == null) {
        return
      }
      let noChanges = true

      for (const component of installedComponents) {
        if (component == null) {
          continue
        }
        const changes = await diffComponent(component, cliConfig)

        if (changes.length === 0) {
          continue
        }

        noChanges = false
        logger.info(chalk.cyan(`Changes found for ${chalk.green(component.component)}`))

        changes.forEach((change) => {
          logger.warn(`- ${change.filePath} ${chalk.magenta(`(${change.patch.length} changes)`)}`)
        })
      }
      if (noChanges) {
        logger.info(chalk.cyan(`No changes found.`))
      }
    })
}
