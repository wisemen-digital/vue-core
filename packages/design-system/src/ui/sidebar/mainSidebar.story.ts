import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Playground from '@/ui/sidebar/playground.vue'

const meta = {
  title: 'Components/Sidebar',
  tags: [
    'autodocs',
  ],
  component: Playground,
} satisfies Meta<typeof Playground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
