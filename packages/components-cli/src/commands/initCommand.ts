import { promises as fs } from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import type { Command } from 'commander'
import prompts from 'prompts'

import {
  getGlobalComponents,
  getGlobalConfig,
} from '@/utils/getComponents'
import type { Config } from '@/utils/getConfig'
import {
  getConfig,
  rawConfigSchema,
  resolveConfigPaths,
} from '@/utils/getConfig'
import type { PackageManager } from '@/utils/getPackageManager'
import { installComponent } from '@/utils/installComponent'
import { logger } from '@/utils/logger'
import { baseUrl } from '@/utils/staticVariables'

interface AddInitCommandOptions {
  cliConfig: Config | null
  packageManager: PackageManager
  program: Command
  projectInfo: {
    appDir: boolean
    componentsUiDir: boolean
    srcComponentsUiDir: boolean
    srcDir: boolean
    tsconfig: any
  }
}

export const DEFAULT_CONFIG = './'
export const DEFAULT_ROOT = './src'
export const DEFAULT_ROOT_ALIAS = '@'
export const DEFAULT_COMPONENTS = 'components/core'
export const DEFAULT_UTILS = 'utils/core'
export const DEFAULT_COMPOSABLES = 'composables/core'
export const DEFAULT_LIBS = 'libs'
export const DEFAULT_STYLES = 'assets/styles'
export const DEFAULT_ICONS = 'icons'
export const DEFAULT_TYPES = 'types/core'

function highlight(text: string) {
  return chalk.cyan(text)
}

async function promptForConfig(optionsCwd: any) {
  if (optionsCwd.yes == null) {
    const { proceed } = await prompts({
      name: 'proceed',
      initial: true,
      message:
        'Running this command will install dependencies and overwrite your existing tailwind.config.js / globals.css. Proceed?',
      type: 'confirm',
    })

    if (proceed == null) {
      process.exit(0)
    }
  }

  const options = await prompts([
    {
      name: 'root',
      initial: DEFAULT_ROOT,
      message: `Where is your ${highlight('root')} of your project?`,
      type: 'text',
    },
    {
      name: 'rootAlias',
      initial: DEFAULT_ROOT_ALIAS,
      message: `What is the alias for your root?`,
      type: 'text',
    },
    {
      name: 'config',
      initial: DEFAULT_CONFIG,
      message: `Where are your ${highlight('config files')}, like tailwind.config.js located?`,
      type: 'text',
    },
    {
      name: 'styles',
      initial: DEFAULT_STYLES,
      message: `Configure the folder from your root for ${highlight('styles')}:`,
      type: 'text',
    },
    {
      name: 'libs',
      initial: DEFAULT_LIBS,
      message: `Configure the folder from your root for ${highlight('libs')}:`,
      type: 'text',
    },
    {
      name: 'components',
      initial: DEFAULT_COMPONENTS,
      message: `Configure the folder from your root for ${highlight('components')}:`,
      type: 'text',
    },
    {
      name: 'types',
      initial: DEFAULT_TYPES,
      message: `Configure the folder from your root for ${highlight('types')}:`,
      type: 'text',
    },
    {
      name: 'utils',
      initial: DEFAULT_UTILS,
      message: `Configure the folder from your root for ${highlight('utils')}:`,
      type: 'text',
    },
    {
      name: 'composables',
      initial: DEFAULT_COMPOSABLES,
      message: `Configure the folder from your root for ${highlight('composables')}:`,
      type: 'text',
    },
    {
      name: 'icons',
      initial: DEFAULT_ICONS,
      message: `Configure the folder from your root for ${highlight('icons')}:`,
      type: 'text',
    },
  ])

  const config = rawConfigSchema.parse({
    $schema: baseUrl,
    aliases: {
      components: options.components,
      composables: options.composables,
      config: options.config,
      icons: options.icons,
      libs: options.libs,
      root: options.root,
      rootAlias: options.rootAlias,
      styles: options.styles,
      types: options.types,
      utils: options.utils,
    },
    style: 'wisemen',
  })

  const targetPath = path.resolve('components.json')

  await fs.writeFile(targetPath, JSON.stringify(config, null, 2), 'utf8')

  return resolveConfigPaths('./', config)
}

export function addInitCommand({
  packageManager,
  program,
}: AddInitCommandOptions) {
  program
    .command('init')
    .description('Configure your Vue project.')
    .option('-y, --yes', 'Skip confirmation prompt.')
    .action(async (options) => {
      logger.warn(
        'This command assumes a Vue project with TypeScript and Tailwind CSS.',
      )
      logger.warn('')

      const config = await getConfig('/')

      if (config != null) {
        logger.error('Project already configured.')
      }

      logger.info('No config found. Setting up new config.')

      const configOptions = await promptForConfig(options)

      const globalConfig = await getGlobalConfig()
      const globalComponents = await getGlobalComponents()

      for (const component of Array.from(globalConfig)) {
        await installComponent({
          cliConfig: configOptions,
          inRoot: true,
          options,
          packageManager,
          component,
        })
      }

      for (const component of Array.from(globalComponents)) {
        await installComponent({
          cliConfig: configOptions,
          inRoot: true,
          options,
          packageManager,
          component,
        })
      }
    })
}
