import { Command } from 'commander'

import { scanComponents } from './scanComponents'
import { scanStories } from './scanStories'
import { scanStyles } from './scanStyles'
import { scanChangelog } from './scanChangelog'
import { writeArtifacts } from './writeArtifacts'
import { createLogger } from '../utils/logger'
import {
  getCurrentRevision,
  getNearestTag,
} from '../utils/git'

export interface IndexerOptions {
  componentsRoot?: string
  snapshot?: string
  skipStories?: boolean
  skipStyles?: boolean
  skipChangelog?: boolean
}

export async function runIndexer(options: IndexerOptions = {}): Promise<void> {
  const logger = createLogger('indexer')
  const sourceRevision = await getCurrentRevision()
  const nearestTag = await getNearestTag()
  const snapshotVersion = options.snapshot ?? nearestTag

  logger.info('Starting MCP indexer', {
    revision: sourceRevision,
    version: snapshotVersion,
  })

  const components = await logger.time('Collecting components', async () =>
    scanComponents({
      root: options.componentsRoot,
      logger: logger.child('components'),
    }),
  )

  const stories = options.skipStories
    ? { stories: [] }
    : await logger.time('Collecting stories', async () =>
      scanStories({
        root: options.componentsRoot,
        components,
        logger: logger.child('stories'),
      }),
    )

  const styles = options.skipStyles
    ? { byComponent: {}, globalTokens: undefined }
    : await logger.time('Collecting styles', async () =>
      scanStyles({
        root: options.componentsRoot,
        components,
        logger: logger.child('styles'),
      }),
    )

  const changelog = options.skipChangelog
    ? { entries: [] }
    : await logger.time('Collecting changelog', async () =>
      scanChangelog({
        logger: logger.child('changelog'),
      }),
    )

  await logger.time('Writing artifacts', async () =>
    writeArtifacts({
      components,
      stories,
      styles,
      changelog,
      meta: {
        sourceRevision: sourceRevision ?? undefined,
        sourceVersion: nearestTag ?? undefined,
      },
      snapshot: snapshotVersion,
      logger: logger.child('writer'),
    }),
  )

  logger.info('Indexer completed')
}

export async function runCli(argv: string[] = process.argv): Promise<void> {
  const program = new Command()

  program
    .name('mcp-index')
    .description('Generate MCP JSON artifacts for vue-core components')
    .option('--components-root <path>', 'path to components source root')
    .option('--snapshot <version>', 'optional version identifier to persist snapshot under history directory')
    .option('--skip-stories', 'skip story discovery')
    .option('--skip-styles', 'skip style extraction')
    .option('--skip-changelog', 'skip changelog generation')
    .action(async (cmdOptions) => {
      try {
        await runIndexer({
          componentsRoot: cmdOptions.componentsRoot,
          snapshot: cmdOptions.snapshot,
          skipStories: cmdOptions.skipStories,
          skipStyles: cmdOptions.skipStyles,
          skipChangelog: cmdOptions.skipChangelog,
        })
      }
      catch (error) {
        const logger = createLogger('indexer')
        logger.error('Indexer failed', { error })
        process.exitCode = 1
      }
    })

  await program.parseAsync(argv)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runCli().catch((error) => {
    const logger = createLogger('indexer')
    logger.error('Unhandled exception in indexer CLI', { error })
    process.exitCode = 1
  })
}
