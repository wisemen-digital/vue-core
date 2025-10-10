import { describe, expect, it } from 'vitest'
import { handleToolCall } from './handlers.js'

describe('handlers', () => {
  describe('handleToolCall', () => {
    it('should handle list_packages', async () => {
      const result = await handleToolCall('list_packages', {})
      expect(result).toBeDefined()
      expect(result.content).toBeDefined()
      expect(result.content[0].type).toBe('text')
      expect(result.content[0].text).toContain('mcp')
    })

    it('should handle get_package_documentation', async () => {
      const result = await handleToolCall('get_package_documentation', { package: 'mcp' })
      expect(result).toBeDefined()
      expect(result.content[0].text).toContain('# mcp Documentation')
    })

    it('should handle list_files', async () => {
      const result = await handleToolCall('list_files', { package: 'mcp' })
      expect(result).toBeDefined()
      expect(result.content[0].text).toContain('package.json')
    })

    it('should handle read_file', async () => {
      const result = await handleToolCall('read_file', {
        package: 'mcp',
        file: 'package.json',
      })
      expect(result).toBeDefined()
      expect(result.content[0].text).toContain('@vue-core/mcp')
    })

    it('should handle search_code', async () => {
      const result = await handleToolCall('search_code', {
        package: 'mcp',
        query: 'export',
      })
      expect(result).toBeDefined()
      expect(result.content[0].text).toBeTruthy()
    })

    it('should handle git_log', async () => {
      const result = await handleToolCall('git_log', {
        package: 'mcp',
        max_count: 2,
      })
      expect(result).toBeDefined()
      expect(typeof result.content[0].text).toBe('string')
    })

    it('should handle git_status', async () => {
      const result = await handleToolCall('git_status', { package: 'mcp' })
      expect(result).toBeDefined()
      expect(typeof result.content[0].text).toBe('string')
    })

    it('should handle unknown tool with error', async () => {
      const result = await handleToolCall('unknown_tool', {})
      expect(result).toBeDefined()
      expect(result.isError).toBe(true)
      expect(result.content[0].text).toContain('Unknown tool')
    })

    it('should handle missing package with error', async () => {
      const result = await handleToolCall('read_file', {
        package: 'non-existent',
        file: 'test.txt',
      })
      expect(result).toBeDefined()
      expect(result.isError).toBe(true)
      expect(result.content[0].text).toContain('not found')
    })

    it('should handle missing file with error', async () => {
      const result = await handleToolCall('read_file', {
        package: 'mcp',
        file: 'non-existent-file.txt',
      })
      expect(result).toBeDefined()
      expect(result.isError).toBe(true)
    })
  })
})
