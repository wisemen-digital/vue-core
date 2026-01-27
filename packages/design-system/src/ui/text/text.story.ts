import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  expect,
  within,
} from 'storybook/test'

import Text from './Text.vue'

const meta = {
  title: 'Components/Text',
  argTypes: {
    as: {
      control: 'select',
      description: 'The HTML element to render as',
      options: [
        'span',
        'p',
        'h1',
        'h2',
        'h3',
        'div',
      ],
    },
    disableTooltip: {
      control: 'boolean',
      description: 'Disables the tooltip even if the text is truncated',
    },
    text: {
      control: 'text',
      description: 'The text content to display',
    },
    truncate: {
      control: 'select',
      description: 'Truncation mode: true for single line, or a number (2-6) for multi-line clamping',
      options: [
        true,
        2,
        3,
        4,
        5,
        6,
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: Text,
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

const longText = 'This is a long piece of text that should be truncated when it overflows its container. It keeps going and going to demonstrate the truncation behavior of the Text component.'

export const Default: Story = {
  args: {
    class: 'w-64',
    text: 'Hello World',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText('Hello World')

    await expect(text).toBeVisible()
    await expect(text.tagName.toLowerCase()).toBe('span')
  },
}

export const Truncated: Story = {
  args: {
    class: 'w-64',
    text: longText,
    truncate: true,
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText(longText)

    await expect(text).toBeVisible()
    await expect(text.scrollWidth).toBeGreaterThan(text.clientWidth)
  },
}

export const MultiLineClamp: Story = {
  args: {
    class: 'w-64',
    text: longText,
    truncate: 2,
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText(longText)

    await expect(text).toBeVisible()
    await expect(text.scrollHeight).toBeGreaterThan(text.clientHeight)
  },
}

export const AsHeading: Story = {
  args: {
    as: 'h1',
    class: 'w-64 text-xl font-bold',
    text: 'This is a heading element',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText('This is a heading element')

    await expect(text.tagName.toLowerCase()).toBe('h1')
  },
}

export const AsParagraph: Story = {
  args: {
    as: 'p',
    class: 'w-64',
    text: longText,
    truncate: 3,
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const text = canvas.getByText(longText)

    await expect(text.tagName.toLowerCase()).toBe('p')
  },
}
