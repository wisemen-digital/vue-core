import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppInput from '@/components/input/AppInput.vue'

describe('appInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(AppInput, {
      attachTo: document.body,
      props: {
        modelValue: '',
      },
      slots: {
        left: '',
        right: '<div class="custom-right-slot"></div>',
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('renders placeholder correctly', async () => {
    await wrapper.setProps({ placeholder: 'Placeholder' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Placeholder')
  })

  it('disables input correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('shows loading state correctly', async () => {
    await wrapper.setProps({ isLoading: true })
    expect(wrapper.findComponent({ name: 'AppLoader' }).exists()).toBe(true)
  })

  it('applies invalid state correctly', async () => {
    await wrapper.setProps({ isInvalid: true })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('applies input type correctly', async () => {
    await wrapper.setProps({ type: 'password' })
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('handles custom slot content', () => {
    expect(wrapper.find('.custom-right-slot').exists()).toBe(true)
  })

  it('updates input state', async () => {
    await wrapper.find('input').setValue('new value')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      'new value',
    ])
  })

  it('renders with icon', () => {
    const iconLeft = 'checkmark'
    const wrapper = mount(AppInput, {
      props: {
        iconLeft,
        modelValue: '',
      },
    })

    expect(wrapper.findComponent({ name: 'AppIcon' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppIcon' }).props('icon')).toBe(iconLeft)
  })
})
