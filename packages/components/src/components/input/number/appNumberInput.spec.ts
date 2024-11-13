import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppNumberInput from '@/components/input/number/AppNumberInput.vue'

describe('appNumberInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppNumberInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(AppNumberInput, {
      attachTo: document.body,
      props: {
        modelValue: 0,
      },
      slots: {
        left: '<div class="custom-left-slot"></div>',
        right: '',
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('input').exists()).toBeTruthy()
    expect(wrapper.find('input').attributes('type')).toBe('number')

    const downControl = wrapper.findAllComponents({ name: 'AppIconButton' })[1]

    expect(downControl?.attributes('disabled')).toBeDefined()
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
    expect(wrapper.findComponent({ name: 'AppLoader' }).exists()).toBeTruthy()
  })

  it('applies invalid state correctly', async () => {
    await wrapper.setProps({ isInvalid: true })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('handles custom slot content', () => {
    expect(wrapper.find('.custom-left-slot').exists()).toBeTruthy()
  })

  it('updates input state', async () => {
    await wrapper.find('input').setValue(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      1,
    ])
  })

  it('updates input state when cicking on controls', async () => {
    const upControl = wrapper.findComponent({ name: 'AppIconButton' })

    await upControl.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      1,
    ])
  })

  it('disables controls if max reached', () => {
    const wrapper = mount(AppNumberInput, {
      props: {
        max: 10,
        modelValue: 10,
      },
    })
    const upControl = wrapper.findComponent({ name: 'AppIconButton' })

    expect(upControl.attributes('disabled')).toBeDefined()
  })

  it('renders with icon', () => {
    const iconLeft = 'checkmark'
    const wrapper = mount(AppNumberInput, {
      props: {
        iconLeft,
        modelValue: 0,
      },
    })

    expect(wrapper.findAllComponents({ name: 'AppIcon' })[0]?.exists()).toBeTruthy()
    expect(wrapper.findAllComponents({ name: 'AppIcon' })[0]?.props('icon')).toBe(iconLeft)
  })
})
