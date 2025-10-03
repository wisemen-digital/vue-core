import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { loadComponentsArtifact } from '../utils/artifacts'
import { createLogger } from '../utils/logger'

const InputSchema = z.object({})

export async function listComponents() {
  const artifact = await loadComponentsArtifact()
  return artifact.data.summaries
}

export function registerListComponentsTool(server: McpServer) {
  const logger = createLogger('tool', 'listComponents')

  server.registerTool('listComponents', {
    title: 'List Vue Core Components',
    description: 'Return the list of available components with basic metadata.',
    inputSchema: InputSchema.shape,
  }, async (args) => {
    try {
      InputSchema.parse(args ?? {})
      const components = await listComponents()
      logger.info('Listed components', { count: components.length })
      return {
        content: [
          {
            type: 'json',
            json: components,
          },
        ],
      }
    }
    catch (error) {
      logger.error('Failed to list components', { error })
      throw error
    }
  })
}
