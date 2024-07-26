import { flushPromises, mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import AppIcon from '@/components/icon/AppIcon.vue'
import CheckmarkIcon from '@/icons/CheckmarkIcon.vue'

describe('appIcon', () => {
  it('renders the specified icon correctly', async () => {
    const wrapper = mount(AppIcon, {
      props: {
        icon: 'checkmark',
      },
    })

    await flushPromises()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('svg')

    const checkmark = wrapper.findComponent(CheckmarkIcon)

    expect(checkmark.exists()).toBe(true)
  })

  it('renders the specified size', async () => {
    const wrapper = mount(AppIcon, {
      props: {
        icon: 'checkmark',
        size: 'sm',
      },
    })

    await flushPromises()
    expect(wrapper.classes()).toContain('size-3')
  })
})
