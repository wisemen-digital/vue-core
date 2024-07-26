import { flushPromises, mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { h, type VNode } from 'vue'

import FormElement from '@/components/form-element/FormElement.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

describe('formElement', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FormElement, {
      props: {
        isDisabled: false,
        isRequired: false,
        isTouched: false,
        errors: null,
        label: 'Label',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('span').text()).toBe('Label')
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(FormElement, {
      props: {
        isDisabled: false,
        isRequired: true,
        isTouched: false,
        errors: null,
        label: 'Label',
      },
      slots: {
        default(): VNode {
          return h('button', 'content')
        },
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('content')
  })

  it('renders errors correctly if touched', () => {
    const wrapper = mount(FormElement, {
      props: {
        isDisabled: false,
        isRequired: true,
        isTouched: true,
        errors: { _errors: [
          'error',
        ] },
        label: 'Label',
      },
    })

    expect(wrapper.find('p').text()).toBe('error')
  })

  it('doesn\'t render errors if not touched', () => {
    const wrapper = mount(FormElement, {
      props: {
        isDisabled: false,
        isRequired: true,
        isTouched: false,
        errors: { _errors: [
          'error',
        ] },
        label: 'Label',
      },
    })

    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('adapts the label correctly if required', () => {
    const wrapper = mount(FormElement, {
      props: {
        isDisabled: false,
        isRequired: true,
        isTouched: false,
        errors: null,
        label: 'Label',
      },
    })

    expect(wrapper.find('span').text().includes('*')).toBe(true)
  })

  it('renders given tooltip content and icon', async () => {
    const wrapper = mount(FormElement, {
      global: {
        components: {
          AppIcon,
          AppTooltip,
        },
      },
      props: {
        isDisabled: false,
        isRequired: false,
        isTouched: false,
        errors: null,
        label: 'Label',
        tooltip: 'Tooltip',
      },
    })

    await flushPromises()

    expect(wrapper.findComponent(AppTooltip).props().content).toBe('Tooltip')
    expect(wrapper.findComponent(AppIcon).exists()).toBe(true)
  })
})
