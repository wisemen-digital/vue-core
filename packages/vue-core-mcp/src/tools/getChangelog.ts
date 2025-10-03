import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { coerce, gte, lte } from 'semver'

import { loadChangelogArtifact } from '../utils/artifacts'
import { createLogger } from '../utils/logger'

const InputSchema = z.object({
  name: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
})

export type GetChangelogInput = z.infer<typeof InputSchema>

export async function getChangelog(input: GetChangelogInput) {
  const artifact = await loadChangelogArtifact()
  const entries = artifact.data.entries

  const filteredByComponent = input.name
    ? entries.filter(entry => entry.component?.toLowerCase() === input.name?.toLowerCase())
    : entries

  const filteredByRange = filteredByComponent.filter((entry) => {
    if (!input.from && !input.to) {
      return true
    }

    const version = coerce(entry.version)
    const from = input.from ? coerce(input.from) : undefined
    const to = input.to ? coerce(input.to) : undefined

    if (!version) {
      return true
    }

    if (from && !gte(version, from)) {
      return false
    }

    if (to && !lte(version, to)) {
      return false
    }

    return true
  })

  return filteredByRange
}

export function registerGetChangelogTool(server: McpServer) {
  const logger = createLogger('tool', 'getChangelog')

  server.registerTool('getChangelog', {
    title: 'Get changelog entries',
    description: 'Return changelog entries optionally filtered by component or version range.',
    inputSchema: {
      name: z.string().optional(),
      from: z.string().optional(),
      to: z.string().optional(),
    },
  }, async (args) => {
    const parsed = InputSchema.parse(args ?? {})

    try {
      const entries = await getChangelog(parsed)
      logger.info('Returning changelog entries', {
        count: entries.length,
        name: parsed.name,
      })
      return {
        content: [
          {
            type: 'json',
            json: entries,
          },
        ],
      }
    }
    catch (error) {
      logger.error('Failed to resolve changelog', {
        error,
      })
      throw error
    }
  })
}
