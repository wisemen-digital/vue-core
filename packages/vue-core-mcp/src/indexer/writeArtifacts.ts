import { dirname, resolve } from 'node:path'

import {
  ChangelogCollection,
  ChangelogArtifactSchema,
} from '../schemas/changelog'
import {
  ComponentCollection,
  ComponentsArtifactSchema,
} from '../schemas/component'
import {
  StoriesCollection,
  StoriesArtifactSchema,
} from '../schemas/stories'
import {
  StylesCollection,
  StylesArtifactSchema,
} from '../schemas/styles'
import {
  ArtifactManifest,
  ArtifactManifestSchema,
} from '../schemas/common'
import {
  createLogger,
  Logger,
} from '../utils/logger'
import {
  ensureDir,
  getArtifactRoot,
  getHistoryRoot,
  pathExists,
  readJsonIfExists,
  writeJsonFile,
} from '../utils/fs'
import {
  hashContent,
} from '../utils/cache'

export interface WriteArtifactsOptions {
  components: ComponentCollection
  stories: StoriesCollection
  styles: StylesCollection
  changelog: ChangelogCollection
  meta?: {
    sourceVersion?: string
    sourceRevision?: string
  }
  snapshot?: string
  logger?: Logger
}

const MANIFEST_FILE = 'manifest.json'

export async function writeArtifacts(options: WriteArtifactsOptions): Promise<void> {
  const {
    components,
    stories,
    styles,
    changelog,
    meta,
    snapshot,
  } = options

  const logger = options.logger ?? createLogger('indexer', 'writer')

  const artifactRoot = getArtifactRoot()
  await ensureDir(artifactRoot)

  const generatedAt = new Date().toISOString()

  const componentsArtifact = ComponentsArtifactSchema.parse({
    meta: {
      generatedAt,
      hash: hashContent(components),
      sourceVersion: meta?.sourceVersion,
      sourceRevision: meta?.sourceRevision,
      components: components.summaries.length,
    },
    data: components,
  })

  const storiesArtifact = StoriesArtifactSchema.parse({
    meta: {
      generatedAt,
      hash: hashContent(stories),
      sourceVersion: meta?.sourceVersion,
      sourceRevision: meta?.sourceRevision,
    },
    data: stories,
  })

  const stylesArtifact = StylesArtifactSchema.parse({
    meta: {
      generatedAt,
      hash: hashContent(styles),
      sourceVersion: meta?.sourceVersion,
      sourceRevision: meta?.sourceRevision,
    },
    data: styles,
  })

  const changelogArtifact = ChangelogArtifactSchema.parse({
    meta: {
      generatedAt,
      hash: hashContent(changelog),
      sourceVersion: meta?.sourceVersion,
      sourceRevision: meta?.sourceRevision,
    },
    data: changelog,
  })

  await persistArtifact('components.json', componentsArtifact, logger)
  await persistArtifact('stories.json', storiesArtifact, logger)
  await persistArtifact('styles.json', stylesArtifact, logger)
  await persistArtifact('changelog.json', changelogArtifact, logger)

  if (snapshot) {
    await persistSnapshot(snapshot, {
      components: componentsArtifact,
      styles: stylesArtifact,
      stories: storiesArtifact,
      changelog: changelogArtifact,
    })
  }
}

interface PersistableArtifact {
  meta: {
    generatedAt: string
    hash: string
  }
  data: unknown
}

async function persistArtifact(filename: string, artifact: PersistableArtifact, logger: Logger) {
  const artifactRoot = getArtifactRoot()
  const targetPath = resolve(artifactRoot, filename)

  const result = await writeJsonFile(targetPath, artifact)
  if (result) {
    logger.info(`Wrote ${filename}`, {
      hash: artifact.meta.hash,
    })
  }
  else {
    logger.debug(`No changes for ${filename}`)
  }

  await updateManifest(filename, artifact.meta)
}

async function updateManifest(filename: string, meta: { hash: string }) {
  const artifactRoot = getArtifactRoot()
  const manifestPath = resolve(artifactRoot, MANIFEST_FILE)

  const manifest = await readJsonIfExists<ArtifactManifest>(manifestPath) ?? {}
  manifest[filename] = {
    hash: meta.hash,
    updatedAt: new Date().toISOString(),
  }

  await writeJsonFile(manifestPath, manifest)
}

async function persistSnapshot(
  version: string,
  artifacts: Record<string, PersistableArtifact>,
): Promise<void> {
  const historyRoot = getHistoryRoot()
  await ensureDir(historyRoot)

  await Promise.all(
    Object.entries(artifacts).map(async ([key, artifact]) => {
      const filePath = resolve(historyRoot, `${version}-${key}`)
      await writeJsonFile(filePath, artifact)
    }),
  )
}
