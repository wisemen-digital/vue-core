import {
  ArrowRightIcon,
  LinkExternal01Icon,
  PlusIcon,
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

import Link from './Link.vue'

const meta = {
  title: 'Components/Link',
  argTypes: {
    keyboardShortcut: {
      control: 'text',
      description: 'Visual representation of a keyboard shortcut (e.g. "⌘K")',
    },
    label: {
      control: 'text',
      description: 'Text label displayed inside the link',
    },
    link: {
      control: 'object',
      description: 'The link attributes when using a standard anchor link',
    },
    size: {
      control: 'select',
      description: 'Controls the link size',
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
    variant: {
      control: 'select',
      description: 'Visual style variant of the link',
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
  component: Link,
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Link',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole('link')

    await expect(link).toHaveTextContent('Learn More')

    await expect(link).toHaveAttribute('href', '#')

    await userEvent.click(link)
  },
  render: () => ({
    components: {
      Link,
    },
    template: '<Link label="Learn More" :link="{ href: \'#\' }" />',
  }),
}

export const AllVariants: Story = {
  args: {
    label: 'Link',
  },
  render: () => ({
    components: {
      Link,
    },
    template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Link label="Primary" variant="primary" :link="{ href: '#' }" />
        <Link label="Secondary" variant="secondary" :link="{ href: '#' }" />
        <Link label="Tertiary" variant="tertiary" :link="{ href: '#' }" />
      </div>
      <div class="flex items-center gap-2">
        <Link label="Destructive Primary" variant="destructive-primary" :link="{ href: '#' }" />
        <Link label="Destructive Tertiary" variant="destructive-tertiary" :link="{ href: '#' }" />
      </div>
    </div>`,
  }),
}

export const AllSizes: Story = {
  args: {
    label: 'Link',
  },
  render: () => ({
    components: {
      Link,
    },
    template: `
    <div class="flex items-center gap-2">
      <Link label="Extra Small" size="xs" :link="{ href: '#' }" />
      <Link label="Small" size="sm" :link="{ href: '#' }" />
      <Link label="Medium" size="md" :link="{ href: '#' }" />
      <Link label="Large" size="lg" :link="{ href: '#' }" />
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

    const link = canvas.getByRole('link')

    await expect(link).toHaveTextContent('Add Item')

    const icon = link.querySelector('svg')

    await expect(icon).toBeInTheDocument()
  },
  render: () => ({
    components: {
      Link,
      PlusIcon,
    },
    setup() {
      return {
        PlusIcon,
      }
    },
    template: '<Link label="Add Item" :icon-left="PlusIcon" :link="{ href: \'#\' }" />',
  }),
}

export const WithIconRight: Story = {
  args: {
    label: 'Continue',
  },
  render: () => ({
    components: {
      ArrowRightIcon,
      Link,
    },
    setup() {
      return {
        ArrowRightIcon,
      }
    },
    template: '<Link label="Continue" :icon-right="ArrowRightIcon" :link="{ href: \'#\' }" />',
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

    const link = canvas.getByRole('link')

    const icons = Array.from(link.querySelectorAll('svg')).filter(
      (icon) => icon.getAttribute('aria-hidden') !== 'true',
    )

    await expect(icons).toHaveLength(2)
  },
  render: () => ({
    components: {
      ArrowRightIcon,
      Link,
      PlusIcon,
    },
    setup() {
      return {
        ArrowRightIcon,
        PlusIcon,
      }
    },
    template: '<Link label="Add and Continue" :icon-left="PlusIcon" :icon-right="ArrowRightIcon" :link="{ href: \'#\' }" />',
  }),
}

export const ExternalLink: Story = {
  args: {
    label: 'Documentation',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole('link')

    await expect(link).toHaveAttribute('href', 'https://example.com')
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')

    const icon = link.querySelector('svg')

    await expect(icon).toBeInTheDocument()
  },
  render: () => ({
    components: {
      Link,
      LinkExternal01Icon,
    },
    setup() {
      return {
        LinkExternal01Icon,
      }
    },
    template: `
    <Link
      label="Visit Documentation"
      :icon-right="LinkExternal01Icon"
      :link="{ href: 'https://example.com', target: '_blank', rel: 'noopener noreferrer' }"
    />`,
  }),
}

export const WithTooltip: Story = {
  args: {
    label: 'Hover me',
  },
  render: () => ({
    components: {
      Link,
    },
    template: '<Link label="Hover me" tooltip-label="This is a helpful tooltip" :link="{ href: \'#\' }" />',
  }),
}

export const WithKeyboardShortcut: Story = {
  args: {
    label: 'Dashboard',
  },
  render: () => ({
    components: {
      Link,
    },
    template: '<Link label="Dashboard" keyboard-shortcut="⌘D" :link="{ href: \'#\' }" />',
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

    const links = canvas.getAllByRole('link')

    await expect(links).toHaveLength(2)

    for (const link of links) {
      await expect(link).toHaveTextContent('Delete Account')

      const icon = link.querySelector('svg')

      await expect(icon).toBeInTheDocument()
    }
  },
  render: () => ({
    components: {
      Link,
      Trash01Icon,
    },
    setup() {
      return {
        Trash01Icon,
      }
    },
    template: `
    <div class="flex items-center gap-2">
      <Link label="Delete Account" variant="destructive-primary" :icon-left="Trash01Icon" :link="{ href: '#' }" />
      <Link label="Delete Account" variant="destructive-tertiary" :icon-left="Trash01Icon" :link="{ href: '#' }" />
    </div>`,
  }),
}
