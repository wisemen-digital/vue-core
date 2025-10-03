import { describe, expect, it, beforeEach } from 'vitest'

import { createMcpServer } from '../src'
import { seedArtifacts } from './helpers/artifacts'

describe('MCP server', () => {
  it('registers tools that can be invoked directly', async () => {
    await seedArtifacts()
    const server = createMcpServer() as unknown as {
      _registeredTools: Record<string, {
        callback: (args: unknown, extra: unknown) => Promise<{ content: Array<{ type: string; json?: unknown }> }>
      }>
    }

    const listTool = server._registeredTools.listComponents
    expect(listTool).toBeDefined()

    const response = await listTool.callback({}, {})
    const payload = response.content.find(entry => entry.type === 'json')?.json as Array<{ name: string }>
    expect(payload?.[0]?.name).toBe('VcTestButton')
  })
})
