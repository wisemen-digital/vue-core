import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  expect,
  screen,
  userEvent,
  within,
} from 'storybook/test'

import Button from '@/ui/button/button/Button.vue'

import Tooltip from './Tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'When true, the tooltip will be hidden',
    },
    isPopoverArrowVisible: {
      control: 'boolean',
      description: 'Controls the visibility of the popper arrow',
    },
    delayDuration: {
      control: 'number',
      description: 'The duration in milliseconds to wait before showing the tooltip',
    },
    disableCloseOnTriggerClick: {
      control: 'boolean',
      description: 'When true, clicking on trigger won\'t close the tooltip',
    },
    disableHoverableContent: {
      control: 'boolean',
      description: 'When true, hovering the content will close the tooltip as the pointer leaves the trigger',
    },
    popoverAlign: {
      control: 'select',
      description: 'Defines how the content is aligned relative to the trigger',
      options: [
        'center',
        'end',
        'start',
      ],
    },
    popoverAlignOffset: {
      control: 'number',
      description: 'An offset in pixels from the start or end alignment options',
    },
    popoverCollisionPadding: {
      control: 'number',
      description: 'Padding in pixels used when handling collision detection',
    },
    popoverSide: {
      control: 'select',
      description: 'Defines which side the content should appear on',
      options: [
        'bottom',
        'left',
        'right',
        'top',
      ],
    },
    popoverSideOffset: {
      control: 'number',
      description: 'The distance in pixels between the content and the trigger',
    },
    popoverWidth: {
      control: 'select',
      description: 'Determines the width of the popper content',
      options: [
        'anchor-width',
        'available-width',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const trigger = canvas.getByText('Hover me')

    await userEvent.hover(trigger)

    const tooltip = await screen.findAllByText('What a beautiful tooltip!')

    await expect(tooltip[0]).toBeVisible()
  },
  render: (args) => ({
    components: {
      Button,
      Tooltip,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      :popover-side-offset="4"
    >
      <template #trigger>
        <Button
          label="Hover me"
        />
      </template>
      <template #content>
        <div class="flex px-sm py-xs">
          <p class="flex max-w-xs text-center text-xs text-secondary">
            What a beautiful tooltip!
          </p>
        </div>
      </template>
    </Tooltip>`,
  }),
}

export const LargeContent: Story = {
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const trigger = canvas.getByText('Hover me')

    await userEvent.hover(trigger)

    const title = await screen.findAllByText('What a beautiful tooltip!')
    const description = await screen.findAllByText(/Tooltips are used to describe/)

    await expect(title[0]).toBeVisible()
    await expect(description[0]).toBeVisible()
  },
  render: (args) => ({
    components: {
      Button,
      Tooltip,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      :popover-side-offset="4"
    >
      <template #trigger>
        <Button
          label="Hover me"
        />
      </template>
      <template #content>
        <div class="p-sm">
          <p class="flex max-w-xs text-center text-xs text-secondary font-medium">
            What a beautiful tooltip!
          </p>
          <p class="max-w-xs text-xs text-tertiary mt-xs">
            Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.
          </p>
        </div>
      </template>
    </Tooltip>`,
  }),
}

export const WithArrow: Story = {
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const trigger = canvas.getByText('Hover me')

    await userEvent.hover(trigger)

    const tooltip = await screen.findAllByText('Tooltip with arrow')

    await expect(tooltip[0]).toBeVisible()
  },
  render: (args) => ({
    components: {
      Button,
      Tooltip,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      :is-popover-arrow-visible="true"
      :popover-side-offset="4"
    >
      <template #trigger>
        <Button
          label="Hover me"
        />
      </template>
      <template #content>
        <div class="flex px-sm py-xs">
          <p class="flex max-w-xs text-center text-xs text-secondary">
            Tooltip with arrow
          </p>
        </div>
      </template>
    </Tooltip>`,
  }),
}

export const Disabled: Story = {
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const trigger = canvas.getByText('Hover me (no tooltip)')

    await userEvent.hover(trigger)

    const tooltip = screen.queryAllByText('You should not see this')

    await expect(tooltip).toHaveLength(0)
  },
  render: (args) => ({
    components: {
      Button,
      Tooltip,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      :is-disabled="true"
      :popover-side-offset="4"
    >
      <template #trigger>
        <Button
          label="Hover me (no tooltip)"
        />
      </template>
      <template #content>
        <div class="flex px-sm py-xs">
          <p class="flex max-w-xs text-center text-xs text-secondary">
            You should not see this
          </p>
        </div>
      </template>
    </Tooltip>`,
  }),
}

export const AllSides: Story = {
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Top')).toBeVisible()
    await expect(canvas.getByText('Right')).toBeVisible()
    await expect(canvas.getByText('Bottom')).toBeVisible()
    await expect(canvas.getByText('Left')).toBeVisible()
  },
  render: () => ({
    components: {
      Button,
      Tooltip,
    },
    template: `
    <div class="flex items-center justify-center gap-16 p-32">
      <Tooltip popover-side="top" :popover-side-offset="4">
        <template #trigger>
          <Button label="Top" />
        </template>
        <template #content>
          <div class="flex px-sm py-xs">
            <p class="text-xs text-secondary">Top tooltip</p>
          </div>
        </template>
      </Tooltip>

      <Tooltip popover-side="right" :popover-side-offset="4">
        <template #trigger>
          <Button label="Right" />
        </template>
        <template #content>
          <div class="flex px-sm py-xs">
            <p class="text-xs text-secondary">Right tooltip</p>
          </div>
        </template>
      </Tooltip>

      <Tooltip popover-side="bottom" :popover-side-offset="4">
        <template #trigger>
          <Button label="Bottom" />
        </template>
        <template #content>
          <div class="flex px-sm py-xs">
            <p class="text-xs text-secondary">Bottom tooltip</p>
          </div>
        </template>
      </Tooltip>

      <Tooltip popover-side="left" :popover-side-offset="4">
        <template #trigger>
          <Button label="Left" />
        </template>
        <template #content>
          <div class="flex px-sm py-xs">
            <p class="text-xs text-secondary">Left tooltip</p>
          </div>
        </template>
      </Tooltip>
    </div>`,
  }),
}
