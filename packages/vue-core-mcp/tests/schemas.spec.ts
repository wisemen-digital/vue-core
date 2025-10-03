import { describe, expect, it } from 'vitest'

import {
  ComponentDetailSchema,
} from '../src/schemas/component'
import {
  StylesSchema,
} from '../src/schemas/styles'
import {
  ChangelogEntrySchema,
} from '../src/schemas/changelog'

describe('schemas', () => {
  it('validates component detail structure', () => {
    const parsed = ComponentDetailSchema.parse({
      name: 'VcDemo',
      displayName: 'VcDemo',
      path: 'components/VcDemo.vue',
      props: [],
      events: [],
      slots: [],
      emits: [],
      methods: [],
      usage: [],
      imports: [],
    })

    expect(parsed.name).toBe('VcDemo')
  })

  it('validates styles schema', () => {
    const parsed = StylesSchema.parse({
      cssVars: ['--test'],
      classes: ['demo'],
      tokens: {
        '--test': 'value',
      },
    })

    expect(parsed.tokens?.['--test']).toBe('value')
  })

  it('validates changelog entries', () => {
    const entry = ChangelogEntrySchema.parse({
      version: '1.0.0',
      notes: 'Initial release',
      component: 'VcDemo',
    })

    expect(entry.version).toBe('1.0.0')
  })
})
