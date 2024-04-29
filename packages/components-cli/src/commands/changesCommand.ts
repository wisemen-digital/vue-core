import chalk from 'chalk'
import type { Command } from 'commander'

import { logger } from '@/src/utils/logger'

import { diffComponent } from '../utils/getDifferenceComponent'
import { getInstalledComponents } from '../utils/getInstalledComponents'

export function addChangesCommand({ program }: { program: Command }) {
  program
    .command('changes')
    .name('changes')
    .description('check for changes against the registry')
    .action(async (_name, _opts) => {
      const installedComponents = await getInstalledComponents()
      if (installedComponents == null) {
        return
      }
      let noChanges = true
      for (const component of installedComponents) {
        if (component == null) {
          return
        }
        const changes = await diffComponent(component)
        if (changes.length === 0) {
          return
        }
        noChanges = false
        logger.info(chalk.cyan(`Changes found for ${chalk.green(component.name)}`))

        changes.forEach((change) => {
          logger.warn(`- ${change.filePath} ${chalk.magenta(`(${change.patch.length} changes)`)}`)
        })
      }
      if (noChanges) {
        logger.info(chalk.cyan(`No changes found.`))
      }
    })
}
