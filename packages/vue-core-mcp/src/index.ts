import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerListComponentsTool } from './tools/listComponents'
import { registerGetComponentTool } from './tools/getComponent'
import { registerSearchPropsTool } from './tools/searchProps'
import { registerGetStylesTool } from './tools/getStyles'
import { registerGetChangelogTool } from './tools/getChangelog'
import { registerDiffComponentTool } from './tools/diffComponent'

const SERVER_NAME = 'vue-core-mcp'
const SERVER_VERSION = '0.1.0'

export function createMcpServer(): McpServer {
  const server = new McpServer({
    name: SERVER_NAME,
    version: SERVER_VERSION,
  })

  registerListComponentsTool(server)
  registerGetComponentTool(server)
  registerSearchPropsTool(server)
  registerGetStylesTool(server)
  registerGetChangelogTool(server)
  registerDiffComponentTool(server)

  return server
}
