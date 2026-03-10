import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import BadgePlayground from './BadgePlayground.vue'

const meta = {
  title: 'Components/Badge',
  argTypes: {
    color: {
      control: 'select',
      options: [
        'gray',
        'brand',
        'blue',
        'pink',
        'error',
        'success',
        'warning',
        'purple',
      ],
    },
    hasDot: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    rounded: {
      control: 'select',
      options: [
        'default',
        'full',
      ],
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
      ],
    },
    variant: {
      control: 'select',
      options: [
        'translucent',
        'outline',
        'solid',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: BadgePlayground,
} satisfies Meta<typeof BadgePlayground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'gray',
    hasDot: false,
    label: 'Badge',
    rounded: 'default',
    size: 'md',
    variant: 'translucent',
  },
}

export const WithDot: Story = {
  args: {
    color: 'brand',
    hasDot: true,
    label: 'Status',
    rounded: 'default',
    size: 'md',
    variant: 'translucent',
  },
}

export const Solid: Story = {
  args: {
    color: 'error',
    hasDot: false,
    label: 'Error',
    rounded: 'default',
    size: 'md',
    variant: 'solid',
  },
}

export const Outline: Story = {
  args: {
    color: 'success',
    hasDot: false,
    label: 'Success',
    rounded: 'default',
    size: 'md',
    variant: 'outline',
  },
}

export const RoundedFull: Story = {
  args: {
    color: 'purple',
    hasDot: false,
    label: 'Pill',
    rounded: 'full',
    size: 'md',
    variant: 'translucent',
  },
}
