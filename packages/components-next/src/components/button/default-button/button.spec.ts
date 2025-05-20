import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import Button from './Button.vue'

describe('button', () => {
  it('should render the button with default props', () => {
    const wrapper = mount(Button)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should emit click event when clicked', () => {
    const wrapper = mount(Button)

    wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('should not emit events when disabled', () => {
    const wrapper = mount(Button, { props: { isDisabled: true } })

    wrapper.trigger('click')

    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('should render the default slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Click me' } })

    expect(wrapper.text()).toContain('Click me')
  })
})
