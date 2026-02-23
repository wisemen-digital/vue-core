import {
  PlusIcon,
  Settings01Icon,
  Trash01Icon,
} from '@repo/icons'
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  expect,
  userEvent,
  within,
} from 'storybook/test'

import IconButton from './IconButton.vue'

const meta = {
  title: 'Components/IconButton',
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'Disables the button, preventing user interaction',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading state and disables interaction',
    },
    isTooltipDisabled: {
      control: 'boolean',
      description: 'Disables tooltip display',
    },
    icon: {
      control: false,
      description: 'Icon displayed inside the button',

    },
    keyboardShortcut: {
      control: 'text',
      description: 'Visual representation of a keyboard shortcut (e.g. "⌘K")',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the button (required for screen readers)',
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
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Settings',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button', {
      name: 'Settings',
    })

    await expect(button).not.toBeDisabled()

    const icon = button.querySelector('svg')

    await expect(icon).toBeInTheDocument()

    await userEvent.click(button)
  },
  render: () => ({
    components: {
      IconButton,
      Settings01Icon,
    },
    setup() {
      return {
        Settings01Icon,
      }
    },
    template: '<IconButton label="Settings" :icon="Settings01Icon" />',
  }),
}

export const AllVariants: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Settings',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')

    await expect(buttons).toHaveLength(5)

    for (const button of buttons) {
      const icon = button.querySelector('svg')

      await expect(icon).toBeInTheDocument()
    }
  },
  render: () => ({
    components: {
      IconButton,
      Settings01Icon,
    },
    setup() {
      return {
        Settings01Icon,
      }
    },
    template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <IconButton label="Settings" variant="primary" :icon="Settings01Icon" />
        <IconButton label="Settings" variant="secondary" :icon="Settings01Icon" />
        <IconButton label="Settings" variant="tertiary" :icon="Settings01Icon" />
      </div>
      <div class="flex items-center gap-2">
        <IconButton label="Delete" variant="destructive-primary" :icon="Settings01Icon" />
        <IconButton label="Delete" variant="destructive-tertiary" :icon="Settings01Icon" />
      </div>
    </div>`,
  }),
}

export const AllSizes: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Settings',
  },
  render: () => ({
    components: {
      IconButton,
      Settings01Icon,
    },
    setup() {
      return {
        Settings01Icon,
      }
    },
    template: `
    <div class="flex items-center gap-2">
      <IconButton label="Extra Small" size="xs" :icon="Settings01Icon" />
      <IconButton label="Small" size="sm" :icon="Settings01Icon" />
      <IconButton label="Medium" size="md" :icon="Settings01Icon" />
      <IconButton label="Large" size="lg" :icon="Settings01Icon" />
    </div>`,
  }),
}

export const Loading: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Settings',
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
      IconButton,
      Settings01Icon,
    },
    setup() {
      return {
        Settings01Icon,
      }
    },
    template: `
    <div class="flex items-center gap-2">
      <IconButton label="Loading" :is-loading="true" variant="primary" :icon="Settings01Icon" />
      <IconButton label="Loading" :is-loading="true" variant="secondary" :icon="Settings01Icon" />
      <IconButton label="Loading" :is-loading="true" variant="tertiary" :icon="Settings01Icon" />
    </div>`,
  }),
}

export const Disabled: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Settings',
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
      IconButton,
      Settings01Icon,
    },
    setup() {
      return {
        Settings01Icon,
      }
    },
    template: `
    <div class="flex items-center gap-2">
      <IconButton label="Disabled" :is-disabled="true" variant="primary" :icon="Settings01Icon" />
      <IconButton label="Disabled" :is-disabled="true" variant="secondary" :icon="Settings01Icon" />
      <IconButton label="Disabled" :is-disabled="true" variant="tertiary" :icon="Settings01Icon" />
    </div>`,
  }),
}

export const WithTooltip: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Add item',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button', {
      name: 'Add item',
    })

    await expect(button).toBeInTheDocument()

    const icon = button.querySelector('svg')

    await expect(icon).toBeInTheDocument()
  },
  render: () => ({
    components: {
      IconButton,
      PlusIcon,
    },
    setup() {
      return {
        PlusIcon,
      }
    },
    template: '<IconButton label="Add item" tooltip-label="Click to add a new item" :icon="PlusIcon" />',
  }),
}

export const WithKeyboardShortcut: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Settings',
  },
  render: () => ({
    components: {
      IconButton,
      Settings01Icon,
    },
    setup() {
      return {
        Settings01Icon,
      }
    },
    template: '<IconButton label="Open Settings" tooltip-label="Settings" keyboard-shortcut="⌘," :icon="Settings01Icon" />',
  }),
}

export const DestructiveExample: Story = {
  args: {
    icon: Trash01Icon,
    label: 'Delete',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')

    await expect(buttons).toHaveLength(2)

    for (const button of buttons) {
      const icon = button.querySelector('svg')

      await expect(icon).toBeInTheDocument()
    }
  },
  render: () => ({
    components: {
      IconButton,
      Trash01Icon,
    },
    setup() {
      return {
        Trash01Icon,
      }
    },
    template: `
    <div class="flex items-center gap-2">
      <IconButton label="Delete" variant="destructive-primary" :icon="Trash01Icon" />
      <IconButton label="Delete" variant="destructive-tertiary" :icon="Trash01Icon" />
    </div>`,
  }),
}
