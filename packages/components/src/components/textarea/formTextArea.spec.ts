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
import AppTextarea from '@/components/textarea/AppTextarea.vue'
import FormTextarea from '@/components/textarea/FormTextarea.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

describe('appText', () => {
  let wrapper: VueWrapper<InstanceType<typeof FormTextarea>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(FormTextarea, {
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
    expect(wrapper.findComponent(AppTextarea).exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Label')
    expect(wrapper.find('.text-destructive').exists()).toBe(false)
  })

  it('applies correct resize prop', async () => {
    await wrapper.setProps({ resize: 'horizontal' })
    expect(wrapper.find('textarea').classes()).toContain('resize-x')
  })

  it('applies custom height classes', async () => {
    await wrapper.setProps({ heightClass: 'h-32' })
    expect(wrapper.find('textarea').classes()).toContain('h-32')
  })

  it('renders placeholder correctly', async () => {
    await wrapper.setProps({ placeholder: 'Placeholder' })
    expect(wrapper.find('textarea').attributes('placeholder')).toBe('Placeholder')
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

  it('renders given tooltip content and icon', async () => {
    await wrapper.setProps({ tooltip: 'Tooltip' })

    expect(wrapper.findComponent(AppTooltip).props('content')).toBe('Tooltip')
    expect(wrapper.findComponent(AppIcon).exists()).toBe(true)
  })
})
