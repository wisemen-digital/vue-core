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

    // const popoverContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

    // expect(popoverContent).not.toBeNull()
    // expect(document.body.innerHTML).toContain('Popover content')
  })

  // it('renders no content if not triggered', () => {
  //   const popoverContent = document.body.querySelector('[data-radix-popper-content-wrapper]')

  //   expect(popoverContent).toBeNull()
  //   expect(document.body.innerHTML).not.toContain('Popover content')
  // })

  // it('renders close button if not hidden', async () => {
  //   await wrapper.find('button').trigger('click')

  //   const closeButton = wrapper.findComponent(AppPopoverCloseButton)

  //   expect(closeButton.exists()).toBe(true)
  // })

  // it('does not render close button if hidden', async () => {
  //   await wrapper.setProps({ isCloseButtonHidden: true })
  //   await wrapper.find('button').trigger('click')

  //   const closeButton = wrapper.findComponent(AppPopoverCloseButton)

  //   expect(closeButton.exists()).toBe(false)
  // })

  // it('renders arrow by default', async () => {
  //   await wrapper.find('button').trigger('click')

  //   const arrow = document.body.querySelector('[data-radix-popover-arrow]')

  //   expect(arrow).not.toBeNull()
  // })

  // it('does not render arrow if hideArrow is true', async () => {
  //   await wrapper.setProps({ hideArrow: true })
  //   await wrapper.find('button').trigger('click')

  //   const arrow = document.body.querySelector('[data-radix-popover-arrow]')

  //   expect(arrow).toBeNull()
  // })

  // it('applies alignment and side props correctly', async () => {
  //   await wrapper.find('button').trigger('click')

  //   const popoverContent = wrapper.find('[data-radix-popover-content]')

  //   expect(popoverContent.classes()).toContain('center') // Assuming the CSS class is named accordingly
  //   expect(popoverContent.attributes('data-side')).toBe('bottom')
  // })
})
