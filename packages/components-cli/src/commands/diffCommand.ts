import chalk from 'chalk'
import type { Command } from 'commander'
import * as z from 'zod'

import type { Config } from '@/utils/getConfig'
import { diffComponent } from '@/utils/getDifferenceComponent'
import { getInstalledComponents } from '@/utils/getInstalledComponents'
import { logger } from '@/utils/logger'
import { printDiff } from '@/utils/printDifferences'
import { promptForComponent } from '@/utils/promptComponents'

const updateOptionsSchema = z.object({
  component: z.string().optional(),
})

export function addDiffCommand({ cliConfig, program }: { cliConfig: Config | null, program: Command }) {
  program
    .command('diff')
    .name('diff')
    .description('check for updates against the registry')
    .argument('[component]', 'the component name')
    .action(async (name, _opts) => {
      if (cliConfig == null) {
        logger.error(`No config found. Please run 'init' first.`)

        return
      }
      const options = updateOptionsSchema.parse({
        component: name,
      })

      const installedComponents = await getInstalledComponents()

      if (installedComponents == null) {
        return
      }

      if (options.component == null) {
        const component = await promptForComponent(installedComponents)

        options.component = component.component
      }
      const component = installedComponents.find((component) => {
        return component?.component === options.component
      })

      if (component == null) {
        logger.error(
          `The component ${chalk.green(options.component)} does not exist.`,
        )
        process.exit(1)
      }

      const changes = await diffComponent(component, cliConfig)

      if (changes.length === 0) {
        logger.info(`No updates found for ${options.component}.`)
        process.exit(0)
      }

      for (const change of changes) {
        logger.info(`- ${change.filePath}`)
        await printDiff(change.patch)
        logger.info('')
      }
    })
}
