import type { Meta } from '@storybook/vue3-vite'

import ColumnLayout from './ColumnLayout.vue'

const meta = {
  title: 'Components/ColumnLayout',
  argTypes: {},
  tags: [
    'autodocs',
  ],
} satisfies Meta<typeof ColumnLayout>

export default meta

type Story = Meta<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      ColumnLayout,
    },
    template: `
    <ColumnLayout>
      <div class="bg-tertiary p-4">Column 1</div>
      <div class="bg-tertiary p-4">Column 2</div>
      <div class="bg-tertiary p-4">Column 3</div>
    </ColumnLayout>`,
  }),
}
