import type { VueWrapper } from '@vue/test-utils'
import { flushPromises, mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import CheckmarkIcon from '@/icons/CheckmarkIcon.vue'
import ChevronRightIcon from '@/icons/ChevronRightIcon.vue'

describe('appBreadcrumbs', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppBreadcrumbs>>

  beforeEach(async () => {
    wrapper = mount(AppBreadcrumbs, {
      props: {
        items: [
          { icon: 'checkmark', label: 'Page 1', type: 'page' },
          { label: 'Page 2', type: 'page' },
        ],
      },
    })

    await flushPromises()
  })

  it('renders items labels correctly', () => {
    const items = wrapper.findAll('li')

    expect(items.length).toBe(3)
    expect(items[0].text()).toBe('Page 1')
    expect(items[2].text()).toBe('Page 2')
  })

  it('renders chevron icon correctly between items', () => {
    const items = wrapper.findAll('li')

    const chevronIcon = items[1].findComponent(ChevronRightIcon)

    expect(chevronIcon.exists()).toBe(true)
  })

  it('renders item icon correctly', () => {
    const items = wrapper.findAll('li')

    const checkmarkIcon = items[0].findComponent(CheckmarkIcon)

    expect(checkmarkIcon.exists()).toBe(true)
  })
})
