import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppTextarea from '@/components/textarea/AppTextarea.vue'

describe('appText', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppTextarea>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(AppTextarea, {
      attachTo: document.body,
      props: {
        modelValue: '',
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('TEXTAREA')
  })

  it('renders with given id', async () => {
    await wrapper.setProps({ id: 'test' })
    expect(wrapper.attributes('id')).toBe('test')
  })

  it('applies correct resize prop', async () => {
    await wrapper.setProps({ resize: 'horizontal' })
    expect(wrapper.classes()).toContain('resize-x')
  })

  it('applies custom height classes', async () => {
    await wrapper.setProps({ heightClass: 'h-32' })
    expect(wrapper.classes()).toContain('h-32')
  })

  it('renders invalid state correctly', async () => {
    await wrapper.setProps({ isInvalid: true })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('renders disabled state correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('renders placeholder correctly', async () => {
    await wrapper.setProps({ placeholder: 'Placeholder' })
    expect(wrapper.attributes('placeholder')).toBe('Placeholder')
  })
})
