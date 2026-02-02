import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import NumberField from './NumberField.vue'

const meta = {
  title: 'Components/NumberField',
  argTypes: {
    id: {
      control: 'text',
      description: 'The id of the element',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the input is in a loading state',
    },
    isReadonly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
    isRequired: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    name: {
      control: 'text',
      description: 'The name of the input',
    },
    autocomplete: {
      control: 'text',
      description: 'The autocomplete attribute of the input',
    },
    errorMessage: {
      control: 'text',
      description: 'The error message to display',
    },
    formatOptions: {
      control: 'object',
      description: 'Intl.NumberFormatOptions for formatting the number display',
    },
    hideErrorMessage: {
      control: 'boolean',
      description: 'Whether to hide the error message visually',
    },
    hint: {
      control: 'text',
      description: 'The hint text of the input',
    },
    label: {
      control: 'text',
      description: 'The label of the input',
    },
    max: {
      control: 'number',
      description: 'The maximum value of the number input',
    },
    min: {
      control: 'number',
      description: 'The minimum value of the number input',
    },
    modelValue: {
      control: 'number',
      description: 'The value of the number field',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text of the input',
    },
    showControls: {
      control: 'boolean',
      description: 'Whether to display increment and decrement controls',
    },
    step: {
      control: 'number',
      description: 'The increment and decrement step for the number input',
    },
  },
  tags: [
    'autodocs',
  ],
  component: NumberField,
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Number Field',
    modelValue: null,
    placeholder: 'Enter a number',
  },
}

export const Counter: Story = {
  args: {
    label: 'Counter',
    modelValue: 0,
    showControls: true,
    step: 1,
  },
}
