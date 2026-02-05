import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Checkbox from '@/ui/checkbox/Checkbox.vue'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isHorizontal: true,
    isIndeterminate: true,
    label: 'Checkbox Label',
    modelValue: true,
  },
}
