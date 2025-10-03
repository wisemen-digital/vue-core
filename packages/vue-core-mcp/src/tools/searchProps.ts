import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { loadComponentsArtifact } from '../utils/artifacts'
import { createLogger } from '../utils/logger'

const InputSchema = z.object({
  q: z.string().min(2, 'Search query must be at least 2 characters long'),
  limit: z.number().int().positive().max(50).optional(),
})

export type SearchPropsInput = z.infer<typeof InputSchema>

export async function searchProps(input: SearchPropsInput) {
  const artifact = await loadComponentsArtifact()
  const query = input.q.toLowerCase()
  const limit = input.limit ?? 25

  const matches = artifact.data.propsIndex.filter(({ prop, component }) => {
    if (prop.name.toLowerCase().includes(query)) {
      return true
    }

    if (prop.description && prop.description.toLowerCase().includes(query)) {
      return true
    }

    if (component.toLowerCase().includes(query)) {
      return true
    }

    return false
  })

  return matches.slice(0, limit)
}

export function registerSearchPropsTool(server: McpServer) {
  const logger = createLogger('tool', 'searchProps')

  server.registerTool('searchProps', {
    title: 'Search component props',
    description: 'Search across all component props, descriptions, and component names.',
    inputSchema: {
      q: z.string().min(2),
      limit: z.number().int().positive().max(50).optional(),
    },
  }, async (args) => {
    const parsed = InputSchema.parse(args ?? {})

    try {
      const results = await searchProps(parsed)
      logger.info('Searched props', {
        query: parsed.q,
        count: results.length,
      })
      return {
        content: [
          {
            type: 'json',
            json: results,
          },
        ],
      }
    }
    catch (error) {
      logger.error('Prop search failed', {
        query: parsed.q,
        error,
      })
      throw error
    }
  })
}
