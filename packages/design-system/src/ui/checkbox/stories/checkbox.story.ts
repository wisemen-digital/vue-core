import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import CheckboxPlayground from './CheckboxPlayground.vue'

const meta = {
  title: 'Components/Checkbox',
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    isHorizontal: {
      control: 'boolean',
      description: 'Whether the checkbox layout is horizontal',
    },
    label: {
      control: 'text',
      description: 'The label of the checkbox',
    },
  },
  tags: [
    'autodocs',
  ],
  component: CheckboxPlayground,
} satisfies Meta<typeof CheckboxPlayground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isDisabled: false,
    isHorizontal: false,
    label: 'Checkbox Label',
  },
}
