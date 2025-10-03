import { relative, resolve } from 'node:path'

import fg from 'fast-glob'

import {
  StylesCollection,
  Styles,
} from '../schemas/styles'
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

export interface ScanStylesOptions {
  root?: string
  components?: ComponentCollection
  logger?: Logger
}

const DEFAULT_ROOT = resolveFromPackage('../components/src')

export async function scanStyles(options: ScanStylesOptions = {}): Promise<StylesCollection> {
  const root = options.root ?? DEFAULT_ROOT
  const components = options.components
  const logger = options.logger ?? createLogger('indexer', 'styles')

  const byComponent: Record<string, Styles> = {}

  if (components) {
    for (const detail of Object.values(components.details)) {
      const absolutePath = resolve(getWorkspaceRoot(), detail.path)
      const source = await readFileSafe(absolutePath)
      if (!source) {
        logger.debug('Unable to read component source for styles', { path: detail.path })
        continue
      }

      const styleBlocks = extractStyleBlocks(source)
      const templateClasses = extractTemplateClasses(source)

      const cssVars = new Set<string>()
      const classes = new Set<string>(templateClasses)
      const sources: string[] = [relative(getWorkspaceRoot(), absolutePath)]

      for (const block of styleBlocks) {
        const vars = extractCssVariables(block)
        vars.forEach(value => cssVars.add(value))

        const blockClasses = extractCssClasses(block)
        blockClasses.forEach(value => classes.add(value))
      }

      if (cssVars.size === 0 && classes.size === 0) {
        continue
      }

      byComponent[detail.name] = {
        cssVars: Array.from(cssVars).sort(),
        classes: Array.from(classes).sort(),
        sources,
      }
    }
  }

  const globalTokens = await collectGlobalTokens(root)

  return {
    byComponent,
    globalTokens,
  }
}

function extractStyleBlocks(source: string): string[] {
  const blocks: string[] = []
  const regex = /<style[\s\S]*?>([\s\S]*?)<\/style>/gi
  let match: RegExpExecArray | null
  while ((match = regex.exec(source)) !== null) {
    if (match[1]) {
      blocks.push(match[1])
    }
  }
  return blocks
}

function extractTemplateClasses(source: string): string[] {
  const classes = new Set<string>()
  const regex = /class\s*=\s*["']([^"']+)["']/gi
  let match: RegExpExecArray | null
  while ((match = regex.exec(source)) !== null) {
    const classNames = match[1]
      .split(/\s+/)
      .map(name => name.trim())
      .filter(Boolean)
    classNames.forEach(name => classes.add(name))
  }
  return Array.from(classes)
}

function extractCssVariables(block: string): string[] {
  const vars = new Set<string>()
  const regex = /--([a-zA-Z0-9-_]+)/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(block)) !== null) {
    if (match[1]) {
      vars.add(`--${match[1]}`)
    }
  }
  return Array.from(vars)
}

function extractCssClasses(block: string): string[] {
  const classes = new Set<string>()
  const regex = /\.([a-zA-Z0-9_-]+)/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(block)) !== null) {
    if (match[1]) {
      classes.add(match[1])
    }
  }
  return Array.from(classes)
}

async function collectGlobalTokens(root: string): Promise<Record<string, string> | undefined> {
  const tokens: Record<string, string> = {}

  const tokenFiles = await fg([
    'styles/**/*.css',
    '**/*tokens.@(ts|js|json|scss)',
  ], {
    cwd: root,
    absolute: true,
  })

  for (const file of tokenFiles) {
    const content = await readFileSafe(file)
    if (!content) {
      continue
    }

    const vars = extractCssVariables(content)
    for (const variable of vars) {
      tokens[variable] = relative(getWorkspaceRoot(), file)
    }
  }

  return Object.keys(tokens).length > 0 ? tokens : undefined
}
