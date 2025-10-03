import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { resolve } from 'node:path'

import {
  loadComponentsArtifact,
} from '../utils/artifacts'
import {
  createLogger,
} from '../utils/logger'
import {
  ComponentsArtifactSchema,
  ComponentDetail,
  DiffResult,
} from '../schemas/component'
import {
  ComponentProp,
  ComponentPropSchema,
  PropChange,
} from '../schemas/props'
import {
  getHistoryRoot,
  readJsonIfExists,
  getWorkspaceRoot,
  resolveFromPackage,
} from '../utils/fs'
import {
  readFileAtRevision,
} from '../utils/git'
import {
  buildComponentDetail,
} from '../indexer/scanComponents'
import {
  parseSource,
} from 'vue-docgen-api'

const InputSchema = z.object({
  name: z.string().min(1, 'Component name is required'),
  from: z.string().min(1, 'from version is required'),
  to: z.string().min(1, 'to version is required'),
})

const COMPONENTS_ROOT = resolveFromPackage('../components/src')

export type DiffComponentInput = z.infer<typeof InputSchema>

export async function diffComponent(input: DiffComponentInput): Promise<DiffResult> {
  const baseArtifact = await loadComponentsArtifact()
  const logger = createLogger('tool', 'diffComponent')

  const targetDetail = await resolveComponentDetail(input.name, input.to, baseArtifact)
  const baseDetail = await resolveComponentDetail(input.name, input.from, baseArtifact)

  if (!targetDetail) {
    throw new Error(`Unable to resolve component ${input.name} for version ${input.to}`)
  }

  if (!baseDetail) {
    throw new Error(`Unable to resolve component ${input.name} for version ${input.from}`)
  }

  const diff = computePropDiff(baseDetail.props, targetDetail.props)
  const deprecations = targetDetail.props
    .filter(prop => prop.deprecated)
    .map(prop => prop.name)
    .sort()

  const result: DiffResult = {
    component: input.name,
    from: input.from,
    to: input.to,
    addedProps: diff.added,
    removedProps: diff.removed,
    changedProps: diff.changed,
    deprecations,
  }

  logger.info('Computed component diff', {
    name: input.name,
    added: diff.added.length,
    removed: diff.removed.length,
    changed: diff.changed.length,
  })

  return result
}

async function resolveComponentDetail(
  name: string,
  version: string,
  currentArtifact: Awaited<ReturnType<typeof loadComponentsArtifact>>,
): Promise<ComponentDetail | undefined> {
  if (isCurrentVersion(version)) {
    return currentArtifact.data.details[name]
  }

  const snapshot = await loadSnapshot(version)
  if (snapshot?.data.details[name]) {
    return snapshot.data.details[name]
  }

  const currentDetail = currentArtifact.data.details[name]
  if (!currentDetail) {
    return undefined
  }

  const absolutePath = resolve(getWorkspaceRoot(), currentDetail.path)
  const source = await readFileAtRevision(version, currentDetail.path)
  if (!source) {
    return undefined
  }

  try {
    const doc = await parseSource(source, absolutePath, {
      alias: {
        '@': COMPONENTS_ROOT,
      },
    })

    return buildComponentDetail(doc, absolutePath, COMPONENTS_ROOT)
  }
  catch {
    return undefined
  }
}

function isCurrentVersion(version: string): boolean {
  const lowered = version.toLowerCase()
  return lowered === 'current' || lowered === 'head' || lowered === 'latest'
}

async function loadSnapshot(version: string) {
  const historyRoot = getHistoryRoot()
  const snapshotPath = resolve(historyRoot, `${version}-components.json`)
  const snapshot = await readJsonIfExists<unknown>(snapshotPath)
  if (!snapshot) {
    return undefined
  }

  return ComponentsArtifactSchema.parse(snapshot)
}

interface PropDiffResult {
  added: ComponentProp[]
  removed: ComponentProp[]
  changed: PropChange[]
}

function computePropDiff(fromProps: ComponentProp[], toProps: ComponentProp[]): PropDiffResult {
  const fromMap = new Map(fromProps.map(prop => [prop.name, prop]))
  const toMap = new Map(toProps.map(prop => [prop.name, prop]))

  const added: ComponentProp[] = []
  const removed: ComponentProp[] = []
  const changed: PropChange[] = []

  for (const [name, prop] of toMap.entries()) {
    if (!fromMap.has(name)) {
      added.push(ComponentPropSchema.parse(prop))
      continue
    }

    const previous = fromMap.get(name)!
    const change: PropChange = {
      name,
    }

    if (prop.type !== previous.type) {
      change.from = previous.type
      change.to = prop.type
    }

    if ((prop.default ?? '') !== (previous.default ?? '')) {
      change.description = `Default changed from "${previous.default ?? 'undefined'}" to "${prop.default ?? 'undefined'}"`
    }

    if (change.from || change.description) {
      changed.push(change)
    }
  }

  for (const [name, prop] of fromMap.entries()) {
    if (!toMap.has(name)) {
      removed.push(ComponentPropSchema.parse(prop))
    }
  }

  added.sort((a, b) => a.name.localeCompare(b.name))
  removed.sort((a, b) => a.name.localeCompare(b.name))
  changed.sort((a, b) => a.name.localeCompare(b.name))

  return {
    added,
    removed,
    changed,
  }
}

export function registerDiffComponentTool(server: McpServer) {
  const logger = createLogger('tool', 'diffComponent')

  server.registerTool('diffComponent', {
    title: 'Diff component props between versions',
    description: 'Compare component props between two versions using stored snapshots or git history as fallback.',
    inputSchema: {
      name: z.string().min(1),
      from: z.string().min(1),
      to: z.string().min(1),
    },
  }, async (args) => {
    const parsed = InputSchema.parse(args ?? {})
    try {
      const result = await diffComponent(parsed)
      return {
        content: [
          {
            type: 'json',
            json: result,
          },
        ],
      }
    }
    catch (error) {
      logger.error('Component diff failed', {
        name: parsed.name,
        error,
      })
      throw error
    }
  })
}
