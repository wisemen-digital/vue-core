// eslint-disable-next-line check-file/filename-naming-convention
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import type { VNode } from 'vue'
import { h } from 'vue'

import RowLayout from './RowLayout.vue'

const meta = {
  title: 'Components/RowLayout',
  tags: [
    'autodocs',
  ],
  component: RowLayout,
} satisfies Meta<typeof RowLayout>

export default meta
type Story = StoryObj<typeof meta>

function ExampleBox(): VNode {
  return h('div', {
    class: 'bg-brand-500 text-white p-4 rounded-md',
  }, 'Item')
}

export const Default: Story = {
  render: () => ({
    setup() {
      return () => h(RowLayout, {}, () => [
        h(ExampleBox),
        h(ExampleBox),
        h(ExampleBox),
      ])
    },
  }),
}

export const WithLargeGap: Story = {
  render: () => ({
    setup() {
      return () => h(RowLayout, {
        gap: 'xl',
      }, () => [
        h(ExampleBox),
        h(ExampleBox),
        h(ExampleBox),
      ])
    },
  }),
}

export const CenterJustified: Story = {
  render: () => ({
    setup() {
      return () => h(RowLayout, {
        justify: 'center',
      }, () => [
        h(ExampleBox),
        h(ExampleBox),
        h(ExampleBox),
      ])
    },
  }),
}

export const SpaceBetween: Story = {
  render: () => ({
    setup() {
      return () => h(RowLayout, {
        justify: 'between',
      }, () => [
        h(ExampleBox),
        h(ExampleBox),
        h(ExampleBox),
      ])
    },
  }),
}

export const AlignEnd: Story = {
  render: () => ({
    setup() {
      return () => h(RowLayout, {
        align: 'end',
      }, () => [
        h('div', {
          class: 'bg-brand-500 text-white p-4 rounded-md h-20',
        }, 'Tall Item'),
        h(ExampleBox),
        h(ExampleBox),
      ])
    },
  }),
}
