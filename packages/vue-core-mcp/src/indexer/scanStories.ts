import { basename, dirname, relative, resolve } from 'node:path'

import fg from 'fast-glob'

import {
  StoriesCollection,
  Story,
} from '../schemas/stories'
import {
  ComponentCollection,
} from '../schemas/component'
import {
  createLogger,
  Logger,
} from '../utils/logger'
import {
  getWorkspaceRoot,
  readFileSafe,
  resolveFromPackage,
} from '../utils/fs'

export interface ScanStoriesOptions {
  root?: string
  logger?: Logger
  components?: ComponentCollection
}

const DEFAULT_PATTERNS = [
  '**/*.story.@(vue|ts|tsx|mdx)',
  '**/*.stories.@(ts|tsx|js|mdx)',
  '**/*demo.vue',
  '**/*Demo.vue',
  '**/*example.vue',
]

const DEFAULT_IGNORES = [
  '**/__tests__/**',
  '**/test/**',
  '**/*.spec.*',
]

const DEFAULT_ROOT = resolveFromPackage('../components/src')

export async function scanStories(options: ScanStoriesOptions = {}): Promise<StoriesCollection> {
  const root = options.root ?? DEFAULT_ROOT
  const logger = options.logger ?? createLogger('indexer', 'stories')
  const components = options.components

  const files = await fg(DEFAULT_PATTERNS, {
    cwd: root,
    absolute: true,
    ignore: DEFAULT_IGNORES,
  })

  if (files.length === 0) {
    return {
      stories: [],
    }
  }

  const componentDirIndex = buildComponentDirIndex(components)

  const stories: Story[] = []

  for (const file of files) {
    const code = await readFileSafe(file)
    if (!code) {
      logger.warn('Unable to read story file', { file })
      continue
    }

    const component = inferComponentName(file, componentDirIndex, components)
    if (!component) {
      logger.debug('Skipping story without identifiable component', { file })
      continue
    }

    stories.push({
      id: `${component}:${relative(root, file)}`,
      title: createTitleFromFile(file),
      component,
      file: relative(getWorkspaceRoot(), file),
      code,
    })
  }

  stories.sort((a, b) => a.component.localeCompare(b.component) || a.title.localeCompare(b.title))

  return {
    stories,
  }
}

function buildComponentDirIndex(components?: ComponentCollection): Map<string, string> {
  const index = new Map<string, string>()
  if (!components) {
    return index
  }

  for (const detail of Object.values(components.details)) {
    const absolutePath = resolve(getWorkspaceRoot(), detail.path)
    index.set(detail.name, dirname(absolutePath))
  }

  return index
}

function inferComponentName(
  file: string,
  componentDirIndex: Map<string, string>,
  components?: ComponentCollection,
): string | undefined {
  if (componentDirIndex.size === 0 || !components) {
    return undefined
  }

  let selected: string | undefined
  let longestMatch = 0

  for (const [component, dir] of componentDirIndex.entries()) {
    if (file.startsWith(dir) && dir.length > longestMatch) {
      selected = component
      longestMatch = dir.length
    }
  }

  if (selected) {
    return selected
  }

  const rel = components ? components.summaries.map(summary => summary.name) : []
  for (const name of rel) {
    if (file.toLowerCase().includes(name.toLowerCase())) {
      return name
    }
  }

  return undefined
}

function createTitleFromFile(file: string): string {
  const name = basename(file).replace(/\.[^.]+$/, '')
  return name
    .replace(/[-_.]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/^./, (char) => char.toUpperCase())
}
