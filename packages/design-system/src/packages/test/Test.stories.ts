// eslint-disable-next-line check-file/filename-naming-convention
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Test from './Test.vue'

const meta = {
  title: 'Components/Test',
  tags: [
    'autodocs',
  ],
  component: Test,
} satisfies Meta<typeof Test>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Hello World',
  },
}
export const IsActive: Story = {
  args: {
    isActive: true,
    label: 'Ik ben active',
  },
}
