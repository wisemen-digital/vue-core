#!/usr/bin/env node
import { Command } from 'commander'

import { addAddCommand } from './commands/addCommand'
import { addChangesCommand } from './commands/changesCommand'
import { addDiffCommand } from './commands/diffCommand'
import { addInitCommand } from './commands/initCommand'
import { addInstalledCommand } from './commands/installedCommand'
import { getConfig } from './utils/getConfig'
import { getPackageInfo } from './utils/getPackageInfo'
import { getPackageManager } from './utils/getPackageManager'
import { getProjectInfo } from './utils/getProjectInfo'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

// node ./dist/index.js add button
async function main() {
  const packageInfo = getPackageInfo()
  const projectInfo = await getProjectInfo()
  const cliConfig = await getConfig('.')

  const packageManager = await getPackageManager()

  const program = new Command()
    .name('wisemen-ui')
    .description('Add wisemen-ui components to your project')
    .version(
      packageInfo.version ?? '0.0.1',
      '-v, --version',
      'display the version number',
    )
  addInitCommand({ cliConfig, packageManager, program, projectInfo })
  addAddCommand({ cliConfig, packageManager, program })
  addInstalledCommand({ program })
  addDiffCommand({ program })
  addChangesCommand({ program })

  program.parse()
}

void main()
