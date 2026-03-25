import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Separator from './Separator.vue'

const meta = {
  title: 'Components/Separator',
  argTypes: {
    orientation: {
      control: 'select',
      description: 'The orientation of the separator',
      options: [
        'horizontal',
        'vertical',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: Separator,
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Separator,
    },
    template: `
    <div class="flex flex-col gap-8 w-64">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-primary">Section above</span>
        <Separator orientation="horizontal" />
        <span class="text-sm text-primary">Section below</span>
      </div>

      <div class="flex items-center gap-2 h-6">
        <span class="text-sm text-primary">Left</span>
        <Separator orientation="vertical" />
        <span class="text-sm text-primary">Right</span>
      </div>
    </div>`,
  }),
}
