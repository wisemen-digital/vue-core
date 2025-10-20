import { describe, expect, it } from 'vitest'
import { getComponentDocumentation, getPackageDocumentation, listComponentDocs } from './documentation.js'

describe('documentation', () => {
  it('should get package documentation', async () => {
    const docs = await getPackageDocumentation('mcp')
    expect(docs).toBeDefined()
    expect(docs).toContain('# mcp Documentation')
  })

  it('should list component docs for components-next', async () => {
    const components = await listComponentDocs('components-next')
    expect(components).toBeDefined()
    expect(components.length).toBeGreaterThan(0)
    expect(components).toContain('button')
  })

  it('should get component documentation', async () => {
    const docs = await getComponentDocumentation('components-next', 'button')
    expect(docs).toBeDefined()
    expect(docs).toContain('# button Component')
    expect(docs).toContain('Button')
  })

  it('should throw error for non-existent package', async () => {
    await expect(getPackageDocumentation('non-existent')).rejects.toThrow('Package "non-existent" not found')
  })

  it('should throw error for non-existent component', async () => {
    await expect(getComponentDocumentation('components-next', 'non-existent')).rejects.toThrow('Component "non-existent" documentation not found')
  })
})
