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
import AppTagsInput from '@/components/tags-input/AppTagsInput.vue'
import FormTagsInput from '@/components/tags-input/FormTagsInput.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

describe('formTagsInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof FormTagsInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(FormTagsInput, {
      attachTo: document.body,
      props: {
        isTouched: false,
        errors: null,
        label: 'Label',
        max: 2,
        modelValue: [
          'tag1',
        ],
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findComponent(AppTagsInput).exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Label')
    expect(wrapper.find('.text-destructive').exists()).toBe(false)

    const tags = wrapper.findAll('[data-radix-vue-collection-item]')

    expect(tags[0].html()).contains('tag1')
  })

  it('handles required field correctly', async () => {
    await wrapper.setProps({ isRequired: true })
    expect(wrapper.findComponent(FormElement).props('isRequired')).toBe(true)
  })

  it('handles disabled state correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.findComponent(FormElement).props('isDisabled')).toBe(true)
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

  it('updates input state', async () => {
    await wrapper.find('input').setValue('tag2')
    await wrapper.find('input').trigger('keydown.enter')
    expect(wrapper.props('modelValue')).toEqual([
      'tag1',
      'tag2',
    ])
  })

  it('renders given tooltip content and icon', async () => {
    await wrapper.setProps({ tooltip: 'Tooltip' })

    expect(wrapper.findComponent(AppTooltip).props('content')).toBe('Tooltip')
    expect(wrapper.findComponent(AppIcon).exists()).toBe(true)
  })
})
