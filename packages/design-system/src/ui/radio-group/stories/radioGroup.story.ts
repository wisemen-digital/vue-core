import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import RadioGroupCardPlayground from './RadioGroupCardPlayground.vue'
import RadioGroupPlayground from './RadioGroupPlayground.vue'

const meta = {
  title: 'Components/RadioGroup',
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    orientation: {
      control: 'select',
      options: [
        'horizontal',
        'vertical',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: RadioGroupPlayground,
} satisfies Meta<typeof RadioGroupPlayground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isDisabled: false,
    orientation: 'vertical',
  },
}

export const Horizontal: Story = {
  args: {
    isDisabled: false,
    orientation: 'horizontal',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    orientation: 'vertical',
  },
}

export const CardVariant: Story = {
  args: {
    isDisabled: false,
    orientation: 'vertical',
  },
  render: (args) => ({
    components: {
      RadioGroupCardPlayground,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<RadioGroupCardPlayground v-bind="args" />',
  }),
}
