import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import FormField from './FormField.vue'

describe('form field Component', () => {
  it('renders the label when passed as a prop', () => {
    const wrapper = mount(FormField, { props: { label: 'Username' } })

    expect(wrapper.text()).toContain('Username')
  })

  it('renders slot content', () => {
    const wrapper = mount(FormField, { slots: { default: '<input type="text" />' } })

    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
  })

  it('shows error message when error prop is set', () => {
    const wrapper = mount(FormField, {
      props: {
        isTouched: true,
        errorMessage: 'this is an error message',
      },
    })

    expect(wrapper.text()).toContain('this is an error message')
  })
})
