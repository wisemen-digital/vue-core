import { flushPromises, mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'

import { useFormLabelStyle } from '@/components/form-label/formLabel.style'
import FormLabel from '@/components/form-label/FormLabel.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

const labelStyle = useFormLabelStyle()

describe('formLabel', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FormLabel, {
      props: {
        for: 'id',
        label: 'Label',
      },
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('span').text()).toBe('Label')
    expect(wrapper.attributes('for')).toBe('id')
  })

  it('adapts the label correctly if required', () => {
    const wrapper = mount(FormLabel, {
      props: {
        isRequired: true,
        for: 'id',
        label: 'Label',
      },
    })

    expect(wrapper.find('span').text()).toContain('*')
  })

  it('renders given tooltip content and icon', async () => {
    const wrapper = mount(FormLabel, {
      global: {
        components: {
          AppIcon,
          AppTooltip,
        },
      },
      props: {
        for: 'id',
        label: 'Label',
        tooltip: 'Tooltip',
      },
    })

    await flushPromises()

    expect(wrapper.findComponent(AppTooltip).props().content).toBe('Tooltip')
    expect(wrapper.findComponent(AppIcon).exists()).toBeTruthy()
  })

  it('applies correct classes if invalid', () => {
    const style = labelStyle.label({
      isDisabled: false,
      isInvalid: true,
    })
    const wrapper = mount(FormLabel, {
      props: {
        isInvalid: true,
        for: 'id',
        label: 'Label',
      },
    })

    expect(wrapper.find('span').attributes('class')).toBe(style)
  })

  it('applies correct classes if disabled', () => {
    const style = labelStyle.label({
      isDisabled: true,
      isInvalid: false,
    })
    const wrapper = mount(FormLabel, {
      props: {
        isDisabled: true,
        for: 'id',
        label: 'Label',
      },
    })

    expect(wrapper.find('span').attributes('class')).toBe(style)
  })
})
