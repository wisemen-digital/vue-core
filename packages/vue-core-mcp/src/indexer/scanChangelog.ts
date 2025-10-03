import { finished } from 'node:stream/promises'
import { Readable } from 'node:stream'
import { relative } from 'node:path'

import {
  ChangelogCollection,
  ChangelogEntry,
} from '../schemas/changelog'
import {
  createLogger,
  Logger,
} from '../utils/logger'
import {
  getWorkspaceRoot,
  readFileSafe,
  resolveFromPackage,
} from '../utils/fs'

export interface ScanChangelogOptions {
  changelogPath?: string
  logger?: Logger
}

const DEFAULT_CHANGELOG_PATH = resolveFromPackage('../components/CHANGELOG.md')

export async function scanChangelog(options: ScanChangelogOptions = {}): Promise<ChangelogCollection> {
  const logger = options.logger ?? createLogger('indexer', 'changelog')
  const changelogPath = options.changelogPath ?? DEFAULT_CHANGELOG_PATH
  const absolutePath = changelogPath

  const raw = await readFileSafe(absolutePath)
  if (!raw) {
    logger.warn('CHANGELOG.md not found, falling back to git history', { path: relative(getWorkspaceRoot(), absolutePath) })
    const generated = await generateChangelogFromGit()
    return {
      entries: generated,
    }
  }

  const parsed = parseChangelog(raw)
  return {
    entries: parsed,
  }
}

function parseChangelog(content: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = []

  const versionRegex = /^# \[(?<version>[^\]]+)]/gm
  const matches = Array.from(content.matchAll(versionRegex))

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index]
    const version = match.groups?.version?.trim()
    if (!version) {
      continue
    }

    const start = match.index ?? 0
    const end = matches[index + 1]?.index ?? content.length
    const slice = content.slice(start, end)
    const notes = slice.split('\n').slice(1).join('\n').trim()

    const componentEntries = extractComponentEntries(version, notes)
    if (componentEntries.length > 0) {
      entries.push(...componentEntries)
      continue
    }

    if (notes.length > 0) {
      entries.push({
        version,
        notes,
      })
    }
  }

  return entries
}

function extractComponentEntries(version: string, notes: string): ChangelogEntry[] {
  const lines = notes.split('\n')
  const entries: ChangelogEntry[] = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const componentMatch = /^- \*\*(?<component>[^*]+)\*\*/.exec(line.trim())
    if (!componentMatch) {
      continue
    }

    const component = componentMatch.groups?.component?.trim()
    if (!component) {
      continue
    }

    const detailLines: string[] = []
    let cursor = index + 1
    while (cursor < lines.length) {
      const detailLine = lines[cursor]
      if (/^\s*- \*\*/.test(detailLine.trim())) {
        break
      }

      if (/^\s*-\s+/.test(detailLine) || /^\s{2,}/.test(detailLine)) {
        detailLines.push(detailLine.trim())
      }

      cursor += 1
    }

    entries.push({
      version,
      component,
      notes: detailLines.join('\n') || line.trim(),
    })
    index = cursor - 1
  }

  return entries
}

async function generateChangelogFromGit(): Promise<ChangelogEntry[]> {
  try {
    const conventionalChangelogModule = await import('conventional-changelog') as unknown as {
      default: (options?: Record<string, unknown>) => Readable
    }

    const stream = conventionalChangelogModule.default({ preset: 'angular' })
    const chunks: Buffer[] = []
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    await finished(stream)

    const content = Buffer.concat(chunks).toString('utf8')
    return parseChangelog(content)
  }
  catch {
    return []
  }
}
