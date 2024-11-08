import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppTagsInput from '@/components/tags-input/AppTagsInput.vue'

describe('appTagsInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppTagsInput>>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(AppTagsInput, {
      attachTo: document.body,
      props: {
        max: 2,
        modelValue: [
          'tag1',
        ],
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('input').attributes('type')).toBe('text')

    const tags = wrapper.findAll('[data-radix-vue-collection-item]')

    expect(tags[0]?.html()).contains('tag1')
  })

  it('renders with given id', async () => {
    await wrapper.setProps({ id: 'test' })
    expect(wrapper.find('input').attributes('id')).toBe('test')
  })

  it('renders invalid state correctly', async () => {
    await wrapper.setProps({ isInvalid: true })
    expect(wrapper.classes()).toContain('border-destructive')
  })

  it('renders disabled state correctly', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('renders placeholder correctly', async () => {
    await wrapper.setProps({ placeholder: 'Placeholder' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Placeholder')
  })

  it('updates input state', async () => {
    await wrapper.find('input').setValue('tag2')
    await wrapper.find('input').trigger('keydown.enter')
    expect(wrapper.props('modelValue')).toEqual([
      'tag1',
      'tag2',
    ])
  })

  it('adds new tag correctly', async () => {
    await wrapper.find('input').setValue('tag2')
    await wrapper.find('input').trigger('keydown.enter')

    const tags = wrapper.findAll('[data-radix-vue-collection-item]')

    expect(tags[1]?.html()).contains('tag2')
  })

  it('does not add tag if max is reached', async () => {
    await wrapper.find('input').setValue('tag2')
    await wrapper.find('input').trigger('keydown.enter')
    await wrapper.find('input').setValue('tag3')
    await wrapper.find('input').trigger('keydown.enter')

    const tags = wrapper.findAll('[data-radix-vue-collection-item]')

    expect(tags[1]?.html()).contains('tag2')
    expect(tags[2]).toBeUndefined()
  })
})
