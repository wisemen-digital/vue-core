import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import { h, type VNode } from 'vue'

import AppDropdownMenu from '@/components/dropdown-menu/AppDropdownMenu.vue'

describe('appDropdownMenu', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppDropdownMenu>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(AppDropdownMenu, {
      attachTo: document.body,
      props: {
        items: [
          { label: 'Item 1', type: 'selectOption', onSelect: (): void => void 0 },
          { label: 'Item 2', type: 'selectOption', onSelect: (): void => void 0 },
        ],
      },
      slots: {
        default(): VNode {
          return h('button', 'trigger')
        },
        footer(): void {
          return void 0
        },
        header(): void {
          return void 0
        },
      },
    })
  })

  it('renders trigger element', () => {
    expect(wrapper.find('button').text()).toBe('trigger')
  })

  describe('after opening the dropdown', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
    })

    it('renders the menu', () => {
      const menu = document.body.querySelector('[role="menu"]')

      expect(menu).not.toBeNull()
    })
    it('renders the options', () => {
      const menuItems = document.body.querySelectorAll('[role="menuitem"]')

      expect(menuItems.length).toBe(2)
      expect(menuItems[0].textContent).toBe('Item 1')
      expect(menuItems[1].textContent).toBe('Item 2')
    })

    describe('after selecting the first item', () => {
      beforeEach(async () => {
        const menuItem = document.body.querySelector('[role="menuitem"]') as HTMLElement

        menuItem?.click()
        await wrapper.vm.$nextTick()
      })

      it('closes the modal', () => {
        expect(document.body.querySelector('[role="menu"]')).toBeFalsy()
      })
    })
  })
})
