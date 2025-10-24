import { mount } from '@vue/test-utils'
import type { ToastProps } from '@wisemen/vue-core-components/dist/components/toast/toast.props'
import {
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { h } from 'vue'

import Toast from '@/components/toast/Toast.vue'

const MockToastPart = { template: '<div />' }

const MockToastRoot = {
  emits: [
    'close-toast',
  ],
  props: [
    'title',
    'actions',
    'description',
    'icon',
    'preview',
    'type',
    'testId',
  ],
  template: '<div data-test-id="mock-toast-root"><slot /></div>',
}

vi.mock('@/components/toast/parts/ToastRoot.vue', () => ({
  default: {
    emits: [
      'close-toast',
    ],
    props: [
      'title',
      'actions',
      'description',
      'icon',
      'preview',
      'type',
      'testId',
    ],
    template: '<div data-test-id="mock-toast-root"><slot/></div>',
  },
}))

vi.mock('@/components/toast/parts/ToastActions.vue', () => ({ default: { template: '<div></div>' } }))
vi.mock('@/components/toast/parts/ToastCloseButton.vue', () => ({ default: { template: '<div></div>' } }))
vi.mock('@/components/toast/parts/ToastDescription.vue', () => ({ default: { template: '<div></div>' } }))
vi.mock('@/components/toast/parts/ToastIcon.vue', () => ({ default: { template: '<div></div>' } }))
vi.mock('@/components/toast/parts/ToastPreview.vue', () => ({ default: { template: '<div></div>' } }))
vi.mock('@/components/toast/parts/ToastTitle.vue', () => ({ default: { template: '<div></div>' } }))

describe('toast.vue', () => {
  const defaultProps: ToastProps = {
    title: 'Test Title',
    description: 'Test Description',
    type: 'info',
  }

  it('renders ToastRoot and passes basic props correctly', () => {
    const wrapper = mount(Toast, {
      global: {
        stubs: {

          ToastActions: MockToastPart,
          ToastCloseButton: MockToastPart,
          ToastDescription: MockToastPart,
          ToastIcon: MockToastPart,
          ToastPreview: MockToastPart,
          ToastRoot: MockToastRoot,
          ToastTitle: MockToastPart,
        },
      },
      props: defaultProps,
    })

    const toastRoot = wrapper.findComponent(MockToastRoot)

    expect(toastRoot.exists()).toBeTruthy()

    expect(toastRoot.props().title).toBe(defaultProps.title)
    expect(toastRoot.props().description).toBe(defaultProps.description)
    expect(toastRoot.props().type).toBe(defaultProps.type)
  })

  it('passes actions prop correctly when provided', () => {
    const actions = [
      {
        label: 'Action 1',
        onClick: vi.fn(),
      },
      {
        label: 'Action 2',
        onClick: vi.fn(),
      },
    ]
    const wrapper = mount(Toast, {
      global: {
        stubs: {
          ToastActions: MockToastPart,
          ToastCloseButton: MockToastPart,
          ToastDescription: MockToastPart,
          ToastIcon: MockToastPart,
          ToastPreview: MockToastPart,
          ToastRoot: MockToastRoot,
          ToastTitle: MockToastPart,
        },
      },
      props: {
        ...defaultProps,
        actions,
      },
    })

    const toastRoot = wrapper.findComponent(MockToastRoot)

    expect(toastRoot.props().actions).toEqual(actions)
  })

  it('passes icon prop correctly when provided', () => {
    const icon = 'check' as const
    const wrapper = mount(Toast, {
      global: {
        stubs: {
          ToastActions: MockToastPart,
          ToastCloseButton: MockToastPart,
          ToastDescription: MockToastPart,
          ToastIcon: MockToastPart,
          ToastPreview: MockToastPart,
          ToastRoot: MockToastRoot,
          ToastTitle: MockToastPart,
        },
      },
      props: {
        ...defaultProps,
        icon,
      },
    })

    const toastRoot = wrapper.findComponent(MockToastRoot)

    expect(toastRoot.props().icon).toBe(icon)
  })

  it('passes preview prop correctly when provided', () => {
    const previewVNode = h('img', {
      alt: 'preview',
      src: '/test.png',
    })
    const wrapper = mount(Toast, {
      global: {
        stubs: {
          ToastActions: MockToastPart,
          ToastCloseButton: MockToastPart,
          ToastDescription: MockToastPart,
          ToastIcon: MockToastPart,
          ToastPreview: MockToastPart,
          ToastRoot: MockToastRoot,
          ToastTitle: MockToastPart,
        },
      },
      props: {
        ...defaultProps,
        preview: previewVNode,
      },
    })

    const toastRoot = wrapper.findComponent(MockToastRoot)

    expect(toastRoot.props().preview).toEqual(previewVNode)
  })

  it('emits "closeToast" when ToastRoot emits "close-toast"', async () => {
    const wrapper = mount(Toast, {
      global: { stubs: { ToastRoot: MockToastRoot } },
      props: defaultProps,
    })

    const rootStub = wrapper.findComponent(MockToastRoot)

    expect(rootStub.exists()).toBeTruthy()

    await rootStub.vm.$emit('close-toast')

    expect(wrapper.emitted('closeToast')).toHaveLength(1)
  })
})
