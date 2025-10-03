import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

import { createMcpServer } from './index'
import { createLogger } from './utils/logger'

export async function startServer(): Promise<void> {
  const logger = createLogger('server')
  const server = createMcpServer()

  const transport = new StdioServerTransport()

  await server.connect(transport)
  logger.info('Vue Core MCP server started (stdio transport)')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  startServer().catch((error) => {
    const logger = createLogger('server')
    logger.error('Failed to start server', { error })
    process.exitCode = 1
  })
}
