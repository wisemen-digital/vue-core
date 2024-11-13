import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { h, type VNode } from 'vue'

import FormGroup from '@/components/form-group/FormGroup.vue'

describe('formGroup', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(FormGroup, {
      slots: {
        default(): VNode {
          return h('button', 'content')
        },
      },
    })

    expect(wrapper.find('button').exists()).toBeTruthy()
    expect(wrapper.find('button').text()).toBe('content')
  })
})
