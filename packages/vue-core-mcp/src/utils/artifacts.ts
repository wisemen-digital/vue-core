import { resolve } from 'node:path'

import {
  ChangelogArtifact,
  ChangelogArtifactSchema,
} from '../schemas/changelog'
import {
  ComponentsArtifact,
  ComponentsArtifactSchema,
} from '../schemas/component'
import {
  StoriesArtifact,
  StoriesArtifactSchema,
} from '../schemas/stories'
import {
  StylesArtifact,
  StylesArtifactSchema,
} from '../schemas/styles'
import {
  getArtifactRoot,
  pathExists,
  readJsonFile,
} from './fs'
import {
  memoizeAsync,
  resetCache,
} from './cache'

const COMPONENTS_FILE = 'components.json'
const STORIES_FILE = 'stories.json'
const STYLES_FILE = 'styles.json'
const CHANGELOG_FILE = 'changelog.json'

export async function loadComponentsArtifact(): Promise<ComponentsArtifact> {
  const artifactRoot = getArtifactRoot()
  const path = resolve(artifactRoot, COMPONENTS_FILE)
  const exists = await pathExists(path)
  if (!exists) {
    throw new Error(`components artifact missing at ${path}`)
  }

  return memoizeAsync(`artifact:${COMPONENTS_FILE}`, async () => {
    const json = await readJsonFile<unknown>(path)
    return ComponentsArtifactSchema.parse(json)
  })
}

export async function loadStoriesArtifact(): Promise<StoriesArtifact> {
  const artifactRoot = getArtifactRoot()
  const path = resolve(artifactRoot, STORIES_FILE)
  const exists = await pathExists(path)
  if (!exists) {
    return {
      meta: {
        generatedAt: '',
        hash: '',
      },
      data: {
        stories: [],
      },
    }
  }

  return memoizeAsync(`artifact:${STORIES_FILE}`, async () => {
    const json = await readJsonFile<unknown>(path)
    return StoriesArtifactSchema.parse(json)
  })
}

export async function loadStylesArtifact(): Promise<StylesArtifact> {
  const artifactRoot = getArtifactRoot()
  const path = resolve(artifactRoot, STYLES_FILE)
  const exists = await pathExists(path)
  if (!exists) {
    return {
      meta: {
        generatedAt: '',
        hash: '',
      },
      data: {
        byComponent: {},
        globalTokens: undefined,
      },
    }
  }

  return memoizeAsync(`artifact:${STYLES_FILE}`, async () => {
    const json = await readJsonFile<unknown>(path)
    return StylesArtifactSchema.parse(json)
  })
}

export async function loadChangelogArtifact(): Promise<ChangelogArtifact> {
  const artifactRoot = getArtifactRoot()
  const path = resolve(artifactRoot, CHANGELOG_FILE)
  const exists = await pathExists(path)
  if (!exists) {
    return {
      meta: {
        generatedAt: '',
        hash: '',
      },
      data: {
        entries: [],
      },
    }
  }

  return memoizeAsync(`artifact:${CHANGELOG_FILE}`, async () => {
    const json = await readJsonFile<unknown>(path)
    return ChangelogArtifactSchema.parse(json)
  })
}

export function clearArtifactCache(): void {
  resetCache()
}
