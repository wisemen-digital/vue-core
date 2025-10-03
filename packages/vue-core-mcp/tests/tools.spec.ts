import { describe, expect, beforeEach, it } from 'vitest'

import { listComponents } from '../src/tools/listComponents'
import { getComponent } from '../src/tools/getComponent'
import { searchProps } from '../src/tools/searchProps'
import { getStyles } from '../src/tools/getStyles'
import { getChangelog } from '../src/tools/getChangelog'
import { diffComponent } from '../src/tools/diffComponent'
import { seedArtifacts } from './helpers/artifacts'

beforeEach(async () => {
  await seedArtifacts()
})

describe('tools', () => {
  it('lists components', async () => {
    const result = await listComponents()
    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({ name: 'VcTestButton' })
  })

  it('returns component details', async () => {
    const detail = await getComponent({ name: 'VcTestButton' })
    expect(detail.props[0]).toMatchObject({ name: 'label' })
  })

  it('searches props', async () => {
    const results = await searchProps({ q: 'label' })
    expect(results).toHaveLength(1)
    expect(results[0].component).toBe('VcTestButton')
  })

  it('returns styles', async () => {
    const styles = await getStyles({ name: 'VcTestButton' })
    expect(styles.cssVars).toContain('--vc-test-button-bg')
    expect(styles.tokens).toHaveProperty('--vc-test-button-color')
  })

  it('filters changelog entries', async () => {
    const entries = await getChangelog({ name: 'VcTestButton' })
    expect(entries).toHaveLength(1)
  })

  it('diffs component versions', async () => {
    const result = await diffComponent({
      name: 'VcTestButton',
      from: '1.0.0',
      to: 'current',
    })

    expect(result.addedProps).toHaveLength(0)
    expect(result.changedProps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'label' }),
      ]),
    )
  })
})
