import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Playground from '@/ui/checkbox-group/Playground.vue'

const meta = {
  title: 'Components/CheckboxGroup',
  component: Playground,
} satisfies Meta<typeof Playground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
