// eslint-disable-next-line check-file/filename-naming-convention
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Button from '@/ui/button/button/Button.vue'

import RowLayout from './RowLayout.vue'

const meta = {
  title: 'Components/RowLayout',
  argTypes: {
    align: {
      control: 'select',
      description: 'Vertical alignment of items',
      options: [
        'center',
        'end',
        'start',
      ],
    },
    gap: {
      control: 'select',
      description: 'Gap between items',
      options: [
        'none',
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
      ],
    },
    justify: {
      control: 'select',
      description: 'Horizontal justification of items',
      options: [
        'between',
        'center',
        'end',
        'start',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: RowLayout,
} satisfies Meta<typeof RowLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    align: 'center',
    gap: 'md',
    justify: 'start',
  },
  render: (args) => ({
    components: {
      Button,
      RowLayout,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <RowLayout v-bind="args">
      <Button label="Waffles" />
      <Button label="Pancakes" variant="secondary" />
      <Button label="Croissants" variant="tertiary" />
    </RowLayout>`,
  }),
}

export const WithLargeGap: Story = {
  args: {
    align: 'center',
    gap: 'xl',
    justify: 'start',
  },
  render: (args) => ({
    components: {
      Button,
      RowLayout,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <RowLayout v-bind="args">
      <Button label="Tacos" />
      <Button label="Burritos" variant="secondary" />
      <Button label="Nachos" variant="tertiary" />
    </RowLayout>`,
  }),
}

export const CenterJustified: Story = {
  args: {
    align: 'center',
    gap: 'md',
    justify: 'center',
  },
  render: (args) => ({
    components: {
      Button,
      RowLayout,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <RowLayout v-bind="args" class="w-full">
      <Button label="Ping" />
      <Button label="Pong" variant="secondary" />
      <Button label="Boing" variant="tertiary" />
    </RowLayout>`,
  }),
}

export const SpaceBetween: Story = {
  args: {
    align: 'center',
    gap: 'lg',
    justify: 'between',
  },
  render: (args) => ({
    components: {
      Button,
      RowLayout,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <RowLayout v-bind="args" class="w-full">
      <Button label="Hello" />
      <Button label="Hi there" variant="secondary" />
      <Button label="Morning" variant="tertiary" />
      <Button label="Good day" variant="secondary" />
    </RowLayout>`,
  }),
}

export const AlignEnd: Story = {
  args: {
    align: 'end',
    gap: 'md',
    justify: 'start',
  },
  render: (args) => ({
    components: {
      Button,
      RowLayout,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <RowLayout v-bind="args">
      <div class="h-20 flex items-end">
        <Button label="Tall" />
      </div>
      <Button label="Small" variant="secondary" />
      <Button label="Tiny" variant="tertiary" />
    </RowLayout>`,
  }),
}
