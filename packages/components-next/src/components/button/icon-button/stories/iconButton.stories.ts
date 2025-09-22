import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import type { IconButtonProps } from '@/components/button/icon-button/iconButton.props'
import IconButton from '@/components/button/icon-button/IconButton.vue'

const meta = {
  title: 'Components/IconButton',
  args: {
    onClick: (): void => {},
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: [
        'plus',
        'minus',
        'check',
        'close',
        'arrowLeft',
        'arrowRight',
        'chevronLeft',
        'chevronRight',
        'search',
        'eye',
        'eyeOff',
      ],
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
      ],
    },
    type: {
      control: 'select',
      options: [
        'button',
        'submit',
        'reset',
      ],
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'destructive-primary',
        'destructive-secondary',
        'destructive-tertiary',
      ],
    },
    label: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: [
    'autodocs',
  ],
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: 'plus',
    label: 'Add item',
    variant: 'primary',
  },
  render: (args) => ({
    components: {
      IconButton,
    },
    setup(): { args: IconButtonProps } {
      return {
        args,
      }
    },
    template: '<IconButton v-bind="args" />',
  }),
}

export const Secondary: Story = {
  args: {
    icon: 'check',
    label: 'Confirm',
    variant: 'secondary',
  },
  render: (args) => ({
    components: {
      IconButton,
    },
    setup(): { args: IconButtonProps } {
      return {
        args,
      }
    },
    template: '<IconButton v-bind="args" />',
  }),
}

export const Tertiary: Story = {
  args: {
    icon: 'close',
    label: 'Close',
    variant: 'tertiary',
  },
  render: (args) => ({
    components: {
      IconButton,
    },
    setup(): { args: IconButtonProps } {
      return {
        args,
      }
    },
    template: '<IconButton v-bind="args" />',
  }),
}

export const Loading: Story = {
  args: {
    icon: 'plus',
    label: 'Loading',
    isLoading: true,
    variant: 'primary',
  },
  render: (args) => ({
    components: {
      IconButton,
    },
    setup(): { args: IconButtonProps } {
      return {
        args,
      }
    },
    template: '<IconButton v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: {
    icon: 'minus',
    label: 'Remove item',
    isDisabled: true,
    variant: 'primary',
  },
  render: (args) => ({
    components: {
      IconButton,
    },
    setup(): { args: IconButtonProps } {
      return {
        args,
      }
    },
    template: '<IconButton v-bind="args" />',
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: {
      IconButton,
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <IconButton icon="plus" label="Small" size="sm" />
        <IconButton icon="plus" label="Medium" size="md" />
        <IconButton icon="plus" label="Large" size="lg" />
        <IconButton icon="plus" label="XL" size="xl" />
        <IconButton icon="plus" label="2XL" size="2xl" />
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: {
      IconButton,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <IconButton icon="check" label="Primary" variant="primary" />
          <IconButton icon="search" label="Secondary" variant="secondary" />
          <IconButton icon="eye" label="Tertiary" variant="tertiary" />
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <IconButton icon="close" label="Destructive Primary" variant="destructive-primary" />
          <IconButton icon="minus" label="Destructive Secondary" variant="destructive-secondary" />
          <IconButton icon="close" label="Destructive Tertiary" variant="destructive-tertiary" />
        </div>
      </div>
    `,
  }),
}

export const Icons: Story = {
  render: () => ({
    components: {
      IconButton,
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
        <IconButton icon="plus" label="Plus" />
        <IconButton icon="minus" label="Minus" />
        <IconButton icon="check" label="Check" />
        <IconButton icon="close" label="Close" />
        <IconButton icon="arrowLeft" label="Arrow Left" />
        <IconButton icon="arrowRight" label="Arrow Right" />
        <IconButton icon="chevronLeft" label="Chevron Left" />
        <IconButton icon="chevronRight" label="Chevron Right" />
        <IconButton icon="search" label="Search" />
        <IconButton icon="eye" label="Eye" />
        <IconButton icon="eyeOff" label="Eye Off" />
      </div>
    `,
  }),
}