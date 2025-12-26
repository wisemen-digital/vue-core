import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import { fn } from 'storybook/test'

import Button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    onClick: fn(),
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: 'select',
      options: [
        'small',
        'medium',
        'large',
      ],
    },
  },

  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [
    'autodocs',
  ],
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    primary: false,
  },
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
}

export const ButtonFalse: Story = {
  args: {
    label: 'Button',
    primary: false,
  },
}
