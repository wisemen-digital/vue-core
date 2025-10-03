import { basename, extname, relative } from 'node:path'

import fg from 'fast-glob'
import {
  ComponentDoc,
  EventDescriptor,
  MethodDescriptor,
  PropDescriptor,
  SlotDescriptor,
  parse,
} from 'vue-docgen-api'

import {
  ComponentCollection,
  ComponentDetail,
  ComponentDetailSchema,
  ComponentEvent,
  ComponentMethod,
  ComponentSummary,
  ComponentSlot,
  UsageExample,
} from '../schemas/component'
import {
  ComponentProp,
  ComponentPropSchema,
} from '../schemas/props'
import {
  createLogger,
  Logger,
} from '../utils/logger'
import {
  getWorkspaceRoot,
  resolveFromPackage,
} from '../utils/fs'

export interface ScanComponentsOptions {
  root?: string
  patterns?: string[]
  ignore?: string[]
  logger?: Logger
}

const DEFAULT_PATTERNS = [
  '**/*.vue',
]

const DEFAULT_IGNORES = [
  '**/*.story.*',
  '**/__tests__/**',
  '**/test/**',
  '**/*.spec.*',
]

const DEFAULT_ROOT = resolveFromPackage('../components/src')

export async function scanComponents(options: ScanComponentsOptions = {}): Promise<ComponentCollection> {
  const root = options.root ?? DEFAULT_ROOT
  const logger = options.logger ?? createLogger('indexer', 'components')
  const patterns = options.patterns ?? DEFAULT_PATTERNS
  const ignore = options.ignore ?? DEFAULT_IGNORES

  const files = await fg(patterns, {
    cwd: root,
    absolute: true,
    ignore,
  })

  const summaries: ComponentSummary[] = []
  const details: Record<string, ComponentDetail> = {}
  const propsIndex: Array<{ component: string; prop: ComponentProp }> = []

  for (const file of files) {
    try {
      const doc = await parse(file, {
        alias: {
          '@': root,
        },
      })

      if (!doc) {
        logger.warn('Could not generate documentation for component', { file })
        continue
      }

      const detail = buildComponentDetail(doc, file, root)
      const summary: ComponentSummary = {
        name: detail.name,
        displayName: detail.displayName,
        path: detail.path,
        since: detail.since,
        tags: detail.tags,
      }

      summaries.push(summary)
      details[detail.name] = detail
      for (const prop of detail.props) {
        propsIndex.push({ component: detail.name, prop })
      }
    }
    catch (error) {
      logger.warn('Failed to parse component file', {
        file,
        error,
      })
    }
  }

  summaries.sort((a, b) => a.name.localeCompare(b.name))
  propsIndex.sort((a, b) => {
    const componentCompare = a.component.localeCompare(b.component)
    if (componentCompare !== 0) {
      return componentCompare
    }

    return a.prop.name.localeCompare(b.prop.name)
  })

  return {
    summaries,
    details,
    propsIndex,
  }
}

export function buildComponentDetail(doc: ComponentDoc, file: string, root: string): ComponentDetail {
  const name = doc.displayName ?? basename(file, extname(file))
  const path = relative(getWorkspaceRoot(), file)
  const detail: ComponentDetail = ComponentDetailSchema.parse({
    name,
    displayName: doc.displayName ?? name,
    path,
    since: doc.tags?.since?.[0]?.description,
    tags: extractTagsList(doc),
    description: doc.description || undefined,
    props: mapProps(doc.props ?? []),
    events: mapEvents(doc.events ?? []),
    slots: mapSlots(doc.slots ?? []),
    emits: mapEvents(doc.events ?? []),
    methods: mapMethods(doc.methods ?? []),
    usage: extractUsageExamples(doc, file),
    imports: [
      {
        name,
        path: '@wisemen/vue-core',
        isDefault: false,
      },
      {
        name,
        path: `@/${relative(root, file).replace(/\.[^.]+$/, '')}`,
        isDefault: false,
      },
    ],
    tagsDetailed: extractTagsDetailed(doc),
  })

  return detail
}

function mapProps(props: PropDescriptor[]): ComponentProp[] {
  return props
    .map((prop) => ComponentPropSchema.parse({
      name: prop.name,
      type: normaliseType(prop.type),
      required: Boolean(prop.required),
      default: prop.defaultValue?.value,
      description: prop.description || prop.tags?.description?.[0]?.description,
      tags: extractTagNames(prop.tags),
      since: prop.tags?.since?.[0]?.description,
      deprecated: Boolean(prop.tags?.deprecated?.length),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function normaliseType(type?: PropDescriptor['type']): string {
  if (!type) {
    return 'unknown'
  }

  if (typeof type === 'string') {
    return type
  }

  if ('name' in type && type.name) {
    if (Array.isArray(type.elements) && type.elements.length > 0) {
      const values = type.elements
        .map((element) => {
          if (!element) {
            return undefined
          }

          if (typeof element === 'string') {
            return element
          }

          if (typeof element === 'object' && 'name' in element && element.name) {
            return element.name
          }

          return undefined
        })
        .filter((value): value is string => Boolean(value))
        .join(' | ')

      return `${type.name}<${values}>`
    }

    if (typeof type.raw === 'string' && type.raw.length > 0) {
      return type.raw
    }

    return type.name
  }

  if ('raw' in type && type.raw) {
    return type.raw
  }

  return 'unknown'
}

function normaliseDescriptorType(type: unknown): string | undefined {
  if (!type) {
    return undefined
  }

  if (typeof type === 'string') {
    return type
  }

  if (typeof type === 'object' && type !== null) {
    if ('name' in type && typeof type.name === 'string') {
      return type.name
    }

    if ('type' in type && typeof (type as { type?: string }).type === 'string') {
      return (type as { type?: string }).type
    }

    if ('raw' in type && typeof (type as { raw?: string }).raw === 'string') {
      return (type as { raw?: string }).raw
    }
  }

  return undefined
}

function mapEvents(events: EventDescriptor[]): ComponentEvent[] {
  return events
    .map((event) => ({
      name: event.name,
      description: event.description,
      payload: event.properties?.map((property) => ({
        name: property.name,
        type: normaliseDescriptorType(property.type),
        description: property.description,
      })),
      since: event.tags?.since?.[0]?.description,
      deprecated: Boolean(event.tags?.deprecated?.length),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function mapSlots(slots: SlotDescriptor[]): ComponentSlot[] {
  return slots
    .map((slot) => ({
      name: slot.name,
      description: slot.description,
      props: slot.bindings?.map((binding) => ({
        name: binding.name,
        type: normaliseDescriptorType(binding.type),
        description: binding.description,
      })),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function mapMethods(methods: MethodDescriptor[]): ComponentMethod[] {
  return methods
    .map((method) => ({
      name: method.name,
      description: method.description,
      signature: method.signature,
      returns: method.returns?.type?.name,
      since: method.tags?.since?.[0]?.description,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function extractTagsList(doc: ComponentDoc): string[] | undefined {
  const tags = doc.tags ? Object.keys(doc.tags) : []
  return tags.length > 0 ? tags : undefined
}

function extractTagsDetailed(doc: ComponentDoc): Record<string, { name: string; description?: string }> | undefined {
  if (!doc.tags) {
    return undefined
  }

  const result: Record<string, { name: string; description?: string }> = {}
  for (const [key, tagList] of Object.entries(doc.tags)) {
    if (!Array.isArray(tagList) || tagList.length === 0) {
      continue
    }

    const description = tagList
      .map(tag => tag.description)
      .filter((text): text is string => Boolean(text))
      .join('\n') || undefined

    result[key] = {
      name: key,
      description,
    }
  }

  return Object.keys(result).length > 0 ? result : undefined
}

function extractUsageExamples(doc: ComponentDoc, file: string): UsageExample[] {
  if (!doc.tags?.example || doc.tags.example.length === 0) {
    return []
  }

  return doc.tags.example.map((tag, index) => ({
    title: tag.title || `Example ${index + 1}`,
    code: tag.description ?? '',
    source: file,
    description: tag.content ?? tag.description ?? undefined,
  }))
}

function extractTagNames(tags: Record<string, Array<{ description?: string }>> | undefined): string[] | undefined {
  if (!tags) {
    return undefined
  }

  const names = Object.keys(tags)
  return names.length > 0 ? names : undefined
}
