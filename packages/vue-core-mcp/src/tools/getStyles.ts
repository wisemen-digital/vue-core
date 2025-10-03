import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import { loadStylesArtifact } from '../utils/artifacts'
import { createLogger } from '../utils/logger'

const InputSchema = z.object({
  name: z.string().min(1, 'Component name is required'),
})

export type GetStylesInput = z.infer<typeof InputSchema>

export async function getStyles(input: GetStylesInput) {
  const artifact = await loadStylesArtifact()
  const styles = artifact.data.byComponent[input.name]
  if (!styles) {
    throw new Error(`No styles found for component ${input.name}`)
  }

  const combinedTokens = {
    ...(artifact.data.globalTokens ?? {}),
    ...(styles.tokens ?? {}),
  }

  return {
    ...styles,
    tokens: Object.keys(combinedTokens).length > 0 ? combinedTokens : undefined,
  }
}

export function registerGetStylesTool(server: McpServer) {
  const logger = createLogger('tool', 'getStyles')

  server.registerTool('getStyles', {
    title: 'Get component styles',
    description: 'Return CSS variables, classes, and tokens associated with a component.',
    inputSchema: {
      name: z.string().min(1),
    },
  }, async (args) => {
    const parsed = InputSchema.parse(args ?? {})
    try {
      const styles = await getStyles(parsed)
      logger.info('Returned styles', { name: parsed.name })
      return {
        content: [
          {
            type: 'json',
            json: styles,
          },
        ],
      }
    }
    catch (error) {
      logger.error('Failed to load styles', {
        name: parsed.name,
        error,
      })
      throw error
    }
  })
}
