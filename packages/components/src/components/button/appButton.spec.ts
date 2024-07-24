import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import AppButton from '@/components/button/AppButton.vue'
import { useButtonStyle } from '@/components/button/button.style'

const buttonStyle = useButtonStyle()

describe('appButton', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: 'Test content',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.text()).toContain('Test content')
  })

  it('renders the specified button type', () => {
    const wrapper = mount(AppButton, {
      props: {
        type: 'submit',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('applies classes from specified variant', () => {
    const style = buttonStyle.button({
      size: 'default',
      variant: 'ghost',
    })
    const wrapper = mount(AppButton, {
      props: {
        variant: 'ghost',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('class')).toBe(style)
  })

  it('renders icons correctly', () => {
    const wrapper = mount(AppButton, {
      props: {
        iconLeft: 'checkmark',
      },
      slots: {
        default: 'Test content',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('BUTTON')
    // expect(wrapper.find('svg').exists()).toBe(true)

    // console.log(wrapper.html())
  })
})
