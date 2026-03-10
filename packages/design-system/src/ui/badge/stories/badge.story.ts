import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import BadgePlayground from './BadgePlayground.vue'
import BadgeVariantPlayground from './BadgeVariantPlayground.vue'

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

export const Translucent: Story = {
  args: {
    color: 'gray',
  },
  render: (args) => ({
    components: {
      BadgeVariantPlayground,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<BadgeVariantPlayground v-bind="args" variant="translucent" />',
  }),
}

export const Outline: Story = {
  args: {
    color: 'gray',
  },
  render: (args) => ({
    components: {
      BadgeVariantPlayground,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<BadgeVariantPlayground v-bind="args" variant="outline" />',
  }),
}

export const Solid: Story = {
  args: {
    color: 'gray',
  },
  render: (args) => ({
    components: {
      BadgeVariantPlayground,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<BadgeVariantPlayground v-bind="args" variant="solid" />',
  }),
}
