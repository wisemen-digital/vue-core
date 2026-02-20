import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Playground from '@/ui/page-top-bar/PageTopBarPlayground.vue'

const meta = {
  title: 'Components/Page Top Bar',
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
