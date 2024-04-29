import path from 'node:path'

import { cosmiconfig } from 'cosmiconfig'
import { loadConfig } from 'tsconfig-paths'
import * as z from 'zod'

import { resolveImport } from '@/src/utils/resolveImport'

export const DEFAULT_STYLE = 'default'
export const DEFAULT_COMPONENTS = '@/components'
export const DEFAULT_UTILS = '@/utils'
export const DEFAULT_TAILWIND_CSS = 'app/globals.css'
export const DEFAULT_TAILWIND_CONFIG = 'tailwind.config.js'
export const DEFAULT_TAILWIND_BASE_COLOR = 'slate'

const explorer = cosmiconfig('components', {
  searchPlaces: [
    'components.json',
  ],
})

export const rawConfigSchema = z
  .object({
    $schema: z.string().optional(),
    aliases: z.object({
      components: z.string(),
      composables: z.string(),
      config: z.string(),
      icons: z.string(),
      styles: z.string(),
      transitions: z.string(),
      types: z.string(),
      utils: z.string(),
    }),
    style: z.string(),
  })
  .strict()

export type RawConfig = z.infer<typeof rawConfigSchema>

export const configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    components: z.string(),
    composables: z.string(),
    config: z.string(),
    icons: z.string(),
    styles: z.string(),
    transitions: z.string(),
    types: z.string(),
    utils: z.string(),
  }),
})

export type Config = z.infer<typeof configSchema>

export async function getConfig(cwd: string) {
  const config = await getRawConfig(cwd)

  if (config == null) {
    return null
  }

  return await resolveConfigPaths(cwd, config)
}

export async function resolveConfigPaths(cwd: string, config: RawConfig) {
  const tsConfig = await loadConfig(cwd)

  if (tsConfig.resultType === 'failed') {
    throw new Error(
      `Failed to load tsconfig.json. ${tsConfig.message ?? ''}`.trim(),
    )
  }

  return configSchema.parse({
    ...config,
    resolvedPaths: {
      components: await resolveImport(config.aliases.components),
      composables: await resolveImport(config.aliases.composables),
      config: path.resolve(cwd, config.aliases.config),
      icons: await resolveImport(config.aliases.icons),
      styles: path.resolve(cwd, config.aliases.styles),
      transitions: await resolveImport(config.aliases.transitions),
      types: await resolveImport(config.aliases.types),
      utils: await resolveImport(config.aliases.utils),
    },
  })
}

export async function getRawConfig(cwd: string): Promise<RawConfig | null> {
  try {
    const configResult = await explorer.search(cwd)

    if (configResult == null) {
      return null
    }

    return rawConfigSchema.parse(configResult.config)
  }
  catch (error) {
    throw new Error(`Invald configuration found in ${cwd}/components.json.`)
  }
}
