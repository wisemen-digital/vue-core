import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import AppText from '@/components/text/AppText.vue'

describe('appText', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(AppText, {
      props: {
        variant: 'body',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('P')
    expect(wrapper.classes()).toContain('text-body')
  })

  it('renders as specified tag when "as" prop is provided', () => {
    const wrapper = mount(AppText, {
      props: {
        as: 'h1',
        variant: 'heading',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('H1')
    expect(wrapper.classes()).toContain('text-heading')
  })

  it('applies custom class along with variant class', () => {
    const customClass = 'custom-class'
    const wrapper = mount(AppText, {
      attrs: {
        class: customClass,
      },
      props: {
        variant: 'body',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('text-body')
    expect(wrapper.classes()).toContain(customClass)
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(AppText, {
      props: {
        variant: 'body',
      },
      slots: {
        default: 'Test content',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('P')
    expect(wrapper.text()).toContain('Test content')
  })
})
