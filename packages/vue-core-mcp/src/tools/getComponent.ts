import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { loadComponentsArtifact } from '../utils/artifacts'
import { createLogger } from '../utils/logger'

const InputSchema = z.object({
  name: z.string().min(1, 'Component name is required'),
})

export type GetComponentInput = z.infer<typeof InputSchema>

export async function getComponent(input: GetComponentInput) {
  const artifact = await loadComponentsArtifact()
  const detail = artifact.data.details[input.name]
  if (!detail) {
    throw new Error(`Component ${input.name} not found`)
  }

  return detail
}

export function registerGetComponentTool(server: McpServer) {
  const logger = createLogger('tool', 'getComponent')

  server.registerTool('getComponent', {
    title: 'Get component details',
    description: 'Retrieve a fully detailed component description including props, events, slots, and usage examples.',
    inputSchema: {
      name: z.string().min(1),
    },
  }, async (args) => {
    const parsed = InputSchema.parse(args ?? {})
    try {
      const component = await getComponent(parsed)
      logger.info('Resolved component detail', { name: parsed.name })
      return {
        content: [
          {
            type: 'json',
            json: component,
          },
        ],
      }
    }
    catch (error) {
      logger.error('Failed to resolve component detail', {
        name: parsed.name,
        error,
      })
      throw error
    }
  })
}
