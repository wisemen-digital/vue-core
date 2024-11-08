import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import FormSwitch from '@/components/switch/FormSwitch.vue'

describe('formSwitch', () => {
  let wrapper: VueWrapper<InstanceType<typeof FormSwitch>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(FormSwitch, {
      attachTo: document.body,
      props: {
        modelValue: true,
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('button').exists()).toBeTruthy()
    expect(wrapper.find('button').attributes('aria-checked')).toBe('true')
  })

  it('handles disabled state correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('handles invalid state correctly', async () => {
    await wrapper.setProps({ isInvalid: true })
    expect(wrapper.find('button').classes()).contains('bg-destructive')
  })

  it('renders correct id', async () => {
    await wrapper.setProps({ id: 'test' })
    expect(wrapper.find('button').attributes('id')).toBe('test')
  })

  it('updates stare correctly', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').attributes('aria-checked')).toBe('false')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      false,
    ])
  })
})
