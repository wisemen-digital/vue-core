import { describe, expect, it } from 'vitest'
import { searchDocumentation, searchFiles } from './search.js'

describe('search', () => {
  describe('searchFiles', () => {
    it('should find code matches in mcp package', async () => {
      const results = await searchFiles('mcp', 'export')
      expect(results).toBeDefined()
      expect(results.length).toBeGreaterThan(0)
      expect(results[0]).toContain('export')
    })

    it('should return empty array for non-matching query', async () => {
      const results = await searchFiles('mcp', 'xyzabc123notfound999')
      expect(results).toEqual([])
    })

    it('should throw error for non-existent package', async () => {
      await expect(searchFiles('non-existent-pkg', 'test')).rejects.toThrow('Package "non-existent-pkg" not found')
    })
  })

  describe('searchDocumentation', () => {
    it('should find documentation matches', async () => {
      const results = await searchDocumentation('components-next', 'Button')
      expect(results).toBeDefined()
      expect(results.length).toBeGreaterThan(0)
      expect(results).not.toContain('No matches found')
    })

    it('should return no matches message for non-matching query', async () => {
      const results = await searchDocumentation('components-next', 'xyzabc123notfound')
      expect(results).toEqual(['No matches found'])
    })

    it('should handle package without docs', async () => {
      const results = await searchDocumentation('mcp', 'test')
      expect(results).toBeDefined()
    })

    it('should throw error for non-existent package', async () => {
      await expect(searchDocumentation('non-existent-pkg', 'test')).rejects.toThrow('Package "non-existent-pkg" not found')
    })
  })
})
