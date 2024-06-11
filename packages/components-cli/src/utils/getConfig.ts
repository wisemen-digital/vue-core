import path from 'node:path'

import { cosmiconfig } from 'cosmiconfig'
import { loadConfig } from 'tsconfig-paths'
import * as z from 'zod'

import { resolveImport } from '@/utils/resolveImport'

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
      libs: z.string(),
      root: z.string(),
      styles: z.string(),
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
    libs: z.string(),
    root: z.string(),
    styles: z.string(),
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

  return resolveConfigPaths(cwd, config)
}

export function resolveConfigPaths(cwd: string, config: RawConfig) {
  const tsConfig = loadConfig(cwd)

  if (tsConfig.resultType === 'failed') {
    throw new Error(
      `Failed to load tsconfig.json. ${tsConfig.message ?? ''}`.trim(),
    )
  }

  return configSchema.parse({
    ...config,
    resolvedPaths: {
      components: resolveImport(config.aliases.components, config.aliases.root),
      composables: resolveImport(config.aliases.composables, config.aliases.root),
      config: path.resolve(cwd, config.aliases.config),
      icons: resolveImport(config.aliases.icons, config.aliases.root),
      libs: resolveImport(config.aliases.libs, config.aliases.root),
      root: config.aliases.root,
      styles: resolveImport(config.aliases.styles, config.aliases.root),
      types: resolveImport(config.aliases.types, config.aliases.root),
      utils: resolveImport(config.aliases.utils, config.aliases.root),
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
