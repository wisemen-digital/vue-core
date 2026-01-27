/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  expect,
  userEvent,
  within,
} from 'storybook/test'
import { ref } from 'vue'

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
    class: 'w-72',
    label: 'Number Field',
    modelValue: null,
    placeholder: 'Enter a number',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Number Field')

    await userEvent.type(input, '42')

    await expect(input).toHaveValue('42')
  },
}

export const WithHint: Story = {
  args: {
    class: 'w-72',
    hint: 'Enter your age in years.',
    label: 'Age',
    modelValue: null,
    placeholder: 'Enter your age',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const hint = canvas.getByText('Enter your age in years.')

    await expect(hint).toBeInTheDocument()
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
    class: 'w-72',
    label: 'Quantity',
    modelValue: null,
    placeholder: 'Enter quantity',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText(/Quantity/i)

    await expect(input).toBeRequired()
  },
}

export const Counter: Story = {
  args: {
    class: 'w-72',
    label: 'Counter',
    modelValue: 0,
    showControls: true,
    step: 1,
  },
}

export const WithMinMax: Story = {
  args: {
    class: 'w-72',
    label: 'Rating',
    max: 10,
    min: 1,
    modelValue: 5,
    placeholder: '1-10',
    showControls: true,
    step: 1,
  },
}

export const WithStep: Story = {
  args: {
    class: 'w-72',
    label: 'Price',
    min: 0,
    modelValue: 0,
    showControls: true,
    step: 0.5,
  },
}

export const WithFormatOptions: Story = {
  args: {
    class: 'w-72',
    formatOptions: {
      currency: 'EUR',
      style: 'currency',
    },
    label: 'Amount',
    modelValue: 1234.56,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    class: 'w-72',
    label: 'Disabled Field',
    modelValue: 100,
    placeholder: 'Cannot edit',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Disabled Field')

    await expect(input).toBeDisabled()
  },
}

export const DisabledWithControls: Story = {
  args: {
    isDisabled: true,
    class: 'w-72',
    label: 'Disabled Counter',
    modelValue: 5,
    showControls: true,
    step: 1,
  },
}

export const Readonly: Story = {
  args: {
    isReadonly: true,
    class: 'w-72',
    label: 'Read Only Field',
    modelValue: 42,
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Read Only Field')

    await expect(input).toHaveAttribute('readonly')
  },
}

export const ReadonlyWithControls: Story = {
  args: {
    isReadonly: true,
    class: 'w-72',
    label: 'Read Only Counter',
    modelValue: 10,
    showControls: true,
    step: 1,
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    class: 'w-72',
    label: 'Loading Field',
    modelValue: null,
    placeholder: 'Fetching data...',
  },
}

export const Error: Story = {
  args: {
    class: 'w-72',
    errorMessage: 'Value must be between 1 and 100',
    label: 'Quantity',
    modelValue: 150,
    placeholder: 'Enter quantity',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Quantity')

    const errorMessage = canvas.getByText('Value must be between 1 and 100')

    await expect(errorMessage).toBeInTheDocument()

    await expect(input).toHaveAttribute('aria-invalid', 'true')
  },
}

export const ErrorHiddenMessage: Story = {
  args: {
    class: 'w-72',
    errorMessage: 'Value must be between 1 and 100',
    hideErrorMessage: true,
    label: 'Quantity',
    modelValue: 150,
    placeholder: 'Enter quantity',
  },
}

export const AllStates: Story = {
  args: {
    modelValue: null,
  },
  render: (): object => ({
    components: {
      NumberField,
    },
    setup() {
      const defaultValue = ref<number | null>(null)
      const filledValue = ref<number | null>(42)
      const disabledValue = ref<number | null>(100)
      const readonlyValue = ref<number | null>(50)
      const loadingValue = ref<number | null>(null)
      const errorValue = ref<number | null>(150)
      const requiredValue = ref<number | null>(null)
      const counterValue = ref<number | null>(5)
      const disabledCounterValue = ref<number | null>(3)
      const readonlyCounterValue = ref<number | null>(7)

      return {
        counterValue,
        defaultValue,
        disabledCounterValue,
        disabledValue,
        errorValue,
        filledValue,
        loadingValue,
        readonlyCounterValue,
        readonlyValue,
        requiredValue,
      }
    },
    template: `
      <div class="flex flex-wrap gap-4">
        <NumberField
          v-model="defaultValue"
          label="Default"
          placeholder="Enter a number"
          class="w-64"
        />
        <NumberField
          v-model="filledValue"
          label="Filled"
          placeholder="Enter a number"
          class="w-64"
        />
        <NumberField
          v-model="disabledValue"
          :is-disabled="true"
          label="Disabled"
          placeholder="Enter a number"
          class="w-64"
        />
        <NumberField
          v-model="readonlyValue"
          :is-readonly="true"
          label="Read Only"
          class="w-64"
        />
        <NumberField
          v-model="loadingValue"
          :is-loading="true"
          label="Loading"
          placeholder="Loading..."
          class="w-64"
        />
        <NumberField
          v-model="errorValue"
          error-message="Value must be between 1 and 100"
          label="Error"
          class="w-64"
        />
        <NumberField
          v-model="requiredValue"
          :is-required="true"
          label="Required"
          placeholder="Required field"
          class="w-64"
        />
        <NumberField
          v-model="counterValue"
          :show-controls="true"
          :step="1"
          label="Counter"
          class="w-64"
        />
        <NumberField
          v-model="disabledCounterValue"
          :is-disabled="true"
          :show-controls="true"
          :step="1"
          label="Disabled Counter"
          class="w-64"
        />
        <NumberField
          v-model="readonlyCounterValue"
          :is-readonly="true"
          :show-controls="true"
          :step="1"
          label="Read Only Counter"
          class="w-64"
        />
      </div>
    `,
  }),
}

export const FormExample: Story = {
  args: {
    modelValue: null,
  },
  render: (): object => ({
    components: {
      NumberField,
    },
    setup() {
      const age = ref<number | null>(null)
      const height = ref<number | null>(null)
      const weight = ref<number | null>(null)
      const quantity = ref<number | null>(1)

      return {
        age,
        height,
        quantity,
        weight,
      }
    },
    template: `
      <form class="flex max-w-md flex-col gap-4" @submit.prevent>
        <div class="flex gap-4">
          <NumberField
            v-model="age"
            :is-required="true"
            :min="0"
            :max="150"
            label="Age"
            placeholder="Years"
            class="flex-1"
          />
          <NumberField
            v-model="height"
            :min="0"
            label="Height"
            placeholder="cm"
            class="flex-1"
          />
        </div>
        <NumberField
          v-model="weight"
          :min="0"
          hint="In kilograms"
          label="Weight"
          placeholder="kg"
        />
        <NumberField
          v-model="quantity"
          :is-required="true"
          :min="1"
          :max="99"
          :show-controls="true"
          :step="1"
          label="Quantity"
          hint="How many items?"
        />
      </form>
    `,
  }),
}
