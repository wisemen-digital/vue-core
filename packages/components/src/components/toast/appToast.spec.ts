import type { VueWrapper } from '@vue/test-utils'
import { flushPromises, mount } from '@vue/test-utils'
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { nextTick } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppToastContainer from '@/components/toast/AppToastContainer.vue'
import { useToast } from '@/composables/toast.composable'

describe('appToast', () => {
  const actionMock = vi.fn()
  let wrapper: VueWrapper<InstanceType<typeof AppToastContainer>>

  beforeEach(async () => {
    document.body.innerHTML = ''
    wrapper = mount(AppToastContainer, {
      attachTo: document.body,
    })

    const toast = useToast()

    toast.show({
      title: 'Title',
      action: {
        label: 'Retry',
        onClick: actionMock,
      },
      description: 'Description',
      icon: 'checkmark',
      type: 'info',
    })

    await nextTick()
    await flushPromises()
  })

  it('renders with the correct content', () => {
    const toastElement = wrapper.find('[data-sonner-toast]')

    expect(toastElement.exists()).toBe(true)
    expect(toastElement.text()).toContain('Title')
    expect(toastElement.text()).toContain('Description')
  })

  it('renders with the correct icon', () => {
    const toastElement = wrapper.find('[data-sonner-toast]')
    const iconElement = toastElement.findAllComponents(AppIcon)[1]

    expect(iconElement.exists()).toBe(true)
    expect(iconElement.props('icon')).toBe('checkmark')
  })

  it('renders icon styling based on type', () => {
    const toastElement = wrapper.find('[data-sonner-toast]')
    const iconElement = toastElement.findAllComponents(AppIcon)[1]

    expect(iconElement.exists()).toBe(true)
    expect(iconElement.classes()).toContain('text-primary')
  })

  it('should close when the close button is clicked', async () => {
    const toastElement = wrapper.find('[data-sonner-toast]')
    const closeButton = toastElement.find('button')

    await closeButton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 200))
    expect(wrapper.text()).not.toContain('Title')
  })

  it('should handle action button click', async () => {
    const toastElement = wrapper.find('[data-sonner-toast]')
    const actionButton = toastElement.findAll('button')[1]

    await actionButton.trigger('click')

    expect(actionMock).toHaveBeenCalled()
  })
})
