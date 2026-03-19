import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Playground from '@/ui/sidebar/playground.vue'

const meta = {
  title: 'Components/Sidebar',
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'icons-only',
        'icons-with-labels',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: Playground,
} satisfies Meta<typeof Playground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'icons-only',
  },
}
