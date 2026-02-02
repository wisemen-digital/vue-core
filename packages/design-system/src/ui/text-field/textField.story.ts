import {
  HelpCircleIcon,
  Mail01Icon,
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
import { ref } from 'vue'

import TextField from './TextField.vue'

const meta = {
  title: 'Components/TextField',
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
    modelValue: {
      control: 'text',
      description: 'The value of the input field',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text of the input',
    },
    size: {
      control: 'select',
      description: 'The size of the text field',
      options: [
        'sm',
        'md',
      ],
    },
    type: {
      control: 'select',
      description: 'The type of the input',
      options: [
        'text',
        'email',
        'password',
        'search',
        'tel',
        'time',
        'url',
      ],
    },
  },
  tags: [
    'autodocs',
  ],
  component: TextField,
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    class: 'w-72',
    label: 'Label',
    modelValue: '',
    placeholder: 'Enter text...',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Label')

    await userEvent.type(input, 'Hello World')

    await expect(input).toHaveValue('Hello World')
  },
}

export const WithHint: Story = {
  args: {
    class: 'w-72',
    hint: 'We will never share your email with anyone.',
    label: 'Email',
    modelValue: null,
    placeholder: 'you@example.com',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const hint = canvas.getByText('We will never share your email with anyone.')

    await expect(hint).toBeInTheDocument()

    const input = canvas.getByLabelText('Email')

    await userEvent.type(input, 'test@example.com')

    await expect(input).toHaveValue('test@example.com')

    await expect(input).toHaveAttribute('type')
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
    class: 'w-72',
    label: 'Full Name',
    modelValue: null,
    placeholder: 'Enter your full name',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText(/Full Name/i)

    await expect(input).toBeRequired()

    await userEvent.type(input, 'John Doe')

    await expect(input).toHaveValue('John Doe')
  },
}

export const SizeSmall: Story = {
  args: {
    class: 'w-72',
    label: 'Small Input',
    modelValue: null,
    placeholder: 'Compact size',
    size: 'sm',
  },
}

export const SizeMedium: Story = {
  args: {
    class: 'w-72',
    label: 'Medium Input',
    modelValue: null,
    placeholder: 'Default size',
    size: 'md',
  },
}

export const WithIcons: Story = {
  args: {
    class: 'w-72',
    iconLeft: Mail01Icon,
    iconRight: HelpCircleIcon,
    label: 'Search',
    modelValue: null,
    placeholder: 'Enter your email',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Search')

    await userEvent.type(input, 'user@example.com')

    await expect(input).toHaveValue('user@example.com')

    await expect(input).not.toHaveValue('')
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    class: 'w-72',
    label: 'Disabled Field',
    modelValue: 'Disabled value',
    placeholder: 'Cannot edit',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Disabled Field')

    await expect(input).toBeDisabled()

    await expect(input).toHaveValue('Disabled value')
  },
}

export const Readonly: Story = {
  args: {
    isReadonly: true,
    class: 'w-72',
    label: 'Read Only Field',
    modelValue: 'This value is read-only',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Read Only Field')

    await expect(input).toHaveAttribute('readonly')

    await expect(input).toHaveValue('This value is read-only')
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
    errorMessage: 'This username is already taken',
    label: 'Username',
    modelValue: 'johndoe',
    placeholder: 'Enter username',
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('Username')

    const errorMessage = canvas.getByText('This username is already taken')

    await expect(errorMessage).toBeInTheDocument()

    await expect(input).toHaveAttribute('aria-invalid', 'true')

    await userEvent.clear(input)
    await userEvent.type(input, 'newuser')
    await expect(input).toHaveValue('newuser')
  },
}

export const ErrorHiddenMessage: Story = {
  args: {
    class: 'w-72',
    errorMessage: 'This username is already taken',
    hideErrorMessage: true,
    label: 'Username',
    modelValue: 'johndoe',
    placeholder: 'Enter username',
  },
}

export const AllStates: Story = {
  args: {
    modelValue: null,
  },
  render: (): object => ({
    components: {
      TextField,
    },
    setup() {
      const defaultValue = ref<string | null>(null)
      const disabledValue = ref<string | null>('Disabled')
      const errorValue = ref<string | null>('Invalid input')
      const filledValue = ref<string | null>('Hello World')
      const loadingValue = ref<string | null>(null)
      const readonlyValue = ref<string | null>('Read only')

      return {
        defaultValue,
        disabledValue,
        errorValue,
        filledValue,
        loadingValue,
        readonlyValue,
      }
    },
    template: `
      <div class="flex flex-wrap gap-4">
        <TextField
          v-model="defaultValue"
          label="Default"
          placeholder="Enter text..."
          class="w-64"
        />
        <TextField
          v-model="filledValue"
          label="Filled"
          placeholder="Enter text..."
          class="w-64"
        />
        <TextField
          v-model="disabledValue"
          :is-disabled="true"
          label="Disabled"
          placeholder="Enter text..."
          class="w-64"
        />
        <TextField
          v-model="readonlyValue"
          :is-readonly="true"
          label="Read Only"
          class="w-64"
        />
        <TextField
          v-model="loadingValue"
          :is-loading="true"
          label="Loading"
          placeholder="Loading..."
          class="w-64"
        />
        <TextField
          v-model="errorValue"
          error-message="This field has an error"
          label="Error"
          class="w-64"
        />
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  args: {
    modelValue: null,
  },
  render: (args): object => ({
    components: {
      TextField,
    },
    setup() {
      const mdValue = ref<string | null>(null)
      const smValue = ref<string | null>(null)

      return {
        args,
        mdValue,
        smValue,
      }
    },
    template: `
      <div class="flex items-end gap-4">
        <TextField
          v-model="smValue"
          label="Small (sm)"
          placeholder="Small size"
          size="sm"
          class="w-64"
        />
        <TextField
          v-model="mdValue"
          label="Medium (md)"
          placeholder="Medium size"
          size="md"
          class="w-64"
        />
      </div>
    `,
  }),
}

export const FormExample: Story = {
  args: {
    iconLeft: Mail01Icon,
    iconRight: HelpCircleIcon,
    modelValue: null,
  },
  render: (args): object => ({
    components: {
      TextField,
    },
    setup() {
      const email = ref<string | null>(null)
      const firstName = ref<string | null>(null)
      const lastName = ref<string | null>(null)
      const phone = ref<string | null>(null)

      return {
        args,
        email,
        firstName,
        lastName,
        phone,
      }
    },
    template: `
      <form class="flex max-w-md flex-col gap-4" @submit.prevent>
        <div class="flex gap-4">
          <TextField
            v-model="firstName"
            :is-required="true"
            label="First Name"
            placeholder="John"
            class="flex-1"
          />
          <TextField
            v-model="lastName"
            :is-required="true"
            label="Last Name"
            placeholder="Doe"
            class="flex-1"
          />
        </div>
        <TextField
          v-model="email"
          :is-required="true"
          hint="We'll never share your email"
          label="Email"
          placeholder="you@example.com"
          type="email"
        />
        <TextField
          v-model="phone"
          hint="Optional"
          label="Phone Number"
          placeholder="+1 (555) 123-4567"
          type="tel"
        />
      </form>
    `,
  }),
}
