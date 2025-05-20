import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import IconButton from './IconButton.vue'

describe('icon Button', () => {
  it('should render the button with default props', () => {
    const wrapper = mount(IconButton, {
      props: {
        icon: 'alertCircle',
        label: 'test-label',
      },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should emit click event when clicked', () => {
    const wrapper = mount(IconButton, {
      props: {
        icon: 'alertCircle',
        label: 'test-label',
      },
    })

    wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('should not emit events when disabled', () => {
    const wrapper = mount(IconButton, {
      props: {
        isDisabled: true,
        icon: 'alertCircle',
        label: 'test-label',
      },
    })

    wrapper.trigger('click')

    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
})
