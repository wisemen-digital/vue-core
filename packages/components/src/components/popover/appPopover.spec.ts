import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import {
  h,
  type VNode,
} from 'vue'

import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverCloseButton from '@/components/popover/AppPopoverCloseButton.vue'

describe('appPopover', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppPopover>>

  beforeEach(() => {
    document.body.innerHTML = ''

    wrapper = mount(AppPopover, {
      attachTo: document.body,
      props: {
        align: 'center',
        side: 'bottom',
      },
      slots: {
        content(): VNode {
          return h('div', 'Popover content')
        },
        default(): VNode {
          return h('button', 'trigger')
        },
      },
    })
  })

  it('renders trigger element', () => {
    expect(wrapper.find('button').text()).toBe('trigger')
  })

  it('renders the content when triggered', async () => {
    await wrapper.find('button').trigger('click')

    const popoverContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

    expect(popoverContent).not.toBeNull()
    expect(document.body.innerHTML).toContain('Popover content')
  })

  it('renders no content if not triggered', () => {
    const popoverContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

    expect(popoverContent).toBeNull()
    expect(document.body.innerHTML).not.toContain('Popover content')
  })

  it('does not render close button if hidden', async () => {
    await wrapper.setProps({ isCloseButtonHidden: true })
    await wrapper.find('button').trigger('click')

    const closeButton = wrapper.findComponent(AppPopoverCloseButton)

    expect(closeButton.exists()).toBe(false)
  })

  it('does not render arrow if hideArrow is true', async () => {
    await wrapper.setProps({ hideArrow: true })
    await wrapper.find('button').trigger('click')

    const arrow = document.body.querySelector('[data-radix-popper-content-wrapper] span')

    expect(arrow).toBeNull()
  })

  it('applies alignment correctly', async () => {
    await wrapper.setProps({ align: 'start' })
    await wrapper.find('button').trigger('click')

    const popoverContentContainer = document.body.querySelector('[data-radix-popper-content-wrapper] .custom-popover-content')

    expect(popoverContentContainer?.getAttribute('data-align')).toBe('start')
  })

  it('applies side correctly', async () => {
    await wrapper.setProps({ side: 'top' })
    await wrapper.find('button').trigger('click')

    const popoverContentContainer = document.body.querySelector('[data-radix-popper-content-wrapper] .custom-popover-content')

    expect(popoverContentContainer?.getAttribute('data-side')).toBe('top')
  })
})
