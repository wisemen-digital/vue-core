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
import AppInput from '@/components/input/AppInput.vue'
import FormInput from '@/components/input/FormInput.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

describe('formInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof FormInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(FormInput, {
      attachTo: document.body,
      props: {
        isTouched: false,
        errors: null,
        label: 'Label',
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
    expect(wrapper.findComponent(AppInput).exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Label')
  })

  it('handles required field correctly', async () => {
    await wrapper.setProps({ isRequired: true })
    expect(wrapper.findComponent(FormElement).props('isRequired')).toBe(true)
  })

  it('handles error messages correctly', async () => {
    const errors = {
      _errors: [
        'Example error',
      ],
    }

    await wrapper.setProps({ errors })
    expect(wrapper.findComponent(FormElement).props('errors')).toEqual(errors)
  })

  it('handles disabled state correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.findComponent(FormElement).props('isDisabled')).toBe(true)
  })

  it('handles loading state correctly', async () => {
    await wrapper.setProps({ isLoading: true })
    expect(wrapper.findComponent(AppLoader).exists()).toBe(true)
  })

  it('handles custom slot content', () => {
    expect(wrapper.find('.custom-right-slot').exists()).toBe(true)
  })

  it('renders given tooltip content and icon', async () => {
    await wrapper.setProps({ tooltip: 'Tooltip' })

    expect(wrapper.findComponent(AppTooltip).props('content')).toBe('Tooltip')
    expect(wrapper.findComponent(AppIcon).exists()).toBe(true)
  })
})
