import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import AppBadge from '@/components/badge/AppBadge.vue'

describe('appBadge', () => {
  it('shows no text when given no text', () => {
    const wrapper = mount(AppBadge, {})

    expect(wrapper.text()).toEqual('')
  })

  it('shows text when passing text to the slot', () => {
    const wrapper = mount(AppBadge, {
      slots: {
        default: 'example',
      },
    })

    expect(wrapper.text()).toEqual('example')
  })
})
