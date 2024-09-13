import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppIconButton from '@/components/button/AppIconButton.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import FormNumberInput from '@/components/input/number/FormNumberInput.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

describe('formNumberInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof FormNumberInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(FormNumberInput, {
      attachTo: document.body,
      props: {
        errors: null,
        label: 'Label',
        modelValue: 0,
      },
      slots: {
        left: '<div class="custom-left-slot"></div>',
        right: '',
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppNumberInput' }).exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Label')
    expect(wrapper.find('.text-destructive').exists()).toBe(false)
  })

  it('handles required field correctly', async () => {
    await wrapper.setProps({ isRequired: true })
    expect(wrapper.findComponent(FormElement).props('isRequired')).toBe(true)
  })

  it('renders errors when isTouched is true and errors are provided', async () => {
    const errors = {
      _errors: [
        'Example error',
      ],
    }

    await wrapper.setProps({ errors })
    await wrapper.setProps({ isTouched: true })
    expect(wrapper.findComponent(FormElement).props('errors')).toEqual(errors)
    expect(wrapper.find('p.text-destructive').text()).toBe('Example error')
  })

  it('does not render errors when isTouched is false and errors are provided', async () => {
    const errors = {
      _errors: [
        'Example error',
      ],
    }

    await wrapper.setProps({ errors })
    expect(wrapper.findComponent(FormElement).props('errors')).toEqual(errors)
    expect(wrapper.find('.p.text-destructive').exists()).toBe(false)
  })

  it('handles disabled state correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.findComponent(FormElement).props('isDisabled')).toBe(true)
  })

  it('handles loading state correctly, hiding controls', async () => {
    await wrapper.setProps({ isLoading: true })
    expect(wrapper.findComponent(AppLoader).exists()).toBe(true)
    expect(wrapper.findComponent(AppIconButton).exists()).toBe(false)
  })

  it('handles custom slot content', () => {
    expect(wrapper.find('.custom-left-slot').exists()).toBe(true)
  })

  it('renders given tooltip content and icon', async () => {
    await wrapper.setProps({ tooltip: 'Tooltip' })

    expect(wrapper.findComponent(AppTooltip).props('content')).toBe('Tooltip')
    expect(wrapper?.findAllComponents({ name: 'AppIcon' })[0]?.exists()).toBe(true)
    expect(wrapper?.findAllComponents({ name: 'AppIcon' })[0]?.props('icon')).toBe('alertCircle')
  })

  it('disables controls if max reached', () => {
    const wrapper = mount(FormNumberInput, {
      props: {
        errors: null,
        label: 'Label',
        max: 10,
        modelValue: 10,
      },
    })
    const upControl = wrapper.findComponent({ name: 'AppIconButton' })

    expect(upControl.attributes('disabled')).toBeDefined()
  })

  it('renders with icon', () => {
    const iconLeft = 'checkmark'
    const wrapper = mount(FormNumberInput, {
      props: {
        errors: null,
        iconLeft,
        label: 'Label',
        modelValue: 0,
      },
    })

    expect(wrapper.findAllComponents({ name: 'AppIcon' })[0]?.exists()).toBe(true)
    expect(wrapper.findAllComponents({ name: 'AppIcon' })[0]?.props('icon')).toBe(iconLeft)
  })
})
