import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from 'radix-vue'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import AppAvatar from '@/components/avatar/AppAvatar.vue'

describe('appAvatar.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof AppAvatar>>

  beforeEach(() => {
    wrapper = mount(AppAvatar, {
      global: {
        components: {
          AvatarFallback,
          AvatarImage,
          AvatarRoot,
        },
      },
      props: {
        delayMs: 0,
        fallback: 'WM',
        src: null,
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('img').attributes('role')).toBe('img')
  })

  it('renders with tooltip when hasTooltip prop is true', async () => {
    await wrapper.setProps({ hasTooltip: true })
    expect(wrapper.findComponent({ name: 'AppTooltip' }).exists()).toBeTruthy()
  })

  it('does not render with tooltip when hasTooltip prop is false', async () => {
    await wrapper.setProps({ hasTooltip: false })
    expect(wrapper.findComponent({ name: 'AppTooltip' }).exists()).toBeFalsy()
  })

  it('renders with correct fallback text', async () => {
    const fallback = 'FB'

    await wrapper.setProps({ fallback })
    expect(wrapper.findComponent({ name: 'AvatarFallback' }).text()).toBe(fallback)
  })

  it('renders with correct image source', async () => {
    await wrapper.setProps({ src: 'image.jpg' })

    expect(wrapper.findComponent({ name: 'AvatarImage' }).attributes('src')).toBe('image.jpg')
  })

  it('renders with correct image source set', async () => {
    await wrapper.setProps({ srcset: 'image1.jpg 1x, image2.jpg 2x' })

    expect(wrapper.findComponent({ name: 'AvatarImage' }).attributes('srcset')).toBe('image1.jpg 1x, image2.jpg 2x')
  })

  it('renders with correct variant', async () => {
    await wrapper.setProps({ variant: 'muted' })
    expect(wrapper.findComponent({ name: 'AvatarFallback' }).classes()).toContain('bg-muted-background')
  })

  it('renders with correct size', async () => {
    await wrapper.setProps({ size: 'sm' })
    expect(wrapper.findComponent({ name: 'AvatarRoot' }).classes()).toContain('size-8')
    await wrapper.setProps({ size: 'lg' })
    expect(wrapper.findComponent({ name: 'AvatarRoot' }).classes()).toContain('size-12')
  })
})
