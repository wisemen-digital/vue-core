import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { name, version } from '../package.json'
import { handleListResources, handleReadResource, handleToolCall } from './server/handlers.js'
import { tools } from './server/tools.js'

const server = new Server(
  {
    name,
    version,
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  },
)

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools }
})

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params
  return handleToolCall(name, args)
})

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return handleListResources()
})

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri
  return handleReadResource(uri)
})

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('Vue Core MCP Server running on stdio')
}

main().catch((error) => {
  console.error('Server error:', error)
  process.exit(1)
})
