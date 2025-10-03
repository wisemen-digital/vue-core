import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

import { scanComponents } from '../src/indexer/scanComponents'
import { scanStories } from '../src/indexer/scanStories'
import { scanStyles } from '../src/indexer/scanStyles'
import { scanChangelog } from '../src/indexer/scanChangelog'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const fixturesRoot = resolve(__dirname, 'fixtures/components')
const changelogPath = resolve(__dirname, 'fixtures/CHANGELOG.md')

describe('indexer', () => {
  it('collects component metadata', async () => {
    const result = await scanComponents({
      root: fixturesRoot,
    })

    expect(result.summaries).toHaveLength(1)

    const summary = result.summaries[0]
    const button = result.details[summary.name]
    expect(button).toBeDefined()
    expect(button.props).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'label',
          required: true,
          type: 'string',
        }),
        expect.objectContaining({
          name: 'tone',
          type: 'string',
        }),
      ]),
    )
    expect(button.events).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'click' }),
      ]),
    )
  })

  it('maps stories to components', async () => {
    const components = await scanComponents({ root: fixturesRoot })
    const stories = await scanStories({
      root: fixturesRoot,
      components,
    })

    expect(stories.stories).toHaveLength(1)
    expect(stories.stories[0]).toMatchObject({
      component: components.summaries[0].name,
    })
  })

  it('extracts style information', async () => {
    const components = await scanComponents({ root: fixturesRoot })
    const styles = await scanStyles({
      root: fixturesRoot,
      components,
    })

    const componentName = components.summaries[0].name
    expect(styles.byComponent[componentName].cssVars).toContain('--vc-test-button-bg')
    expect(styles.globalTokens).toHaveProperty('--vc-test-button-color')
  })

  it('parses changelog entries', async () => {
    const changelog = await scanChangelog({
      changelogPath,
    })

    expect(changelog.entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          version: '1.1.0',
          component: 'VcTestButton',
        }),
      ]),
    )
  })
})
