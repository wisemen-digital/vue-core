import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import FormCheckbox from '@/components/checkbox/FormCheckbox.vue'

describe('checkboxComponent', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FormCheckbox, {
      props: {
        modelValue: false,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders with provided label', () => {
    const label = 'Test Label'
    const wrapper = mount(FormCheckbox, {
      props: {
        label,
        modelValue: false,
      },
    })

    expect(wrapper.find('label').text()).toBe(label)
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
})
