/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import {
  ArrowRightIcon,
  PlusIcon,
  Trash01Icon,
} from '../../../../../icons-old/src'
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  expect,
  userEvent,
  within,
} from 'storybook/test'

import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'Disables the button, preventing user interaction',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading state and disables interaction',
    },
    keyboardShortcut: {
      control: 'text',
      description: 'Visual representation of a keyboard shortcut (e.g. "⌘K")',
    },
    label: {
      control: 'text',
      description: 'Text label displayed inside the button',
    },
    size: {
      control: 'select',
      description: 'Controls the button size',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
      ],
    },
    tooltipLabel: {
      control: 'text',
      description: 'Tooltip text shown on hover or focus',
    },
    type: {
      control: 'select',
      description: 'Native button type attribute',
      options: [
        'button',
        'submit',
        'reset',
      ],
    },
    variant: {
      control: 'select',
      description: 'Visual style variant of the button',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'destructive-primary',
        'destructive-tertiary',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Button',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')

    await expect(button).toHaveTextContent('Button')

    await expect(button).not.toBeDisabled()

    await userEvent.click(button)
  },
  render: (args) => ({
    components: {
      Button,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<Button v-bind="args" />',
  }),
}

export const AllVariants: Story = {
  args: {
    label: 'Button',
  },
  render: () => ({
    components: {
      Button,
    },
    template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Tertiary" variant="tertiary" />
      </div>
      <div class="flex items-center gap-2">
        <Button label="Destructive Primary" variant="destructive-primary" />
        <Button label="Destructive Tertiary" variant="destructive-tertiary" />
      </div>
    </div>`,
  }),
}

export const AllSizes: Story = {
  args: {
    label: 'Button',
  },
  render: () => ({
    components: {
      Button,
    },
    template: `
    <div class="flex items-center gap-2">
      <Button label="Extra Small" size="xs" />
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>`,
  }),
}

export const WithIconLeft: Story = {
  args: {
    label: 'Add Item',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')

    await expect(button).toHaveTextContent('Add Item')

    const icon = button.querySelector('svg')

    await expect(icon).toBeInTheDocument()
  },
  render: () => ({
    components: {
      Button,
      PlusIcon,
    },
    setup() {
      return {
        PlusIcon,
      }
    },
    template: '<Button label="Add Item" :icon-left="PlusIcon" />',
  }),
}

export const WithIconRight: Story = {
  args: {
    label: 'Continue',
  },
  render: () => ({
    components: {
      ArrowRightIcon,
      Button,
    },
    setup() {
      return {
        ArrowRightIcon,
      }
    },
    template: '<Button label="Continue" :icon-right="ArrowRightIcon" />',
  }),
}

export const WithBothIcons: Story = {
  args: {
    label: 'Add and Continue',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')

    const icons = Array.from(button.querySelectorAll('svg')).filter(
      (icon) => icon.getAttribute('aria-hidden') !== 'true',
    )

    await expect(icons).toHaveLength(2)
  },
  render: () => ({
    components: {
      ArrowRightIcon,
      Button,
      PlusIcon,
    },
    setup() {
      return {
        ArrowRightIcon,
        PlusIcon,
      }
    },
    template: '<Button label="Add and Continue" :icon-left="PlusIcon" :icon-right="ArrowRightIcon" />',
  }),
}

export const Loading: Story = {
  args: {
    label: 'Loading',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')

    for (const button of buttons) {
      await expect(button).toHaveAttribute('aria-busy', 'true')
      await expect(button).toHaveAttribute('aria-disabled', 'true')
    }
  },
  render: () => ({
    components: {
      Button,
    },
    template: `
    <div class="flex items-center gap-2">
      <Button label="Loading" :is-loading="true" variant="primary" />
      <Button label="Loading" :is-loading="true" variant="secondary" />
      <Button label="Loading" :is-loading="true" variant="tertiary" />
    </div>`,
  }),
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')

    for (const button of buttons) {
      await expect(button).toBeDisabled()
    }
  },
  render: () => ({
    components: {
      Button,
    },
    template: `
    <div class="flex items-center gap-2">
      <Button label="Disabled" :is-disabled="true" variant="primary" />
      <Button label="Disabled" :is-disabled="true" variant="secondary" />
      <Button label="Disabled" :is-disabled="true" variant="tertiary" />
    </div>`,
  }),
}

export const WithTooltip: Story = {
  args: {
    label: 'Hover me',
  },
  render: () => ({
    components: {
      Button,
    },
    template: '<Button label="Hover me" tooltip-label="This is a helpful tooltip" />',
  }),
}

export const WithKeyboardShortcut: Story = {
  args: {
    label: 'Save',
  },
  render: () => ({
    components: {
      Button,
    },
    template: '<Button label="Save" keyboard-shortcut="⌘S" />',
  }),
}

export const DestructiveExample: Story = {
  args: {
    label: 'Delete',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')

    await expect(buttons).toHaveLength(2)

    for (const button of buttons) {
      await expect(button).toHaveTextContent('Delete')

      const icon = button.querySelector('svg')

      await expect(icon).toBeInTheDocument()
    }
  },
  render: () => ({
    components: {
      Button,
      Trash01Icon,
    },
    setup() {
      return {
        Trash01Icon,
      }
    },
    template: `
    <div class="flex items-center gap-2">
      <Button label="Delete" variant="destructive-primary" :icon-left="Trash01Icon" />
      <Button label="Delete" variant="destructive-tertiary" :icon-left="Trash01Icon" />
    </div>`,
  }),
}
