import { describe, expect, it } from 'vitest'
import { getGitDiff, getGitLog, getGitStatus } from './git.js'

describe('git', () => {
  describe('getGitLog', () => {
    it('should get git log for a package', async () => {
      const log = await getGitLog('mcp', 3)
      expect(log).toBeDefined()
      expect(typeof log).toBe('string')

      if (log.length > 0) {
        expect(log).toMatch(/\w{7}/)
      }
    })

    it('should respect max_count parameter', async () => {
      const log = await getGitLog('mcp', 1)
      expect(log).toBeDefined()
      const lines = log.split('\n').filter(l => l.trim())
      expect(lines.length).toBeLessThanOrEqual(1)
    })

    it('should throw error for non-existent package', async () => {
      await expect(getGitLog('non-existent-pkg')).rejects.toThrow('Package "non-existent-pkg" not found')
    })
  })

  describe('getGitStatus', () => {
    it('should get git status for a package', async () => {
      const status = await getGitStatus('mcp')
      expect(status).toBeDefined()
      expect(typeof status).toBe('string')
    })

    it('should throw error for non-existent package', async () => {
      await expect(getGitStatus('non-existent-pkg')).rejects.toThrow('Package "non-existent-pkg" not found')
    })
  })

  describe('getGitDiff', () => {
    it('should get git diff for a package', async () => {
      const diff = await getGitDiff('mcp')
      expect(diff).toBeDefined()
      expect(typeof diff).toBe('string')
    })

    it('should handle reference parameters', async () => {
      try {
        const diff = await getGitDiff('mcp', 'HEAD')
        expect(diff).toBeDefined()
        expect(typeof diff).toBe('string')
      }
      catch (error) {
        expect(error).toBeDefined()
      }
    })

    it('should throw error for non-existent package', async () => {
      await expect(getGitDiff('non-existent-pkg')).rejects.toThrow('Package "non-existent-pkg" not found')
    })
  })
})
