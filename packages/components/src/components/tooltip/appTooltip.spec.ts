import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import { h, type VNode } from 'vue'

import AppTooltip from '@/components/tooltip/AppTooltip.vue'
import AppTooltipArrow from '@/components/tooltip/AppTooltipArrow.vue'

describe('appTooltip', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppTooltip>>

  globalThis.ResizeObserver = class ResizeObserver {
    disconnect(): void {}
    observe(): void {}
    unobserve(): void {}
  }

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(AppTooltip, {
      attachTo: document.body,
      props: {
        content: 'Tooltip content',
      },
      slots: {
        content(): void {
          return void 0
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

  it('renders the content if focused', async () => {
    await wrapper.find('button').trigger('focus')

    const popperContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

    expect(popperContent).not.toBeNull()
    expect(document.body.innerHTML).toContain('Tooltip content')
  })

  it('renders no content if not focused', () => {
    document.body.focus()

    const popperContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

    expect(popperContent).toBeNull()
    expect(document.body.innerHTML).not.toContain('Tooltip content')
  })

  it('renders no content if hidden', async () => {
    await wrapper.setProps({ isHidden: true })
    await wrapper.find('button').trigger('focus')

    const popperContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

    expect(popperContent).toBeNull()
    expect(document.body.innerHTML).not.toContain('Tooltip content')
  })

  it('renders no arrow if specified so', async () => {
    await wrapper.setProps({ hideArrow: true })
    await wrapper.find('button').trigger('focus')

    const arrow = wrapper.findComponent(AppTooltipArrow)

    expect(arrow.exists()).toBe(false)
  })
})
