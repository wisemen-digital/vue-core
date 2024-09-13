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
      configFolder: z.string(),
      icons: z.string(),
      libs: z.string(),
      root: z.string(),
      rootAlias: z.string(),
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
    configFolder: z.string(),
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

  try {
    return configSchema.parse({
      ...config,
      resolvedPaths: {
        components: resolveImport({
          importPath: config.aliases.components,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        composables: resolveImport({
          importPath: config.aliases.composables,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        config: path.resolve(cwd, config.aliases.config),
        configFolder: resolveImport({
          importPath: config.aliases.configFolder,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        icons: resolveImport({
          importPath: config.aliases.icons,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        libs: resolveImport({
          importPath: config.aliases.libs,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        root: config.aliases.root,
        styles: resolveImport({
          importPath: config.aliases.styles,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        types: resolveImport({
          importPath: config.aliases.types,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
        utils: resolveImport({
          importPath: config.aliases.utils,
          rootAlias: config.aliases.rootAlias,
          rootDirectory: config.aliases.root,
        }),
      },
    })
  }
  catch (e) {
    console.error(e)

    throw new Error('Failed to parse config file')
  }
}

export async function getRawConfig(cwd: string): Promise<RawConfig | null> {
  try {
    const configResult = await explorer.search(cwd)

    if (configResult == null) {
      return null
    }

    return rawConfigSchema.parse(configResult.config)
  }
  catch {
    throw new Error(`Invald configuration found in ${cwd}/components.json.`)
  }
}
