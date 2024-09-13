import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import FormElement from '@/components/form-element/FormElement.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import FormPhoneNumberInput from '@/components/input/phone-number/FormPhoneNumberInput.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

describe('formPhoneNumberInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof FormPhoneNumberInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(FormPhoneNumberInput, {
      attachTo: document.body,
      props: {
        isTouched: false,
        errors: null,
        label: 'Label',
        modelValue: '',
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppSelect' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppInput' }).exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Label')
    expect(wrapper.find('.error').exists()).toBe(false)

    const inputs = wrapper.findAll('input')
    const inputWithId = inputs.filter((input) => input.attributes('id')?.includes('input-'))[0]

    expect(inputWithId?.attributes('type')).toBe('tel')
  })

  it('updates model with country calling code & formatting when typing', async () => {
    const inputs = wrapper.findAll('input')
    const inputWithId = inputs.filter((input) => input.attributes('id')?.includes('input-'))[0]

    await inputWithId?.setValue('456789000')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      '+32 456 78 90 00',
    ])
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

  it('handles loading state correctly', async () => {
    await wrapper.setProps({ isLoading: true })
    expect(wrapper.findComponent(AppLoader).exists()).toBe(true)
  })

  it('renders given tooltip content and icon', async () => {
    await wrapper.setProps({ tooltip: 'Tooltip' })

    expect(wrapper.findComponent(AppTooltip).props('content')).toBe('Tooltip')
    expect(wrapper.findComponent(AppIcon).exists()).toBe(true)
  })
})
