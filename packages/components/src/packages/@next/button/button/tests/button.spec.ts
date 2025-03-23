import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import type { ButtonProps } from '@/packages/@next/button/shared/button.props'
import Button from '@/packages/@next/button/button/Button.vue'

describe('button', () => {
  /**
   * Functional tests
   */
  it('should emit a click event in its default state', async () => {
    const onClick = vi.fn()

    const instance = mount(Button, {
      props: {
        onClick,
      },
    })

    await instance.trigger('click')

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('should not emit a click event when the button is loading', async () => {
    const onClick = vi.fn()

    const instance = mount(Button, {
      props: {
        isLoading: true,
        onClick,
      },
    })

    await instance.trigger('click')

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should not emit a click event when the button is disabled', async () => {
    const onClick = vi.fn()

    const instance = mount(Button, {
      props: {
        isDisabled: true,
        onClick,
      },
    })

    await instance.trigger('click')

    expect(onClick).not.toHaveBeenCalled()
  })

  /**
   * Visual tests
   */
  it.todo('should render a button with the type prop')
  it.todo('should render a button with the size prop')

  it('should render an icon left', () => {
    const instance = mount(Button, {
      props: {
        iconLeft: 'search',
      },
    })

    expect(instance.find('svg').exists()).toBeTruthy()
  })

  it('should render an icon right', () => {
    const instance = mount(Button, {
      props: {
        iconRight: 'search',
      },
    })

    expect(instance.find('svg').exists()).toBeTruthy()
  })
})

const variants: ButtonProps['variant'][] = [
  'primary',
  'secondary-gray',
  'secondary-color',
  'tertiary-gray',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
]

describe.each(variants)('variant %s', (variant) => {
  it('renders the variant correctly', () => {
    const instance = mount(Button, {
      props: {
        variant,
      },
    })

    expect(instance.html).toMatchSnapshot()
  })
})
