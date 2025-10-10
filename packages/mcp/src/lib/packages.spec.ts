import { describe, expect, it } from 'vitest'
import { getPackages } from './packages.js'

describe('packages', () => {
  it('should list all packages', async () => {
    const packages = await getPackages()
    expect(packages).toBeDefined()
    expect(packages.length).toBeGreaterThan(0)
    expect(packages[0]).toHaveProperty('name')
    expect(packages[0]).toHaveProperty('path')
  })

  it('should detect packages with documentation', async () => {
    const packages = await getPackages()
    const packagesWithDocs = packages.filter(p => p.docsPath)
    expect(packagesWithDocs.length).toBeGreaterThan(0)
  })

  it('should find specific packages', async () => {
    const packages = await getPackages()
    const mcpPackage = packages.find(p => p.name === 'mcp')
    expect(mcpPackage).toBeDefined()
    expect(mcpPackage?.name).toBe('mcp')
  })
})
