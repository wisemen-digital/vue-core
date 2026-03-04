import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import TabsOverflowPlayground from './TabsOverflowPlayground.vue'
import TabsPlayground from './TabsPlayground.vue'

const meta = {
  title: 'Components/Tabs',
  argTypes: {
    isFullWidth: {
      control: 'boolean',
    },
    orientation: {
      control: 'select',
      options: [
        'horizontal',
        'vertical',
      ],
    },
    variant: {
      control: 'select',
      options: [
        'underline',
        'button-border',
        'button-brand',
      ],
    },
  },

  tags: [
    'autodocs',
  ],
  component: TabsPlayground,
} satisfies Meta<typeof TabsPlayground>

export default meta

type Story = StoryObj<typeof meta>

export const Underline: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'underline',
  },
}

export const ButtonBorder: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'button-border',
  },
}

export const ButtonBrand: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'button-brand',
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'underline',
  },
}

export const FullWidth: Story = {
  args: {
    isFullWidth: true,
    orientation: 'horizontal',
    variant: 'underline',
  },
}

export const HorizontalOverflow: Story = {
  args: {
    variant: 'underline',
  },
  render: (args) => ({
    components: {
      TabsOverflowPlayground,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<TabsOverflowPlayground v-bind="args" />',
  }),
}
