// eslint-disable-next-line check-file/filename-naming-convention
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

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

const ExampleBox = `<div class="bg-brand-500 text-white p-4 rounded-md">Item</div>`

export const Default: Story = {
  render: () => ({
    components: { RowLayout },
    template: `
      <RowLayout>
        ${ExampleBox}
        ${ExampleBox}
        ${ExampleBox}
      </RowLayout>
    `,
  }),
}

export const WithLargeGap: Story = {
  render: () => ({
    components: { RowLayout },
    template: `
      <RowLayout gap="xl">
        ${ExampleBox}
        ${ExampleBox}
        ${ExampleBox}
      </RowLayout>
    `,
  }),
}

export const CenterJustified: Story = {
  render: () => ({
    components: { RowLayout },
    template: `
      <RowLayout justify="center">
        ${ExampleBox}
        ${ExampleBox}
        ${ExampleBox}
      </RowLayout>
    `,
  }),
}

export const SpaceBetween: Story = {
  render: () => ({
    components: { RowLayout },
    template: `
      <RowLayout justify="between">
        ${ExampleBox}
        ${ExampleBox}
        ${ExampleBox}
      </RowLayout>
    `,
  }),
}

export const AlignEnd: Story = {
  render: () => ({
    components: { RowLayout },
    template: `
      <RowLayout align="end">
        <div class="bg-brand-500 text-white p-4 rounded-md h-20">Tall Item</div>
        ${ExampleBox}
        ${ExampleBox}
      </RowLayout>
    `,
  }),
}
