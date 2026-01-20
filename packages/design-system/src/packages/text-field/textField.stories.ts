import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import TextField from '@/packages/text-field/TextField.vue'

const meta = {
  title: 'Components/TextField',
  tags: [
    'autodocs',
  ],
  component: TextField,
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: 'sdfsdf',
  },
  render: () => ({
    components: {
      TextField,
    },

    template: `
      <TextField 
        v-model="modelValue" 
        placeholder="Enter text here" 
        label="Name"
      />
    `,
  }),
}
