import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import type { VNode } from 'vue'
import { h } from 'vue'

import FormCheckbox from '@/components/checkbox/FormCheckbox.vue'
import AppDropdownMenu from '@/components/dropdown-menu/AppDropdownMenu.vue'
import AppDropdownMenuContent from '@/components/dropdown-menu/AppDropdownMenuContent.vue'
import type { DropdownMenuItem } from '@/types/dropdownMenuItem.type'

describe('appDropdownMenu', () => {
  it('renders the trigger correctly', () => {
    const wrapper = mount(AppDropdownMenu, {
      props: {
        items: [],
      },
      slots: {
        default(): VNode {
          return h('button', 'test')
        },
        footer() {},
        header() {},
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('test')
  })

  it('renders 2 select items when clicking on the trigger', async () => {
    const items: DropdownMenuItem[] = [
      {
        label: 'Item 1',
        type: 'selectOption',
        onSelect: (): void => {},
      },
      {
        label: 'Item 2',
        type: 'selectOption',
        onSelect: (): void => {},
      },
    ]
    const wrapper = mount(AppDropdownMenu, {
      props: {
        items,
      },
      slots: {
        default(): VNode {
          return h('button', 'test')
        },
        footer() {},
        header() {},
      },
    })

    await wrapper.find('button').trigger('click')

    const dropdownMenu = wrapper.getComponent(AppDropdownMenuContent)

    expect(dropdownMenu.findAll('p')[0].text()).toBe('Item 1')
    expect(dropdownMenu.findAll('p')[1].text()).toBe('Item 2')
  })

  it('disables checkbox correctly', () => {
    const wrapper = mount(FormCheckbox, {
      props: {
        isDisabled: true,
        modelValue: false,
      },
    })
    const input = wrapper.find('button')

    expect(input.attributes('disabled')).toBeDefined()
  })

  it('toggles checkbox state', async () => {
    const wrapper = mount(FormCheckbox, {
      props: { modelValue: false },
    })
    const input = wrapper.find('button')

    await input.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      true,
    ])

    await input.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([
      false,
    ])
  })

  it('emits blur event', async () => {
    const wrapper = mount(FormCheckbox, {
      props: { modelValue: false },
    })

    await wrapper.find('button').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })
})
